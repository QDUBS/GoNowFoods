import React, {useEffect, useState} from 'react';
import {ActivityIndicator, Image, ScrollView, Text, View} from 'react-native';
import OrderDishItem from '../../../components/order/OrderDishItem';
import {useOrderContext} from '../../../context/OrderContext';
import date from '../../../utils/date';
import styles from './styles';

const OrderDetailScreen = ({id}) => {
  const [order, setOrder] = useState(null);
  const {getOrder} = useOrderContext();

  useEffect(() => {
    const fetchOrder = async () => {
      const order = await getOrder(id);
      setOrder(order);
    };
    fetchOrder();
  }, [id, order]);

  if (!order) {
    return <ActivityIndicator color={'black'} />;
  }

  return (
    <ScrollView style={styles.container}>
      <View style={{position: 'relative'}}>
        <Image
          source={{
            uri: order?.restaurant?.image ? order?.restaurant?.image : '',
          }}
          style={styles.image}
        />
      </View>

      <View style={{marginVertical: 7, paddingHorizontal: 10}}>
        <Text style={styles.name}>{order?.restaurant?.name}</Text>
        <Text style={styles.description}>
          {order?.status} &#8226;{' '}
          {date.getMonthDaysMinutesDuration(order?.createdAt?.toString())}{' '}
          &#8226; &#x20A6;{order?.total.toLocaleString()}
        </Text>
      </View>

      {/* Orders */}
      <Text style={styles.menuHeading}>Your orders</Text>

      <View style={styles.ordersContainer}>
        {order?.order_dishes?.map(dish => {
          return <OrderDishItem key={dish.dish_id} item={dish} />;
        })}
      </View>
    </ScrollView>
  );
};

export default OrderDetailScreen;
