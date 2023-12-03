import React from 'react';
import {Paystack} from 'react-native-paystack-webview';
import {View} from 'react-native';
import { PAYSTACK_PUBLIC_KEY, PAYSTACK_SECRET_KEY } from '../../../utils/config';

export default function PayStack() {
  return (
    <View style={{flex: 1}}>
      <Paystack
        paystackKey={`${PAYSTACK_PUBLIC_KEY}`}
        paystackSecretKey={`${PAYSTACK_SECRET_KEY}`}
        billingEmail="qdubsmusk@gmail.com" // user email
        billingName="Confidence Isaiah" // user's name
        billingMobile="09034107411" // user's phone
        amount={25000}
        currency="NGN"
        activityIndicatorColor="green"
        onCancel={e => {
          // handle response here
        }}
        onSuccess={res => {
          // handle response here
        }}
        autoStart={true}
      />
    </View>
  );
}
