import React from 'react';
import {Image, Pressable, Text, View} from 'react-native';
import styles from './styles';

const Advert = ({advert, onPress}) => {
  return (
    <Pressable style={styles.container} onPress={onPress}>
      <Image
        // source={{uri: cart?.restaurant?.image ? cart?.restaurant?.image : ''}}
        source={require('../../../assets/images/profile-pic.jpg')}
        style={styles.image}
      />
      <View style={styles.overlay}>
        <View style={styles.tag}>
          <Text style={styles.tagText}>2 days left</Text>
        </View>
        <View style={styles.restaurantContainer}>
          <Image
            source={require('../../../assets/images/profile-pic.jpg')}
            style={styles.restaurantImage}
          />

          <View style={styles.restaurantFlex}>
            <Text style={styles.restaurantName}>Lamelo Restaurant</Text>
            <Text style={styles.restaurantLocation}>Abuja, Nigeria</Text>
          </View>
        </View>
      </View>
    </Pressable>
  );
};

export default Advert;
