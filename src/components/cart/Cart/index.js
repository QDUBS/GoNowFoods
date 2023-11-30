import React from 'react';
import {Image, Pressable, Text, View} from 'react-native';
import styles from './styles';

const Cart = ({cart, onPress}) => {
  return (
    <Pressable style={styles.container} onPress={onPress}>
      <Image
        source={{uri: cart?.restaurant?.image ? cart?.restaurant?.image : ''}}
        style={styles.image}
      />

      <View>
        <View style={{flex: 1, height: '100%'}}>
          <Text style={styles.name}>{cart?.restaurant?.name}</Text>
          <Text style={styles.count}>
            {cart?.basket_dishes?.length} items &#8226;{' '}
            {cart?.restaurant?.min_delivery_time} -{' '}
            {cart?.restaurant?.max_delivery_time} mins
          </Text>
        </View>
        <Pressable onPress={onPress}>
          <Text style={styles.button}>View</Text>
        </Pressable>
      </View>
    </Pressable>
  );
};

export default Cart;
