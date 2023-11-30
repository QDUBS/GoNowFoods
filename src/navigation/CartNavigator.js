import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {AppRoutes} from '../constants/app_routes';
import AllCartScreen from '../screens/cart/AllCartScreen';
import CartScreen from '../screens/cart/CartScreen';

const CartStackNavigator = () => {
  const CartStack = createStackNavigator();

  return (
    <CartStack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <CartStack.Screen
        name={AppRoutes.AllCartScreen}
        component={AllCartScreen}
      />
      <CartStack.Screen name={AppRoutes.CartScreen} component={CartScreen} />
    </CartStack.Navigator>
  );
};

export default CartStackNavigator;
