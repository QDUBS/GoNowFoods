import React, {useEffect, useState} from 'react';
import {ActivityIndicator, FlatList, Text, View} from 'react-native';
import styles from './styles';
import OrderItem from '../../../components/order/OrderItem';
import {useOrderContext} from '../../../context/OrderContext';
import {useNavigation} from '@react-navigation/native';
import {AppRoutes} from '../../../constants/app_routes';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {ScrollView} from 'react-native-gesture-handler';
import EmptyOrders from '../../../components/empty/EmptyOrders';

const OrdersScreen = () => {
  const navigation = useNavigation();
  const [userId, setUserId] = useState(null);
  const [orders, setOrders] = useState([]);
  const {getOrders} = useOrderContext();

  useEffect(() => {
    const fetchOrders = async () => {
      const orders = await getOrders(userId);
      setOrders(orders);
    };
    fetchOrders();
  }, [userId, orders]);

  useEffect(() => {
    const loadData = async () => {
      const id = await AsyncStorage.getItem('userId');
      setUserId(id);
    };

    loadData();
  }, [userId]);

  if (!orders) {
    return <ActivityIndicator color={'black'} />;
  }

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.heading}>Orders</Text>

      <View style={styles.ordersContainer}>
        {orders.length > 0 ? (
          <View>
            {orders.map(order => (
              <OrderItem
                key={order.id}
                order={order}
                onPress={() => {
                  navigation.navigate(AppRoutes.OrderNavigator, {id: order.id});
                }}
              />
            ))}
          </View>
        ) : (
          <EmptyOrders onPress={() => {}} />
        )}
      </View>
    </ScrollView>
  );
};

export default OrdersScreen;
