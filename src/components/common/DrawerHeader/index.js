import {faStar} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import {useNavigation} from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import {
  ActivityIndicator,
  Image,
  Pressable,
  StatusBar,
  Text,
  View,
} from 'react-native';
import styles from './styles';
import {AppRoutes} from '../../../constants/app_routes';
import axios from 'axios';
import {BASE_URL} from '../../../utils/config';
import AsyncStorage from '@react-native-async-storage/async-storage';

function DrawerHeader(props) {
  const navigation = useNavigation();
  const [userId, setUserId] = useState(null);
  const [profile, setProfile] = useState(null);

  const getProfile = async () => {
    try {
      const profile = await axios.get(`${BASE_URL}/profiles/${userId}`);
      setProfile(profile.data);
    } catch (error) {
      console.error('An error occurred:', error);
    }
  };

  useEffect(() => {
    getProfile();
  }, [userId, profile]);

  useEffect(() => {
    const loadData = async () => {
      const id = await AsyncStorage.getItem('userId');
      setUserId(id);
    };

    loadData();
  }, [userId]);

  if (!profile) {
    return <ActivityIndicator size={'large'} />;
  }

  return (
    <DrawerContentScrollView {...props}>
      <StatusBar translucent backgroundColor="#fff" barStyle="dark-content" />
      <View style={styles.body}>
        <View style={styles.header}>
          <View style={styles.imageContainer}>
            <Image
              source={
                profile?.photo ||
                require('../../../assets/images/profile-pic.jpg')
              }
              style={styles.profile__image}
            />

            <View>
              <Text style={styles.name}>
                {`${profile.first_name} ${profile.last_name}` ||
                  'Confidence Isaiah'}
              </Text>
              <Pressable onPress={() => navigation.navigate(AppRoutes.Profile)}>
                <Text style={styles.view}>View profile</Text>
              </Pressable>
            </View>
          </View>
          <Pressable
            onPress={() => navigation.navigate(AppRoutes.RatingsScreen)}
            style={styles.ratingContainer}>
            <FontAwesomeIcon icon={faStar} color={'#a1705a'} size={15} />
            <Text style={styles.rating}>
              {`${profile?.rating?.toFixed(1)}` || '5.0'}
            </Text>
            <Text style={styles.ratingText}>Rating</Text>
          </Pressable>
        </View>

        <View style={styles.container}>
          <DrawerItemList {...props} />
        </View>

        <View style={styles.bottomContainer}>
          <Pressable onPress={() => {}} style={styles.bottomContainerButton}>
            <Text style={styles.become}>Become a courier</Text>
            <Text style={styles.earn}>Earn on your own schedule</Text>
          </Pressable>
        </View>
      </View>
    </DrawerContentScrollView>
  );
}

export default DrawerHeader;
