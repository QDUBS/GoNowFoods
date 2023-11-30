import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { AppRoutes } from '../constants/app_routes';
import CartStackNavigator from './CartNavigator';
import ExploreStackNavigator from './ExploreNavigator';
import FavoritesStackNavigator from './FavoritesNavigator';
import HomeStackNavigator from './HomeNavigator';
import OrdersStackNavigator from './OrdersStackNavigator';

const BottomTabNavigator = () => {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: 'black',
        tabBarInactiveTintColor: '#ccc',
        tabBarStyle: {
          paddingBottom: 8,
          paddingTop: 2,
        },
      }}>
      <Tab.Screen
        name={AppRoutes.Home}
        component={HomeStackNavigator}
        options={{
          headerShown: false,
          tabBarIcon: ({color}) => (
            <MaterialIcons name="home" size={25} color={color} />
          ),
          title: 'Home',
        }}
      />
      <Tab.Screen
        name={AppRoutes.ExploreStack}
        component={ExploreStackNavigator}
        options={{
          headerShown: false,
          tabBarIcon: ({color}) => (
            <MaterialIcons name="explore" size={25} color={color} />
          ),
          title: 'Explore',
        }}
      />
      <Tab.Screen
        name={AppRoutes.FavoritesStack}
        component={FavoritesStackNavigator}
        options={{
          headerShown: false,
          tabBarIcon: ({color}) => (
            <MaterialIcons name="favorite" size={25} color={color} />
          ),
          title: 'Favorites',
        }}
      />

      <Tab.Screen
        name={AppRoutes.CartStack}
        component={CartStackNavigator}
        options={{
          headerShown: false,
          tabBarIcon: ({color}) => (
            <FontAwesome6 name="bag-shopping" size={25} color={color} />
          ),
          title: 'Cart',
        }}
      />
      <Tab.Screen
        name={AppRoutes.Orders}
        component={OrdersStackNavigator}
        options={{
          headerShown: false,
          tabBarIcon: ({color}) => (
            <FontAwesome6 name="tags" size={25} color={color} />
          ),
          title: 'Orders',
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
