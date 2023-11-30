import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { AppRoutes } from '../constants/app_routes';
import AdScreen from '../screens/explore/AdScreen';
import ExploreScreen from '../screens/explore/ExploreScreen';

const ExploreStackNavigator = () => {
const ExploreStack = createStackNavigator();

  return (
    <ExploreStack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <ExploreStack.Screen
        name={AppRoutes.ExploreScreen}
        component={ExploreScreen}
      />
      <ExploreStack.Screen name={AppRoutes.AdScreen} component={AdScreen} />
    </ExploreStack.Navigator>
  );
};

export default ExploreStackNavigator;
