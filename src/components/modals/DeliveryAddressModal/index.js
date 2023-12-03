import React, { useState } from 'react';
import {
  Modal,
  Pressable,
  StatusBar,
  Text,
  View
} from 'react-native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { PLACES_API_KEY } from '../../../utils/config';
import styles from './styles';

const DeliveryAddressModal = ({modalVisible, close, address, setAddress}) => {
  const [selectedLocation, setSelectedLocation] = useState(null);

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
          <View style={styles.modalHeader}>
            <Text style={styles.modalHeading}>Delivery address</Text>
            <Pressable
              onPress={() => {
                close();
              }}>
              <AntDesign name="close" size={22} color={'black'} />
            </Pressable>
          </View>

          <View style={styles.form}>
            <GooglePlacesAutocomplete
              query={{key: PLACES_API_KEY}}
              onPress={(data, details = null) => {
                console.log(data.description);
                const city = data.description.split(',')[0];
                setAddress(data.description);
              }}
              placeholder="Search..."
              minLength={1}
              styles={{
                textInput: {
                  backgroundColor: '#fff',
                  height: 43,
                  borderWidth: 0,
                  color: '#333',
                  fontWeight: '600',
                  marginTop: 5,
                  borderTopWidth: 1,
                  borderTopColor: '#3ABF37',
                  borderBottomWidth: 1,
                  borderBottomColor: '#3ABF37',
                },
                textInputContainer: {
                  backgroundColor: '#fff',
                  width: '100%',
                  height: 43,
                  borderRadius: 10,
                  borderWidth: 1,
                  borderColor: '#3ABF37',
                  flexDirection: 'row',
                  alignItems: 'center',
                  paddingHorizontal: 10,
                },
                predefinedPlacesDescription: {
                  color: '#333',
                },
              }}
              textInputProps={{placeholderTextColor: '#666'}}
              renderLeftButton={() => (
                <Pressable style={styles.menu_button}>
                  <FontAwesome name="search" size={15} color={'#666'} />
                </Pressable>
              )}
              renderRightButton={() => (
                <Pressable onPress={() => {}}>
                  <Ionicons name="location" size={20} color={'#3ABF37'} />
                </Pressable>
              )}
            />
          </View>

          {selectedLocation && (
            <View style={{flex: 1}}>
              <MapView
                style={{flex: 1}}
                initialRegion={{
                  latitude: selectedLocation.location.lat,
                  longitude: selectedLocation.location.lng,
                  latitudeDelta: 0.0922,
                  longitudeDelta: 0.0421,
                }}>
                <Marker
                  coordinate={{
                    latitude: selectedLocation.location.lat,
                    longitude: selectedLocation.location.lng,
                  }}
                  title={selectedLocation.description}
                />
              </MapView>
            </View>
          )}

          <View style={styles.buttonContainer}>
            <Pressable
              style={[styles.button]}
              onPress={() => {
                logout();
              }}>
              <Text style={styles.textStyle}>Ok</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default DeliveryAddressModal;
