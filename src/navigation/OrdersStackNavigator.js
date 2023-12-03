import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { AppRoutes } from '../constants/app_routes';
import OrdersScreen from '../screens/orders/OrdersScreen';
import OrderNavigator from './OrderNavigator';
import OrderRatingScreen from '../screens/orders/OrderRatingScreen';
import ThankYouScreen from '../screens/orders/ThankYouScreen';
import OrderCheckoutScreen from '../screens/orders/OrderCheckoutScreen';

const OrdersStackNavigator = () => {
  const OrdersStack = createStackNavigator();

  return (
    <OrdersStack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <OrdersStack.Screen
        name={AppRoutes.OrdersScreen}
        component={OrdersScreen}
      />
      <OrdersStack.Screen
        name={AppRoutes.OrderCheckoutScreen}
        component={OrderCheckoutScreen}
      />
      <OrdersStack.Screen
        name={AppRoutes.OrderNavigator}
        component={OrderNavigator}
      />
      <OrdersStack.Screen
        name={AppRoutes.OrderRatingScreen}
        component={OrderRatingScreen}
      />
      <OrdersStack.Screen
        name={AppRoutes.ThankYouScreen}
        component={ThankYouScreen}
      />
    </OrdersStack.Navigator>
  );
};

export default OrdersStackNavigator;
