import React, { useEffect, useState } from 'react';
import { View, Text, SafeAreaView, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { faArrowCircleRight } from '@fortawesome/free-solid-svg-icons';
import { styles } from './styles';
import SingleNotification from '../../../components/Notification';

const NotificationScreen = () => {
  const navigation = useNavigation();
  const [notifications, setNotifications] = useState([]);

  const getNotifications = async () => {
    // get user details
    const userData = await Auth.currentAuthenticatedUser();

    // get notifications
    // const data = await DataStore.query(Notification, notification =>
    //   notification.userSub('eq', userData.attributes.sub),
    // );

    // setNotifications(data);
  }

  useEffect(() => {
    getNotifications();
  }, [])

  return (
    <SafeAreaView style={{ width: '100%', height: '100%' }}>
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        <View style={{ paddingLeft: 20, paddingHorizontal: 25, marginBottom: 10 }}>
          <Text style={styles.heading}>Notification</Text>
        </View>

        <View style={styles.notifications__section}>
          {notifications.map(notification => <SingleNotification title={notification.title} message={notification.message} date={notification.createdAt} icon={faArrowCircleRight} iconColor="#00a" />)}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default NotificationScreen;
