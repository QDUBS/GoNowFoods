import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import {createContext, useContext, useEffect, useState} from 'react';
import {BASE_URL} from '../utils/config';

const CartContext = createContext({});

const CartContextProvider = ({children}) => {
  const [id, setId] = useState(null);
  const [user, setUser] = useState(null);
  const [restaurant, setRestaurant] = useState(null);
  const [cart, setCart] = useState(null);
  const [cartDishes, setCartDishes] = useState([]);

  const getCart = async (user_id, restaurant_id) => {
    try {
      const basket = await axios.get(
        `${BASE_URL}/baskets/restaurant?user_id=${user_id}&restaurant_id=${restaurant_id}`,
      );
      setCart(basket.data);
    } catch (error) {
      console.error('An error occurred:', error);
    }
  };

  const getCartDishes = async cart => {
    try {
      const cartDishes = await axios.get(
        `${BASE_URL}/basket-dishes?basket_id=${cart.id}`,
      );

      setCartDishes(cartDishes.data);
    } catch (error) {
      console.error('An error occurred:', error);
    }
  };

  const createCart = async () => {
    try {
      const newCart = await axios.post(`${BASE_URL}/baskets`, {
        user_id: id,
        restaurant_id: restaurant.id,
      });
      if (newCart.status === 201) {
        setCart(newCart.data);
        return newCart.data;
      }
      
    } catch (error) {
      console.error('An error occurred:', error);
    }
  };

  const updateCart = async () => {
    console.log('User ID:', id);
    console.log('Restaurant:', restaurant);
  };

  const addDishToCart = async (dish, quantity) => {
    let userCart = cart || (await createCart());

    try {
      const newCartDish = await axios.post(`${BASE_URL}/basket-dishes`, {
        basket_id: userCart.id,
        dish_id: dish.id,
        quantity: quantity,
      });
      setCartDishes([...cartDishes, newCartDish]);
    } catch (error) {
      console.error('An error occurred:', error);
    }
  };

  const setCartRestaurant = async (restaurant) => {
    setRestaurant(restaurant);
  };

  useEffect(() => {
    if (id && restaurant) {
      getCart(id, restaurant.id);
    }
  }, [id, restaurant]);

  useEffect(() => {
    if (cart) {
      getCartDishes(cart);
    }
  }, [cart]);

  useEffect(() => {
    const loadData = async () => {
      const id = await AsyncStorage.getItem('userId');
      const user = await AsyncStorage.getItem('userInfo');
      setId(id);
      setUser(user);
    };

    loadData();
  }, [id, user]);

  return (
    <CartContext.Provider
      value={{
        addDishToCart,
        restaurant,
        setCartRestaurant,
        cart,
        cartDishes,
        updateCart,
      }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
export const useCartContext = () => useContext(CartContext);
