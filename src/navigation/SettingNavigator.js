import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {AppRoutes} from '../constants/app_routes';
import SettingsScreen from '../screens/settings/SettingsScreen';
import AboutScreen from '../screens/settings/AboutScreen';
import CheckUpdatesScreen from '../screens/settings/CheckUpdatesScreen';
import DataProtectionPolicyScreen from '../screens/settings/DataProtectionPolicyScreen';
import FAQScreen from '../screens/settings/FAQScreen';
import PasswordResetScreen from '../screens/auth/PasswordResetScreen';
import SupportScreen from '../screens/settings/SupportScreen';
import TermsConditionsScreen from '../screens/settings/TermsConditionsScreen';
import OrderNavigator from './OrderNavigator';
import OrdersScreen from '../screens/orders/OrdersScreen';

const SettingsStackNavigator = () => {
  const SettingssStack = createStackNavigator();

  return (
    <SettingssStack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <SettingssStack.Screen
        name={AppRoutes.OrdersScreen}
        component={OrdersScreen}
      />
      <SettingssStack.Screen
        name={AppRoutes.OrderNavigator}
        component={OrderNavigator}
      />
      <SettingssStack.Screen
        name={AppRoutes.SettingsScreen}
        component={SettingsScreen}
      />
      <SettingssStack.Screen
        name={AppRoutes.AboutScreen}
        component={AboutScreen}
      />
      <SettingssStack.Screen
        name={AppRoutes.CheckUpdatesScreen}
        component={CheckUpdatesScreen}
      />
      <SettingssStack.Screen
        name={AppRoutes.DataProtectionPolicyScreen}
        component={DataProtectionPolicyScreen}
      />
      <SettingssStack.Screen name={AppRoutes.FAQScreen} component={FAQScreen} />
      <SettingssStack.Screen
        name={AppRoutes.PasswordResetScreen}
        component={PasswordResetScreen}
      />
      <SettingssStack.Screen
        name={AppRoutes.SupportScreen}
        component={SupportScreen}
      />
      <SettingssStack.Screen
        name={AppRoutes.TermsConditionsScreen}
        component={TermsConditionsScreen}
      />
    </SettingssStack.Navigator>
  );
};

export default SettingsStackNavigator;
