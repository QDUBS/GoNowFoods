import {View, Text, Image, Pressable} from 'react-native';
import React from 'react';
import styles from './styles';

const MenuItem = ({menuItem, onPress}) => {
  return (
    <Pressable style={styles.container} onPress={onPress}>
      <View style={{flex: 1}}>
        <Text style={styles.name}>{menuItem.name}</Text>
        <Text style={styles.description}>{menuItem.description}</Text>
        <Text style={styles.price}>&#x20A6;{menuItem.price.toLocaleString()}</Text>
      </View>

      <Image
        source={{uri: menuItem.image ? menuItem.image : ''}}
        style={styles.image}
      />
    </Pressable>
  );
};

export default MenuItem;
