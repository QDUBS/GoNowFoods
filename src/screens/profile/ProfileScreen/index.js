import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import {
  Image,
  Pressable,
  ScrollView,
  StatusBar,
  Text,
  View
} from 'react-native';
import ImagePicker from 'react-native-image-picker';
import { SafeAreaView } from 'react-native-safe-area-context';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import DeleteAccountModal from '../../../components/modals/DeleteAccountModal';
import LogoutModal from '../../../components/modals/LogoutModal';
import { AppRoutes } from '../../../constants/app_routes';
import { useAuthContext } from '../../../context/AuthContext';
import { BASE_URL, GCS_BUCKET } from '../../../utils/config';
import gcs_keyfile from '../../../utils/gcs_keyfile.json';
import styles from './styles';

function ProfileScreen() {
  const navigation = useNavigation();
  const {logout} = useAuthContext();
  const [logoutModalVisible, setLogoutModalVisible] = useState(false);
  const [deleteModalVisible, setDeleteModalVisible] = useState(false);
  const [userId, setUserId] = useState(null);
  const [user, setUser] = useState(null);
  const [profile, setProfile] = useState(null);
  const [homeAddress, setHomeAddress] = useState(null);
  const [workAddress, setWorkAddress] = useState(null);
  const [regularAddress, setRegularAddress] = useState(null);

  const getProfile = async () => {
    try {
      const user = await axios.get(`${BASE_URL}/users/${userId}`);
      const profile = await axios.get(`${BASE_URL}/profiles/${userId}`);
      setUser(user?.data);
      setProfile(profile?.data);
    } catch (error) {
      console.error('An error occurred:', error);
    }
  };

  const getAddress = async () => {
    try {
      const home_address = await axios.get(
        `${BASE_URL}/addresses/home/${userId}`,
      );
      const work_address = await axios.get(
        `${BASE_URL}/addresses/work/${userId}`,
      );
      const regular_address = await axios.get(
        `${BASE_URL}/addresses/regular/${userId}`,
      );
      setHomeAddress(home_address.data);
      setWorkAddress(work_address.data);
      setRegularAddress(regular_address.data);
    } catch (error) {
      console.error('An error occurred:', error);
    }
  };

  const formatAddress = address => {
    const formatted_address = `${address.house_no} ${address.street1}, ${address.city}, ${address.state},  ${address.country}`;
    return formatted_address;
  };

  const uploadImage = async imageUri => {
    const bucketName = GCS_BUCKET;
    const jsonKeyFile = gcs_keyfile;

    const formData = new FormData();
    const file = {
      uri: imageUri,
      type: 'image/jpeg',
      name: 'image.jpg',
    };

    formData.append('file', file);

    try {
      const response = await axios.post(
        `https://storage.googleapis.com/upload/storage/v1/b/${bucketName}/o`,
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
            Authorization: `Bearer ${JSON.parse(jsonKeyFile).private_key}`,
          },
        },
      );

      console.log('Upload successful:', response.data);
    } catch (error) {
      console.error('Error uploading image:', error);
    }
  };

  const signOut = () => {
    logout();
  };

  const deleteAccount = () => {
    // console.log('delete account');
  };

  const selectImage = () => {
    const options = {
      title: 'Select Profile Picture',
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };

    ImagePicker?.showImagePicker(options, response => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
        return;
      } else if (response.error) {
        console.log('ImagePicker Error:', response.error);
        return;
      } else {
        const imageUri = response.uri;
        uploadImage(imageUri);
      }
    });
  };

  useEffect(() => {
    getProfile();
  }, [userId, profile]);

  useEffect(() => {
    getAddress();
  }, [homeAddress, workAddress, regularAddress]);

  useEffect(() => {
    const loadData = async () => {
      const id = await AsyncStorage.getItem('userId');
      setUserId(id);
    };

    loadData();
  }, [userId]);

  // if (!profile) {
  //   return <ActivityIndicator size={'large'} />;
  // }

  return (
    <SafeAreaView>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="dark-content"
      />
      <View>
        <View style={styles.container}>
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
              <Text style={styles.headerText}>Profile</Text>
            </View>
            <Pressable
              onPress={() =>
                navigation.navigate(AppRoutes.EditProfileScreen, {id: userId})
              }>
              <Text style={styles.headerButton}>Edit Profile</Text>
            </Pressable>
          </View>

          <ScrollView style={styles.body} showsVerticalScrollIndicator={false}>
            {/* First section */}
            <View style={styles.firstSection}>
              <Pressable onPress={selectImage} style={styles.imageContainer}>
                <Image
                  source={
                    profile?.photo ||
                    require('../../../assets/images/profile-pic.jpg')
                  }
                  style={styles.profile__image}
                />
                <Pressable
                  onPress={selectImage}
                  style={styles.imageSelectButton}>
                  <Ionicons name="image-outline" size={18} color={'white'} />
                </Pressable>
              </Pressable>
              <View>
                <Text style={styles.name}>
                  {`${profile?.first_name} ${profile?.last_name}` ||
                    'Confidence Isaiah'}
                </Text>
                <Text style={styles.number}>
                  {`${profile?.mobile_number}` || '+2349034107411'}
                </Text>
              </View>
              <View style={styles.ratingContainer}>
                <FontAwesomeIcon icon={faStar} color={'#a1705a'} size={15} />
                <Text style={styles.rating}>
                  {`${profile?.rating?.toFixed(1)}` || '5.0'}
                </Text>
                <Text style={styles.ratingText}>Rating</Text>
              </View>
              <View style={styles.emailContainer}>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <MaterialIcons
                    name="mail-outline"
                    size={20}
                    color={'black'}
                  />
                  <Text style={styles.email}>
                    {`${user?.email}` || 'qdubsmusk@gmail.com'}
                  </Text>
                </View>
                <Pressable onPress={() => {}} style={styles.verifyButton}>
                  <Text style={styles.verifyText}>VERIFY</Text>
                </Pressable>
              </View>
            </View>

            {/* Saved Locations */}
            <View style={styles.savedLocations}>
              <Text style={styles.savedLocationsHeading}>Saved places</Text>
              {homeAddress ? (
                <Pressable style={styles.savedLocation} onPress={() => {}}>
                  <Text style={styles.address}>
                    {formatAddress(homeAddress)}
                  </Text>
                </Pressable>
              ) : (
                <Pressable
                  style={styles.savedLocation}
                  onPress={() =>
                    navigation.navigate(AppRoutes.UpdateLocationScreen)
                  }>
                  <SimpleLineIcons name="home" size={20} color={'black'} />
                  <Text style={styles.email}>Enter home location</Text>
                </Pressable>
              )}

              {workAddress ? (
                <Pressable style={styles.savedLocation} onPress={() => {}}>
                  <Text style={styles.address}>
                    {formatAddress(workAddress)}
                  </Text>
                </Pressable>
              ) : (
                <Pressable
                  style={styles.savedLocation}
                  onPress={() =>
                    navigation.navigate(AppRoutes.UpdateLocationScreen)
                  }>
                  <SimpleLineIcons name="home" size={20} color={'black'} />
                  <Text style={styles.email}>Enter work location</Text>
                </Pressable>
              )}

              {regularAddress ? (
                <Pressable style={styles.savedLocation} onPress={() => {}}>
                  <Text style={styles.address}>
                    {formatAddress(regularAddress)}
                  </Text>
                </Pressable>
              ) : (
                <Pressable
                  style={styles.savedLocation}
                  onPress={() =>
                    navigation.navigate(AppRoutes.UpdateLocationScreen)
                  }>
                  <SimpleLineIcons name="home" size={20} color={'black'} />
                  <Text style={styles.email}>Add a place</Text>
                </Pressable>
              )}
            </View>

            {/* Preferred language */}
            <View style={styles.savedLocations}>
              {/* 
              <View style={styles.savedLocation}>
                <Text style={styles.languageHeading}>Language</Text>
                <Text style={styles.language}>English - US</Text>
              </View>  
              */}
              <Pressable
                style={styles.savedLocation}
                onPress={() => setLogoutModalVisible(true)}>
                <MaterialIcons name="logout" size={20} color={'black'} />
                <Text style={styles.email}>Log out</Text>
              </Pressable>
              <Pressable
                style={[styles.savedLocation2, {paddingBottom: '20%'}]}
                onPress={() => setDeleteModalVisible(true)}>
                <AntDesign name="delete" size={20} color={'black'} />
                <Text style={styles.email}>Delete account</Text>
              </Pressable>
            </View>
          </ScrollView>
        </View>
      </View>

      <LogoutModal
        modalVisible={logoutModalVisible}
        close={() => setLogoutModalVisible(false)}
        logout={signOut}
      />
      <DeleteAccountModal
        modalVisible={deleteModalVisible}
        close={() => setDeleteModalVisible(false)}
        deleteAccount={deleteAccount}
      />
    </SafeAreaView>
  );
}

export default ProfileScreen;
