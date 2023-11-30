import {View, Text, Image, Pressable} from 'react-native';
import React from 'react';
import styles from './styles';
import {AppRoutes} from '../../../constants/app_routes';
import {useNavigation} from '@react-navigation/native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const Dish = ({dish, onPress}) => {
  return (
    <Pressable style={styles.container} onPress={onPress}>
      <Image
        // source={{uri: dish.image ? dish.image : ''}}
        source={require('../../../assets/images/menu-item-jollof-rice-chicken.jpeg')}
        style={styles.image}
      />

      <View>
        <View style={styles.info}>
          <View style={styles.flex}>
            <View style={styles.priceContainer}>
              <Text style={styles.price}>
                {/* &#x20A6;{restaurant.price.toLocaleString()} */}
                &#x20A6;150
              </Text>
              <Text style={styles.priceTag}>/Plate</Text>
            </View>
            <MaterialIcons name="favorite" size={18} color={'#000'} />
          </View>

          <View style={styles.flex2}>
            <Text style={styles.name}>
              {/* {dish.name} */}
              Rice and Chicken
            </Text>
          </View>
        </View>
      </View>
    </Pressable>
  );
};

export default Dish;
