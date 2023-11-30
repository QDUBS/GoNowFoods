import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Pressable, ScrollView, Text, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import styles from './styles';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import Ionicons from 'react-native-vector-icons/Ionicons';

function PaymentScreen() {
  const navigation = useNavigation();

  return (
    <SafeAreaView>
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View style={styles.header}>
          <View style={styles.headerFlex}>
            <Pressable onPress={() => navigation.goBack()}>
              <MaterialIcons
                name="keyboard-backspace"
                size={28}
                color={'black'}
              />
            </Pressable>
            <Text style={styles.headerText}>Payment</Text>
          </View>
        </View>

        {/* Wallet */}
        <View style={styles.body}>
          <View style={styles.walletContainer}>
            <Text style={styles.walletContainerHeading}>Wallet balance</Text>
            <Text style={styles.walletBalance}>$20</Text>
            <Text style={styles.walletContainerInfo}>
              Wallet balance is not available with this payment method
            </Text>
          </View>
        </View>

        {/* Payment methods */}
        <View style={styles.paymentMethodContainer}>
          <Text style={styles.paymentMethodHeading}>Payment methods</Text>

          <View style={styles.paymentMethod}>
            <View style={styles.paymentMethodFlex}>
              <FontAwesome6
                name="money-bill-wave"
                size={20}
                color={'#a1705a'}
              />
              <Text style={styles.paymentMethodName}>Cash</Text>
            </View>
            <FontAwesome6 name="circle-dot" size={16} color={'#a1705a'} />
          </View>

          <View style={styles.paymentMethod2}>
            <Ionicons name="add-outline" size={20} color={'black'} />
            <Text style={styles.paymentMethodName}>Add debit/credit card</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default PaymentScreen;
