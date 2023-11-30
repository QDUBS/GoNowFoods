import {useNavigation, useRoute} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {ActivityIndicator, FlatList, Pressable, Text, View} from 'react-native';
import CartItem from '../../../components/cart/CartItem';
import {AppRoutes} from '../../../constants/app_routes';
import {useCartContext} from '../../../context/CartContext';
import {useOrderContext} from '../../../context/OrderContext';
import styles from './styles';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {BASE_URL} from '../../../utils/config';
import axios from 'axios';

const CartScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const id = route.params?.id;
  const [cart, setCart] = useState(null);
  const [cartDishes, setCartDishes] = useState([]);
  const {setCartRestaurant} = useCartContext();
  const {createOrder} = useOrderContext();
  const sumTotal = cartDishes.reduce(
    (sum, cartDish) => sum + cartDish.quantity * cartDish.dish.price,
    cart?.restaurant?.delivery_fee,
  );

  const getCart = async id => {
    try {
      const basket = await axios.get(`${BASE_URL}/baskets/${id}`);
      setCart(basket.data);
    } catch (error) {
      console.error('An error occurred:', error);
    }
  };

  const getCartDishes = async basket_id => {
    try {
      const cartDishes = await axios.get(
        `${BASE_URL}/basket-dishes?basket_id=${basket_id}`,
      );

      setCartDishes(cartDishes.data);
    } catch (error) {
      console.error('An error occurred:', error);
    }
  };

  const onCreateOrder = async () => {
    if (cart) {
      setCartRestaurant(cart?.restaurant);

      const newOrder = await createOrder(cart, cart?.restaurant, sumTotal);
      console.log('New order:', newOrder);
      navigation.navigate(AppRoutes.Orders, {
        screen: AppRoutes.OrderNavigator,
        params: {id: newOrder.id},
      });
    }
  };

  const removeItem = async id => {
    await axios.delete(`${BASE_URL}/basket-dishes/${id}`);
    navigation.navigate(AppRoutes.Restaurant, {id: cart?.restaurant?.id});
  };

  useEffect(() => {
    if (id) {
      getCart(id);
    }
  }, [id]);

  useEffect(() => {
    if (cart) {
      getCartDishes(id);
    }
  }, [cart]);

  if (!cart) {
    return <ActivityIndicator />;
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text></Text>
      </View>

      <View style={{paddingHorizontal: 10, paddingBottom: 10}}>
        <Text style={styles.name}>{cart?.restaurant?.name}</Text>
      </View>

      <Text style={styles.itemsHeading}>Your Items</Text>

      <View style={{paddingHorizontal: 10}}>
        <FlatList
          data={cartDishes}
          renderItem={({item}) => (
            <CartItem cartItem={item} onPress={() => removeItem(item.id)} />
          )}
        />
      </View>

      <View style={styles.separator} />

      <View
        style={{
          paddingHorizontal: 10,
          position: 'absolute',
          bottom: 15,
          width: '100%',
        }}>
        <Pressable style={styles.button} onPress={onCreateOrder}>
          <Text style={styles.buttonText}>
            Create order &#8226; &#x20A6;{sumTotal.toLocaleString()}
          </Text>
        </Pressable>
      </View>
    </View>
  );
};

export default CartScreen;
