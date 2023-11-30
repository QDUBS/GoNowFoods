import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation, useRoute} from '@react-navigation/native';
import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {
  ActivityIndicator,
  Image,
  Pressable,
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  View,
} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MenuItem from '../../../components/home/MenuItem';
import {AppRoutes} from '../../../constants/app_routes';
import {useCartContext} from '../../../context/CartContext';
import {BASE_URL} from '../../../utils/config';
import styles from './styles';

const RestaurantScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const id = route.params?.id;
  const [restaurant, setRestaurant] = useState(null);
  const [dishes, setDishes] = useState([]);
  const [userId, setUserId] = useState(null);
  const [cart, setCart] = useState(null);
  const [cartDishes, setCartDishes] = useState([]);
  const {setCartRestaurant} = useCartContext();

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

  useEffect(() => {
    const getRestaurant = async () => {
      try {
        const restaurant = await axios.get(`${BASE_URL}/restaurants/${id}`);
        setRestaurant(restaurant.data);
        setCartRestaurant(restaurant.data);
      } catch (error) {
        console.error('An error occurred:', error);
      }
    };

    getRestaurant();
  }, [id, restaurant]);

  useEffect(() => {
    const getDishes = async () => {
      try {
        const dishes = await axios.get(
          `${BASE_URL}/dishes?restaurant_id=${id}`,
        );
        setDishes(dishes.data);
      } catch (error) {
        console.error('An error occurred:', error);
      }
    };

    getDishes();
  }, [id, dishes]);

  useEffect(() => {
    const loadData = async () => {
      const id = await AsyncStorage.getItem('userId');
      setUserId(id);
    };

    loadData();
  }, [userId]);

  useEffect(() => {
    if (userId && restaurant) {
      getCart(userId, restaurant.id);
    }
  }, [userId, restaurant]);

  useEffect(() => {
    if (cart) {
      getCartDishes(cart);
    }
  }, [cart]);

  if (!restaurant || !dishes) {
    return <ActivityIndicator />;
  }

  return (
    <SafeAreaView>
      <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
        <StatusBar
          translucent
          backgroundColor="transparent"
          barStyle="dark-content"
        />

        <View style={{height: 300, position: 'relative'}}>
          <Image
            source={{uri: restaurant.image ? restaurant.image : ''}}
            style={styles.image}
          />
          <Pressable
            style={styles.backButton}
            onPress={() => navigation.goBack()}>
            <FontAwesome5 name="arrow-left" size={15} color={'black'} />
          </Pressable>
        </View>

        <View style={{marginVertical: 7, paddingHorizontal: 10}}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Text style={styles.name}>{restaurant.name}</Text>
            <MaterialIcons name="favorite" size={25} color={'#000'} />
          </View>
          <Text style={styles.description}>
            &#x20A6;{restaurant.delivery_fee.toLocaleString()} &#8226;{' '}
            {restaurant.min_delivery_time} - {restaurant.max_delivery_time} mins
          </Text>
        </View>

        {/* Menu */}
        <Text style={styles.menuHeading}>Menu</Text>

        <View style={{paddingHorizontal: 10}}>
          {dishes.map((dish, index) => (
            <MenuItem
              key={index}
              menuItem={dish}
              onPress={() =>
                navigation.navigate(AppRoutes.MenuItem, {id: dish.id})
              }
            />
          ))}
        </View>
      </ScrollView>

      {cart && cartDishes.length > 0 && (
        <View style={styles.buttonContainer}>
          <Pressable
            style={styles.button}
            onPress={() =>
              navigation.navigate(AppRoutes.CartDetail, {
                id: cart.id,
              })
            }>
            <Text style={styles.buttonText}>
              Go to cart &#8226; {cartDishes.length} items
            </Text>
          </Pressable>
        </View>
      )}
    </SafeAreaView>
  );
};

export default RestaurantScreen;
