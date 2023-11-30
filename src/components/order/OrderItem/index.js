import {View, Text, Image, Pressable} from 'react-native';
import React from 'react';
import styles from './styles';
import date from '../../../utils/date';

const OrderItem = ({order, onPress}) => {
  return (
    <Pressable style={styles.container} onPress={onPress}>
      <Image source={{uri: order?.restaurant?.image}} style={styles.image} />

      <View style={styles.details}>
        <Text style={styles.name}>{order?.restaurant?.name}</Text>
        <Text style={styles.info}>
          {order?.order_dishes?.length} Items &#8226; &#x20A6;
          {order?.total.toLocaleString()}
        </Text>
        <Text style={styles.time}>
          {date.getMonthDaysMinutesDuration(order?.createdAt?.toString())}{' '}
          &#8226; {order?.status}
        </Text>
      </View>
    </Pressable>
  );
};

export default OrderItem;
