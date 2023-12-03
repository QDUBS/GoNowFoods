import React from 'react';
import {Image, Modal, Pressable, StatusBar, Text, View} from 'react-native';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';
import {AppRoutes} from '../../../constants/app_routes';

const PaymentSuccessfulModal = ({modalVisible, close}) => {
  const navigation = useNavigation();
  const amount = 5000;

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        close();
      }}>
      <StatusBar backgroundColor="white" barStyle="dark-content" />
      <View style={styles.centeredView}>
        <View style={styles.modalContainer}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Payment successful!</Text>
            <Image
              source={require('../../../assets/images/payment-checkmark.jpeg')}
              style={styles.image}
            />

            <View style={styles.paymentDetailsContainer}>
              <View style={styles.paymentDetails}>
                <Text style={styles.paymentDetailsText}>Payment type</Text>
                <Text style={styles.paymentDetailsText2}>Net Banking</Text>
              </View>

              <View style={styles.paymentDetails}>
                <Text style={styles.paymentDetailsText}>Bank</Text>
                <Text style={styles.paymentDetailsText2}>Citi Bank</Text>
              </View>

              <View style={styles.paymentDetails}>
                <Text style={styles.paymentDetailsText}>Amount</Text>
                <Text style={styles.paymentDetailsText2}>
                  &#x20A6;{amount.toLocaleString()}
                </Text>
              </View>

              <View style={styles.paymentDetails}>
                <Text style={styles.paymentDetailsText}>Mobile</Text>
                <Text style={styles.paymentDetailsText2}>09034107411</Text>
              </View>

              <View style={styles.paymentDetails}>
                <Text style={styles.paymentDetailsText}>Email</Text>
                <Text style={styles.paymentDetailsText2}>
                  qdubsmusk@gmail.com
                </Text>
              </View>
            </View>

            <View style={styles.buttonContainer}>
              <Pressable
                style={[styles.button2]}
                onPress={() => navigation.navigate(AppRoutes.Home)}>
                <Text style={styles.textStyle2}>Back To Home</Text>
              </Pressable>
              <Pressable
                style={[styles.button]}
                onPress={() => navigation.navigate(AppRoutes.OrderDetail)}>
                <Text style={styles.textStyle}>Track Order</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default PaymentSuccessfulModal;
