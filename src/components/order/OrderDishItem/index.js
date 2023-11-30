import {View, Text, Image, Pressable} from 'react-native';
import React from 'react';
import styles from './styles';
import date from '../../../utils/date';

const OrderDishItem = ({item}) => {
  return (
    <View style={styles.container}>
      <Image
        source={{uri: item.dish.image ? item.dish.image : ''}}
        style={styles.image}
      />
      <View>
        <View style={{flex: 1}}>
          <Text style={styles.menuItem}>{item.dish.name}</Text>
          <Text style={styles.menuPrice}>
            &#x20A6;{item.dish.price.toLocaleString()} &#8226; {item.quantity}x
          </Text>
        </View>
        <Text style={styles.menuTime}>
          Ordered{' '}
          {date.getMonthDaysMinutesDuration(item?.createdAt?.toString())}
        </Text>
      </View>
    </View>
  );
};

export default OrderDishItem;
