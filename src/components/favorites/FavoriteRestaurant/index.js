import React from 'react';
import {Image, Pressable, Text, View} from 'react-native';
import styles from './styles';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const FavoriteRestaurant = ({restaurant, onPress}) => {
  return (
    <Pressable style={styles.container} onPress={onPress}>
      <View style={styles.imageContainer}>
        <Image
          source={require('../../../assets/images/profile-pic.jpg')}
          style={styles.image}
        />
        <MaterialIcons
          name="favorite"
          size={22}
          color={'red'}
          style={styles.favorite}
        />
      </View>
      <View style={styles.restaurantFlex}>
        <Text style={styles.restaurantName}>Lamelo Restaurant</Text>
        <Text style={styles.restaurantLocation}>Abuja, Nigeria</Text>
        <Text style={styles.restaurantWaitTime}>30 - 45 &#8226; mins</Text>
      </View>
    </Pressable>
  );
};

export default FavoriteRestaurant;
