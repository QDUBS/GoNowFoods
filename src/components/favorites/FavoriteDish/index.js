import React from 'react';
import {Image, Pressable, Text, View} from 'react-native';
import styles from './styles';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const FavoriteDish = ({dish, onPress}) => {
  return (
    <Pressable style={styles.container} onPress={onPress}>
      <Image source={dish?.image} style={styles.image} />
      <View>
        <View>
          <Text style={styles.dishName}>{dish?.name}</Text>
          <View style={styles.dishFlex}>
            <Text style={styles.dishPrice}>
              &#x20A6;{dish?.price?.toLocaleString()}
            </Text>
            <MaterialIcons name="favorite" size={18} color={'red'} />
          </View>
        </View>
      </View>
    </Pressable>
  );
};

export default FavoriteDish;
