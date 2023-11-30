import AsyncStorage from '@react-native-async-storage/async-storage';
import {createContext, useContext, useEffect, useState} from 'react';
import {useAuthContext} from './AuthContext';
import {useCartContext} from './CartContext';
import axios from 'axios';
import {BASE_URL} from '../utils/config';

const OrderContext = createContext({});

const OrderContextProvider = ({children}) => {
  const [userId, setUserId] = useState(null);
  const {restaurant} = useCartContext();
  const [orders, setOrders] = useState([]);
  const [cart, setCart] = useState(null);
  const [cartDishes, setCartDishes] = useState([]);
  const [total, setTotal] = useState(0);

  const createOrder = async (cart, restaurant, total) => {
    try {
      // Creating a new order
      const newOrder = await axios.post(`${BASE_URL}/orders`, {
        user_id: userId,
        courier_id: '',
        restaurant_id: restaurant?.id,
        total: total,
        status: 'NEW',
      });

      // Create order dishes and add them to the order
      await Promise.all(
        cart?.basket_dishes?.map(cartDish => {
          axios.post(`${BASE_URL}/order-dishes`, {
            dish_id: cartDish.dish.id,
            order_id: newOrder.data.id,
            quantity: cartDish.quantity,
          });
        }),
      );

      // Delete cart
      await axios.delete(`${BASE_URL}/baskets/${cart.id}`);
      setOrders([...orders, newOrder]);

      return newOrder.data;
    } catch (error) {
      console.error('An error occurred:', error);
    }
  };

  const getOrders = async user_id => {
    try {
      const orders = await axios.get(
        `${BASE_URL}/orders/user?user_id=${user_id}`,
      );
      return orders.data;
    } catch (error) {
      console.error('An error occurred:', error);
    }
  };

  const getOrder = async id => {
    try {
      const order = await axios.get(`${BASE_URL}/orders/${id}`);
      return order.data;
    } catch (error) {
      console.error('An error occurred:', error);
    }
  };

  useEffect(() => {
    const loadData = async () => {
      const id = await AsyncStorage.getItem('userId');
      setUserId(id);
    };

    loadData();
  }, [userId]);

  return (
    <OrderContext.Provider value={{createOrder, getOrder, getOrders, orders}}>
      {children}
    </OrderContext.Provider>
  );
};

export default OrderContextProvider;
export const useOrderContext = () => useContext(OrderContext);
