import React from 'react';
import {Image, Pressable, Text, View} from 'react-native';
import styles from './styles';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const RestaurantSmall = ({restaurant, onPress}) => {
  return (
    <Pressable style={styles.container} onPress={onPress}>
      <View>
        <Image
          source={{uri: restaurant.image ? restaurant.image : ''}}
          style={styles.image}
        />
        <Pressable style={styles.tag} onPress={() => {}}>
          <MaterialIcons name="favorite-outline" size={20} color={'#fff'} />
        </Pressable>
      </View>

      <View>
        <View style={styles.info}>
          <Text style={styles.name}>{restaurant.name}</Text>
          <View style={styles.flex}>
            <Text style={styles.price}>
              {restaurant.min_delivery_time} - {restaurant.max_delivery_time}{' '}
              &#8226; mins
            </Text>
          </View>
        </View>
      </View>
    </Pressable>
  );
};

export default RestaurantSmall;
