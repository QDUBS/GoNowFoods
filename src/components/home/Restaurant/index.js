import React from 'react';
import {Image, Pressable, Text, View} from 'react-native';
import styles from './styles';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const Restaurant = ({restaurant, onPress}) => {
  return (
    <Pressable style={styles.container} onPress={onPress}>
      <View>
        <Image
          source={{uri: restaurant.image ? restaurant.image : ''}}
          style={styles.image}
        />
        <Pressable style={styles.tag} onPress={() => {}}>
          <MaterialIcons name="favorite-outline" size={25} color={'#fff'} />
        </Pressable>
      </View>

      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <View style={styles.info}>
          <Text style={styles.name}>{restaurant.name}</Text>
          <Text style={styles.price}>
            &#x20A6;{Number(restaurant.delivery_fee).toLocaleString()} &#8226;{' '}
            {restaurant.min_delivery_time} - {restaurant.max_delivery_time} mins{' '}
          </Text>
        </View>

        <View style={styles.rating}>
          <Text style={styles.ratingText}>{restaurant.rating.toFixed(1)}</Text>
        </View>
      </View>
    </Pressable>
  );
};

export default Restaurant;
