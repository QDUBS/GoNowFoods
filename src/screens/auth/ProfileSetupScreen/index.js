import {useNavigation} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {
  ActivityIndicator,
  Image,
  Pressable,
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  TextInput,
  View,
} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useAuthContext} from '../../../context/AuthContext';
import styles from './styles';
import {AppRoutes} from '../../../constants/app_routes';
import AsyncStorage from '@react-native-async-storage/async-storage';

const ProfileSetupScreen = () => {
  const navigation = useNavigation();
  const [userId, setUserId] = useState(null);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  const finish = async () => {
    setIsLoading(true);
    try {
      const userProfile = await axios.get(`${BASE_URL}/profiles/${userId}`);
      const updateProfile = await axios.put(`${BASE_URL}/profiles`, {
        user_id: userId,
        first_name: firstName,
        last_name: lastName,
        mobile_number: userProfile.mobile_number,
        photo: userProfile.photo,
      });

      if (updateProfile.status === 201) {
        setIsLoading(false);
        navigation.navigate(AppRoutes.Home);
      } else {
        setIsLoading(false);
      }
    } catch (error) {
      console.error('An error occurred:', error);
    }
  };

  useEffect(() => {
    const loadData = async () => {
      const id = await AsyncStorage.getItem('userId');
      setUserId(id);
    };

    loadData();
  }, [userId]);

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
              <Text style={styles.loginFormHeading2}>ENTER YOUR NAME</Text>
              <Text style={styles.prompt}>
                Use your real name so that your orders can easily be identified.
                This helps make your delivery smooth.
              </Text>
            </View>

            <View style={styles.loginContainerForm}>
              <View style={styles.loginFormInputContainer}>
                <Text style={styles.loginFormLabel}>First name</Text>
                <TextInput
                  style={styles.loginFormInput}
                  placeholder="John"
                  placeholderTextColor="#666"
                  autoCorrect={true}
                  autoCapitalize="none"
                  keyboardType="default"
                  value={firstName}
                  onChangeText={text => setFirstName(text)}
                />
              </View>

              <View style={styles.loginFormInputContainer}>
                <Text style={styles.loginFormLabel}>Last name</Text>
                <TextInput
                  style={styles.loginFormInput}
                  placeholder="Doe"
                  placeholderTextColor="#666"
                  autoCorrect={true}
                  autoCapitalize="none"
                  keyboardType="default"
                  value={lastName}
                  onChangeText={text => setLastName(text)}
                />
              </View>
            </View>

            <View style={styles.loginButtonContainer}>
              <Pressable style={styles.loginButton} onPress={finish}>
                <Text style={styles.loginButtonText}>FINISH</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ProfileSetupScreen;
