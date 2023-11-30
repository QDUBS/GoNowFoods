import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {AppRoutes} from '../constants/app_routes';
import MenuItemScreen from '../screens/home/MenuItemScreen';
import AllCartScreen from '../screens/cart/AllCartScreen';
import HomeScreen from '../screens/home/HomeScreen';
import CartScreen from '../screens/cart/CartScreen';
import RestaurantScreen from '../screens/home/RestaurantScreen';
import CatgoriesScreen from '../screens/categories/CatgoriesScreen';
import RecommendedScreen from '../screens/see_all/RecommendedScreen';
import NearScreen from '../screens/see_all/NearScreen';
import ProfileStackNavigator from './ProfileNavigator';
import CartStackNavigator from './CartNavigator';

const HomeStackNavigator = () => {
  const HomeStack = createStackNavigator();

  return (
    <HomeStack.Navigator screenOptions={{headerShown: false}}>
      <HomeStack.Screen name={AppRoutes.HomeScreen} component={HomeScreen} />
      <HomeStack.Screen
        name={AppRoutes.Restaurant}
        component={RestaurantScreen}
      />
      <HomeStack.Screen name={AppRoutes.MenuItem} component={MenuItemScreen} />
      <HomeStack.Screen name={AppRoutes.Cart} component={AllCartScreen} />
      <HomeStack.Screen name={AppRoutes.CartDetail} component={CartScreen} />
      <HomeStack.Screen
        name={AppRoutes.CategoriesScreen}
        component={CatgoriesScreen}
      />
      <HomeStack.Screen
        name={AppRoutes.RecommendedScreen}
        component={RecommendedScreen}
      />
      <HomeStack.Screen name={AppRoutes.NearScreen} component={NearScreen} />
      <HomeStack.Screen
        name={AppRoutes.Profile}
        component={ProfileStackNavigator}
      />
      <HomeStack.Screen
        name={AppRoutes.HomeCart}
        component={CartStackNavigator}
      />
    </HomeStack.Navigator>
  );
};

export default HomeStackNavigator;
