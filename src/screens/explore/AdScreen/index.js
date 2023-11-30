import React from 'react';
import { ScrollView, Text, View } from 'react-native';
import styles from './styles';

const AdScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={{position: 'relative'}}>
        <Text>Ad Screen</Text>
      </View>
    </ScrollView>
  );
};

export default AdScreen;
