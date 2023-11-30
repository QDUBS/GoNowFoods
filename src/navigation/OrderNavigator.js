import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import OrderLiveUpdateScreen from '../screens/orders/OrderLiveUpdateScreen';
import OrderDetailScreen from '../screens/orders/OrderDetailScreen';
import {AppRoutes} from '../constants/app_routes';

const Tab = createMaterialTopTabNavigator();

const OrderNavigator = ({route}) => {
  const id = route.params?.id;

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarIndicatorStyle: {
          backgroundColor: 'black',
        },
        tabBarStyle: {
          paddingTop: '15%',
        },
      }}>
      <Tab.Screen
        name={AppRoutes.OrderDetail}
        options={{
          title: 'Order Details',
        }}>
        {() => <OrderDetailScreen id={id} />}
      </Tab.Screen>
      <Tab.Screen
        name={AppRoutes.OrderUpdatesNavigator}
        options={{
          title: 'Track Order',
        }}>
        {() => <OrderLiveUpdateScreen id={id} />}
      </Tab.Screen>
    </Tab.Navigator>
  );
};

export default OrderNavigator;
