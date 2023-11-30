import {useNavigation} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {
  ActivityIndicator,
  Pressable,
  ScrollView,
  Text,
  TextInput,
  View,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import styles from './styles';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import SelectDropdown from 'react-native-select-dropdown';
import {SelectList} from 'react-native-dropdown-select-list';
import {categories} from '../../../data/support_categories';
import axios from 'axios';
import {BASE_URL} from '../../../utils/config';

function SupportScreen() {
  const navigation = useNavigation();
  const [userId, setUserId] = useState(null);
  const [category, setCategory] = useState('');
  const [subject, setSubject] = useState('');
  const [issue, setIssue] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const sendMessage = async () => {
    setIsLoading(true);
    try {
      const support_ticket = await axios.post(`${BASE_URL}/support_tickets`, {
        user_id: userId,
        issue: category,
        subject: subject,
        message: issue,
      });

      if (support_ticket.status === 201) {
        setIsLoading(false);
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
            <Text style={styles.headerText}>Support</Text>
          </View>
        </View>

        <Text style={styles.heading}>
          For further enquiries visit the FAQ section.
        </Text>

        <View style={styles.form}>
          <SelectList
            data={categories}
            setSelected={setCategory}
            boxStyles={{backgroundColor: 'white', marginBottom: 20}}
            dropdownStyles={{}}
            dropdownItemStyles={{
              borderBottomColor: '#ccc',
              borderBottomWidth: 0.5,
              paddingVertical: 12,
            }}
            dropdownTextStyles={{color: 'black'}}
          />

          <View style={styles.inputContainer}>
            <Text style={styles.inputContainerLabel}>Subject</Text>
            <TextInput
              style={styles.inputContainerInput}
              placeholder=""
              placeholderTextColor="#333"
              autoCorrect={true}
              autoCapitalize="none"
              value={subject}
              onChangeText={text => setSubject(text)}
            />
          </View>

          <View style={styles.inputContainer2}>
            <Text style={styles.inputContainerLabel}>Describe your issue</Text>
            <TextInput
              style={styles.inputContainerInput2}
              placeholder=""
              placeholderTextColor="#333"
              autoCorrect={true}
              autoCapitalize="none"
              multiline={true}
              value={issue}
              onChangeText={text => setIssue(text)}
            />
          </View>
        </View>
      </ScrollView>

      <View style={styles.buttonContainer}>
        <Pressable style={styles.button} onPress={sendMessage}>
          <Text style={styles.buttonText}>Send message</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}

export default SupportScreen;
