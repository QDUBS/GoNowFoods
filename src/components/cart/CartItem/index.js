import {View, Text, Image, Pressable} from 'react-native';
import React from 'react';
import styles from './styles';

const CartItem = ({cartItem, onPress}) => {
  return (
    <View style={styles.container}>
      <Image
        source={{uri: cartItem.dish.image ? cartItem.dish.image : ''}}
        style={styles.image}
      />
      <View style={{flex: 1}}>
        <View style={{flex: 1, height: '100%'}}>
          <Text style={styles.menuItem}>{cartItem.dish.name}</Text>
          <Text style={styles.menuPrice}>
            &#x20A6;{cartItem.dish.price.toLocaleString()}
          </Text>
        </View>
        <Pressable onPress={onPress}>
          <Text style={styles.button}>Remove</Text>
        </Pressable>
      </View>

      <View style={styles.quantityContainer}>
        <Text style={{color: 'black', fontSize: 14, fontWeight: '600'}}>
          {cartItem.quantity}
        </Text>
      </View>
    </View>
  );
};

export default CartItem;
