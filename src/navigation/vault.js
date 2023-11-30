import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import {ActivityIndicator, View} from 'react-native';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {AppRoutes} from '../constants/app_routes';
import {useAuthContext} from '../context/AuthContext';
import AllCartScreen from '../screens/cart/AllCartScreen';
import CartScreen from '../screens/cart/CartScreen';
import HomeScreen from '../screens/home/HomeScreen';
import LoginScreen from '../screens/auth/LoginScreen';
import MenuItemScreen from '../screens/home/MenuItemScreen';
import OrdersScreen from '../screens/orders/OrdersScreen';
import RegisterScreen from '../screens/auth/RegisterScreen';
import RestaurantScreen from '../screens/home/RestaurantScreen';
import OrderNavigator from './OrderNavigator';
import ExploreScreen from '../screens/explore/ExploreScreen';
import AdScreen from '../screens/explore/AdScreen';
import FavoritesScreen from '../screens/favorites/FavoritesScreen';
import SettingsScreen from '../screens/settings/SettingsScreen';

const Stack = createStackNavigator();
const AuthStack = createStackNavigator();
const HomeStack = createStackNavigator();
const OrdersStack = createStackNavigator();
const CartStack = createStackNavigator();
const ExploreStack = createStackNavigator();
const FavoritesStack = createStackNavigator();
const SettingssStack = createStackNavigator();
const Tab = createBottomTabNavigator();

const RootNavigator = () => {
  const {isLoading, userToken} = useAuthContext();

  if (isLoading) {
    return (
      <View
        style={{
          height: '100%',
          justifyContent: 'center',
          alignItems: 'center ',
        }}>
        <ActivityIndicator size={'large'} />
      </View>
    );
  }

  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      {userToken === null ? (
        <Stack.Screen name={AppRoutes.AuthTab} component={AuthStackNavigator} />
      ) : (
        <Stack.Screen name={AppRoutes.HomeTab} component={HomeTabs} />
      )}
    </Stack.Navigator>
  );
};

const AuthStackNavigator = () => {
  return (
    <AuthStack.Navigator screenOptions={{headerShown: false}}>
      <AuthStack.Screen name={AppRoutes.Login} component={LoginScreen} />
      <AuthStack.Screen name={AppRoutes.Register} component={RegisterScreen} />
    </AuthStack.Navigator>
  );
};

const HomeStackNavigator = () => {
  return (
    <HomeStack.Navigator screenOptions={{headerShown: false}}>
      <HomeStack.Screen name={AppRoutes.HomeScreen} component={HomeScreen} />
      <HomeStack.Screen
        name={AppRoutes.Restaurant}
        component={RestaurantScreen}
      />
      <HomeStack.Screen name={AppRoutes.MenuItem} component={MenuItemScreen} />
      <HomeStack.Screen name={AppRoutes.Cart} component={AllCartScreen} />
      <CartStack.Screen name={AppRoutes.CartDetail} component={CartScreen} />
    </HomeStack.Navigator>
  );
};

const ExploreStackNavigator = () => {
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

const FavoritesStackNavigator = () => {
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

const CartStackNavigator = () => {
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

const OrdersStackNavigator = () => {
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
        name={AppRoutes.OrderNavigator}
        component={OrderNavigator}
      />
    </OrdersStack.Navigator>
  );
};

const SettingsStackNavigator = () => {
  return (
    <SettingssStack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <SettingssStack.Screen
        name={AppRoutes.SettingsScreen}
        component={SettingsScreen}
      />
    </SettingssStack.Navigator>
  );
};

const HomeTabs = () => {
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
        name={AppRoutes.SettingsStack}
        component={SettingsStackNavigator}
        options={{
          headerShown: false,
          tabBarIcon: ({color}) => (
            <MaterialIcons name="settings" size={25} color={color} />
          ),
          title: 'Settings',
        }}
      />
    </Tab.Navigator>
  );
};

export default RootNavigator;
