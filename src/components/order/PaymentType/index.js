import React from 'react';
import { Image, Pressable, Text, View } from 'react-native';
import styles from './styles';

const PaymentType = ({text, image, active, setActive}) => {
  return (
    <View>
      {active == text ? (
        <Pressable style={styles.paymentMethod} onPress={setActive}>
          <View style={styles.paymentMethodCardContainer}>
            <View style={styles.paymentMethodCardActive}>
              <Image source={image} style={styles.paymentMethodImage} />
            </View>
            <View style={styles.checkmarkContainer}>
              <Image
                source={require('../../../assets/images/checkmark.png')}
                style={styles.checkmarkImage}
              />
            </View>
          </View>
          <Text style={styles.paymentMethodText}>Pay with {text}</Text>
        </Pressable>
      ) : (
        <Pressable style={styles.paymentMethod} onPress={setActive}>
          <View style={styles.paymentMethodCardContainer}>
            <View style={styles.paymentMethodCardInactive}>
              <Image source={image} style={styles.paymentMethodImage} />
            </View>
          </View>
          <Text style={styles.paymentMethodText}>Pay with {text}</Text>
        </Pressable>
      )}
    </View>
  );
};

export default PaymentType;
