import React from 'react';
import {
  Modal,
  Pressable,
  StatusBar,
  Text,
  TextInput,
  View,
  KeyboardAvoidingView,
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import styles from './styles';

const DeliveryInstructionModal = ({
  modalVisible,
  close,
  instructions,
  setInstructions,
}) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        close();
      }}>
      <StatusBar
        backgroundColor="rgba(52, 52, 52, 0.7)"
        barStyle="dark-content"
      />
      <View style={styles.centeredView}>
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          style={styles.modalContainer}>
          <View style={styles.modalView}>
            <View style={styles.modalHeader}>
              <Text style={styles.modalHeading}>
                Add your instructions for this order
              </Text>
              <Pressable
                onPress={() => {
                  close();
                }}>
                <AntDesign name="close" size={22} color={'black'} />
              </Pressable>
            </View>

            <View style={styles.form}>
              <View style={styles.inputContainer}>
                <Text style={styles.inputContainerLabel}>
                  Delivery Instructions
                </Text>
                <TextInput
                  style={styles.inputContainerInput}
                  placeholder="Please provide vivid and easy to understand instructions for this order."
                  placeholderTextColor="#333"
                  autoCorrect={true}
                  autoCapitalize="none"
                  multiline={true}
                  value={instructions}
                  onChangeText={text => setInstructions(text)}
                />
              </View>
            </View>

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
        </KeyboardAvoidingView>
      </View>
    </Modal>
  );
};

export default DeliveryInstructionModal;
