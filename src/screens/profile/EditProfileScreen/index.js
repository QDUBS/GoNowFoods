import React, {useEffect} from 'react';
import {ActivityIndicator, ScrollView} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import styles from './styles';
import {Pressable, Text, View} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {AppRoutes} from '../../../constants/app_routes';
import {useNavigation} from '@react-navigation/native';
import {BASE_URL} from '../../../utils/config';
import axios from 'axios';

function EditProfileScreen() {
  const navigation = useNavigation();
  const route = useRoute();
  const id = route.params?.id;
  const [profile, setProfile] = useState(null);

  const getProfile = async () => {
    try {
      const profile = await axios.get(`${BASE_URL}/profiles/${id}`);
      setProfile(profile.data);
    } catch (error) {
      console.error('An error occurred:', error);
    }
  };

  useEffect(() => {
    getProfile();
  }, [id, profile]);

  if (!profile) {
    return <ActivityIndicator />;
  }

  return (
    <SafeAreaView>
      <ScrollView showsVerticalScrollIndicator={false}>
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
          </View>
        </View>

        <View style={styles.itemContainer}>
          <View style={styles.itemContainerFlex}>
            <MaterialIcons name="person-outline" size={25} color={'black'} />
            <Text style={styles.itemContainerText}>Confidence Isaiah</Text>
          </View>
          <Pressable
            onPress={() => navigation.navigate(AppRoutes.UpdateNameScreen)}>
            <Text style={styles.itemContainerButton}>Edit</Text>
          </Pressable>
        </View>

        <View style={styles.itemContainer}>
          <View style={styles.itemContainerFlex}>
            <Ionicons name="phone-portrait-outline" size={20} color={'black'} />
            <Text style={styles.itemContainerText}>+2349034107411</Text>
          </View>
          <Pressable
            onPress={() => navigation.navigate(AppRoutes.UpdatePhoneScreen)}>
            <Text style={styles.itemContainerButton}>Edit</Text>
          </Pressable>
        </View>

        <View style={styles.itemContainer2}>
          <View style={styles.itemContainerFlex}>
            <MaterialIcons name="mail-outline" size={20} color={'black'} />
            <Text style={styles.itemContainerText}>qdubsmusk@gmail.com</Text>
          </View>
          <Pressable
            onPress={() => navigation.navigate(AppRoutes.UpdateEmailScreen)}>
            <Text style={styles.itemContainerButton}>Edit</Text>
          </Pressable>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default EditProfileScreen;
