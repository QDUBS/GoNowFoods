import PayWithFlutterwave from 'flutterwave-react-native';
import React, { useRef } from 'react';
import { Modal, Pressable, StatusBar, Text, View } from 'react-native';
import { Paystack, paystackProps } from 'react-native-paystack-webview';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {
  FLUTTERWAVE_PUBLIC_KEY,
  PAYSTACK_PUBLIC_KEY,
  PAYSTACK_SECRET_KEY,
} from '../../../utils/config';
import PaymentType from '../../order/PaymentType';
import styles from './styles';

const PaymentModal = ({
  modalVisible,
  activePayment,
  close,
  setSetActivePayment,
}) => {
  const paystackWebViewRef = useRef(paystackProps.PayStackRef);

  const handleOnRedirect = data => {
    console.log(data);
  };

  const generateTransactionRef = length => {
    var result = '';
    var characters =
      'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return `flw_tx_ref_${result}`;
  };

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        close();
      }}>
      <StatusBar
        backgroundColor="rgba(52, 52, 52, 0.7)"
        barStyle="dark-content"
      />
      <View style={styles.centeredView}>
        <View style={styles.modalContainer}>
          <View style={styles.modalView}>
            <View style={styles.modalHeader}>
              <Text style={styles.modalHeading}>Choose a payment method</Text>
              <Pressable
                onPress={() => {
                  close();
                  setSetActivePayment('');
                }}>
                <AntDesign name="close" size={22} color={'black'} />
              </Pressable>
            </View>

            <View>
              <PaymentType
                text="Paystack"
                image={require('../../../assets/images/paystack-image.png')}
                active={activePayment}
                setActive={() => setSetActivePayment('Paystack')}
              />
              <PaymentType
                text="Flutterwave"
                image={require('../../../assets/images/flutterwave-image.png')}
                active={activePayment}
                setActive={() => setSetActivePayment('Flutterwave')}
              />
            </View>

            <View style={styles.modalButtonContainer}>
              {activePayment == 'Paystack' ? (
                <View>
                  <Paystack
                    paystackKey={`${PAYSTACK_PUBLIC_KEY}`}
                    paystackSecretKey={`${PAYSTACK_SECRET_KEY}`}
                    billingEmail="qdubsmusk@gmail.com" // user email
                    billingName="Confidence Isaiah" // user's name
                    billingMobile="09034107411" // user's phone
                    amount={25000}
                    currency="NGN"
                    onCancel={e => {
                      // show a modal telling user that transaction was cancelled
                    }}
                    onSuccess={res => {
                      // show a modal telling user that transaction was successful
                      // create the order
                    }}
                    ref={paystackWebViewRef}
                  />
                  <Pressable
                    onPress={() =>
                      paystackWebViewRef.current.startTransaction()
                    }
                    style={styles.modalButton}>
                    <Text style={styles.modalButtonText}>Continue</Text>
                  </Pressable>
                </View>
              ) : activePayment == 'Flutterwave' ? (
                <View>
                  <PayWithFlutterwave
                    onRedirect={handleOnRedirect}
                    options={{
                      tx_ref: generateTransactionRef(10),
                      authorization: FLUTTERWAVE_PUBLIC_KEY,
                      customer: {
                        email: 'customer-email@example.com',
                      },
                      amount: 2000,
                      currency: 'NGN',
                      payment_options: 'card',
                    }}
                    customButton={props => (
                      <Pressable
                        style={styles.modalButton}
                        onPress={props.onPress}
                        isBusy={props.isInitializing}
                        disabled={props.disabled}>
                        <Text style={styles.modalButtonText}>Continue</Text>
                      </Pressable>
                    )}
                  />
                </View>
              ) : (
                <View>
                  <Pressable
                    onPress={() =>
                      paystackWebViewRef.current.startTransaction()
                    }
                    style={styles.modalButtonDisabled}>
                    <Text style={styles.modalButtonText}>Continue</Text>
                  </Pressable>
                </View>
              )}
            </View>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default PaymentModal;
