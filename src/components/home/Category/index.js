import {View, Text, Image, Pressable} from 'react-native';
import React from 'react';
import styles from './styles';

const Category = ({category, onPress}) => {
  return (
    <Pressable
      style={{
        ...styles.container,
      }}
      onPress={onPress}>
      <Image source={category.image} style={styles.image} />
      <Text style={styles.name}>{category.name}</Text>
    </Pressable>
  );
};

export default Category;
