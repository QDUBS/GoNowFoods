import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {AppRoutes} from '../constants/app_routes';
import LoginScreen from '../screens/auth/LoginScreen';
import PasswordResetScreen from '../screens/auth/PasswordResetScreen';
import RegisterScreen from '../screens/auth/RegisterScreen';
import PhoneVerificationScreen from '../screens/auth/PhoneVerificationScreen';
import ProfileSetupScreen from '../screens/auth/ProfileSetupScreen';
import ProfileScreen from '../screens/profile/ProfileScreen';
import OrderCheckoutScreen from '../screens/orders/OrderCheckoutScreen';
import PayStack from '../screens/orders/Paystack';
// import DrawerNavigator from './DrawerNavigator';

const AuthStackNavigator = () => {
  const AuthStack = createStackNavigator();

  return (
    <AuthStack.Navigator screenOptions={{headerShown: false}}>
      <AuthStack.Screen
        name={AppRoutes.OrderCheckoutScreen}
        component={OrderCheckoutScreen}
      />
      <AuthStack.Screen
        name={AppRoutes.Paystack}
        component={PayStack}
      />
      <AuthStack.Screen name={AppRoutes.Login} component={LoginScreen} />
      <AuthStack.Screen name={AppRoutes.Register} component={RegisterScreen} />
      <AuthStack.Screen
        name={AppRoutes.PasswordResetScreen}
        component={PasswordResetScreen}
      />
      <AuthStack.Screen
        name={AppRoutes.ProfileSetupScreen}
        component={ProfileSetupScreen}
      />
      {/* <AuthStack.Screen name={AppRoutes.Home} component={DrawerNavigator} /> */}
    </AuthStack.Navigator>
  );
};

export default AuthStackNavigator;
