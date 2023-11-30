import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { AppRoutes } from '../constants/app_routes';
import FavoritesScreen from '../screens/favorites/FavoritesScreen';

const FavoritesStackNavigator = () => {
  const FavoritesStack = createStackNavigator();

  return (
    <FavoritesStack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <FavoritesStack.Screen
        name={AppRoutes.FavoritesScreen}
        component={FavoritesScreen}
      />
    </FavoritesStack.Navigator>
  );
};

export default FavoritesStackNavigator;
