import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import { FirebaseRecaptchaVerifierModal } from 'expo-firebase-recaptcha';
import firebase from 'firebase/compat/app';
import React, { useEffect, useRef, useState } from 'react';
import {
  ActivityIndicator,
  Image,
  Pressable,
  SafeAreaView,
  StatusBar,
  Text,
  TextInput,
  View
} from 'react-native';
import PhoneInput from 'react-native-phone-number-input';
import { AppRoutes } from '../../../constants/app_routes';
import { firebaseConfig } from '../../../firebase/config';
import { BASE_URL } from '../../../utils/config';
import styles from './styles';

const PhoneVerificationScreen = () => {
  const navigation = useNavigation();
  const [userId, setUserId] = useState(null);
  const [phoneNumber, setPhoneNumber] = useState('');
  const [formattedPhoneNumber, setFormattedPhoneNumber] = useState('');
  const [code, setCode] = useState(null);
  const [codeNumber, setCodeNumber] = useState(null);
  const [verificationId, setVerificationId] = useState(null);
  const [showCode, setShowCode] = useState(false);
  const [countdown, setCountdown] = useState(120);
  const [isLoading, setIsLoading] = useState(false);
  const recaptchaVerifier = useRef(null);
  const phoneInput = useRef(null);

  const sendVerification = () => {
    const phoneProvider = new firebase.auth.PhoneAuthProvider();
    phoneProvider
      .verifyPhoneNumber(formattedPhoneNumber, recaptchaVerifier.current)
      .then(verificationId => {
        setVerificationId(verificationId);
        setCodeNumber(formattedPhoneNumber);
        // setPhoneNumber('');
        // setFormattedPhoneNumber('');
        setShowCode(true);

        startCountdown();
      })
      .catch(error => {
        console.error('Verification Error:', error);
      });
  };

  const confirmCode = () => {
    const credential = firebase.auth.PhoneAuthProvider.credential(
      verificationId,
      code,
    );

    saveNumber();
    setCode('');
  };

  const saveNumber = async () => {
    setIsLoading(true);
    try {
      const userProfile = await axios.get(`${BASE_URL}/profiles/${userId}`);
      const updateProfile = await axios.put(`${BASE_URL}/profiles`, {
        user_id: userId,
        first_name: userProfile.firstname,
        last_name: userProfile.lastname,
        mobile_number: phoneNumber,
        photo: '',
      });

      if (updateProfile.status === 201) {
        setIsLoading(false);
        navigation.navigate(AppRoutes.ProfileSetupScreen);
      } else {
        setIsLoading(false);
      }
    } catch (error) {
      console.error('An error occurred:', error);
    }
  };

  const edit = () => {
    setShowCode(false);
  };

  const startCountdown = () => {
    const intervalId = setInterval(() => {
      setCountdown(prevCountdown => {
        if (prevCountdown === 0) {
          clearInterval(intervalId);
          return 0;
        }
        return prevCountdown - 1;
      });
    }, 1000);
  };

  const formatCountdown = countdown => {
    const minutes = Math.floor(countdown / 60);
    const seconds = countdown % 60;
    return `${minutes.toString().padStart(2, '0')}:${seconds
      .toString()
      .padStart(2, '0')}`;
  };

  useEffect(() => {
    const loadData = async () => {
      const id = await AsyncStorage.getItem('userId');
      setUserId(id);
    };

    loadData();
  }, [userId]);

  const isResendDisabled = countdown > 0;

  if (isLoading) {
    return (
      <View
        style={{
          height: '100%',
          justifyContent: 'center',
          alignItems: 'center ',
        }}>
        <ActivityIndicator size={'large'} />
      </View>
    );
  }

  return (
    <SafeAreaView>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="dark-content"
      />
      <View style={styles.loginContainer}>
        <View style={styles.backgroundImageContainer}>
          <Image
            source={require('../../../assets/images/login-background.jpeg')}
            style={styles.backgroundImage}
          />
        </View>

        <View style={styles.loginFormContainer}>
          <View style={styles.loginForm}>
            <View style={styles.loginFormHeadingContainer}>
              <Text style={styles.loginFormHeading2}>
                {showCode ? 'ENTER CODE' : 'VERIFY NUMBER'}
              </Text>
            </View>

            {/* Verify code & Enter code */}
            {!showCode ? (
              <View style={styles.flex}>
                <View style={styles.loginContainerForm}>
                  <View style={styles.loginFormInputContainer}>
                    <Text style={styles.loginFormLabel}>
                      Enter phone number
                    </Text>
                    <PhoneInput
                      ref={phoneInput}
                      defaultValue={phoneNumber}
                      defaultCode="NG"
                      containerStyle={{
                        backgroundColor: 'rgb(0, 0, 0, 0, 0.1)',
                        width: '100%',
                        height: 48,
                        borderColor: '#ccc',
                        borderWidth: 0.7,
                        borderRadius: 10,
                        color: '#000',
                      }}
                      textContainerStyle={{
                        width: '100%',
                        height: 48,
                        backgroundColor: 'transparent',
                        borderWidth: 0,
                        borderLeftColor: '#ccc',
                        borderLeftWidth: 0.7,
                        color: '#fff',
                      }}
                      textInputStyle={{
                        padding: 0,
                      }}
                      onChangeText={text => {
                        setPhoneNumber(text);
                      }}
                      onChangeFormattedText={text => {
                        setFormattedPhoneNumber(text);
                      }}
                      autoFocus
                    />
                  </View>
                </View>

                <View style={styles.loginButtonContainer}>
                  <Pressable
                    style={styles.loginButton}
                    onPress={sendVerification}>
                    <Text style={styles.loginButtonText}>Continue</Text>
                  </Pressable>
                </View>
              </View>
            ) : (
              <View style={styles.flex}>
                <View style={styles.loginContainerForm}>
                  <View style={styles.loginFormInputContainer}>
                    <Text style={styles.loginFormLabel}>
                      Please enter the 6-digit code we sent to {codeNumber} by
                      SMS
                    </Text>
                    <TextInput
                      style={styles.loginFormInput}
                      placeholder=""
                      placeholderTextColor="#666"
                      autoCorrect={true}
                      autoCapitalize="none"
                      autoCompleteType="email"
                      onChangeText={newText => {
                        setEmail(newText);
                      }}
                    />
                  </View>
                </View>

                <View style={styles.loginButtonContainer}>
                  <Pressable style={styles.loginButton} onPress={confirmCode}>
                    <Text style={styles.loginButtonText}>Confirm</Text>
                  </Pressable>

                  <View style={styles.loginButtonRow}>
                    <Text style={styles.loginButtonRowText1}>
                      Didn't receive it?
                    </Text>
                    {isResendDisabled && (
                      <Text style={styles.loginButtonRowText2}>
                        {formatCountdown(countdown)}
                      </Text>
                    )}
                  </View>
                  <View style={styles.loginButtonRow2}>
                    <Pressable
                      style={[
                        styles.loginButtonRowButton,
                        isResendDisabled && styles.disabledButton,
                      ]}
                      onPress={sendVerification}
                      disabled={isResendDisabled}>
                      <Text
                        style={[
                          styles.loginButtonRowButtonText,
                          isResendDisabled && styles.disabledText,
                        ]}>
                        Resend code
                      </Text>
                    </Pressable>
                    <Pressable
                      style={[
                        styles.loginButtonRowButton,
                        isResendDisabled && styles.disabledButton,
                      ]}
                      onPress={edit}
                      disabled={isResendDisabled}>
                      <Text
                        style={[
                          styles.loginButtonRowButtonText,
                          isResendDisabled && styles.disabledText,
                        ]}>
                        Edit number
                      </Text>
                    </Pressable>
                  </View>
                </View>
              </View>
            )}
          </View>
        </View>

        <FirebaseRecaptchaVerifierModal
          ref={recaptchaVerifier}
          firebaseConfig={firebaseConfig}
        />
      </View>
    </SafeAreaView>
  );
};

export default PhoneVerificationScreen;
