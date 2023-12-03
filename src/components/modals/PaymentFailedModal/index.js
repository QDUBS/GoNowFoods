import React, {useState} from 'react';
import {Image, Modal, Pressable, StatusBar, Text, View} from 'react-native';
import styles from './styles';
import { AppRoutes } from '../../../constants/app_routes';
import { useNavigation } from '@react-navigation/native';

const PaymentFailedModal = ({modalVisible, close}) => {
  const navigation = useNavigation();

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
            <Text style={styles.modalText}>Payment failed!</Text>
            <Image
              source={require('../../../assets/images/close.png')}
              style={styles.image}
            />

            <View style={styles.paymentDetailsContainer}>
              <Text style={styles.instruction}>
                Sorry! Your last transaction was not successful.
              </Text>
              <Text style={styles.instruction}>
                So your order was not placed.
              </Text>
            </View>

            <View style={styles.buttonContainer}>
              <Pressable
                style={[styles.button2]}
                onPress={() => navigation.navigate(AppRoutes.Home)}>
                <Text style={styles.textStyle2}>Back To Home</Text>
              </Pressable>
              <Pressable
                style={[styles.button]}
                onPress={() => {
                  close();
                }}>
                <Text style={styles.textStyle}>Try again</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default PaymentFailedModal;
