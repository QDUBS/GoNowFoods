import {useNavigation} from '@react-navigation/native';
import React, { useState } from 'react';
import {Pressable, ScrollView, Text, TextInput, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import styles from './styles';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

function PromotionsScreen() {
  const navigation = useNavigation();
  const [promoCode, setPromoCode] = useState(null);

  const submit = () => {
    console.log('Saving name details...');
  };

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
            <Text style={styles.headerText}>Promotions</Text>
          </View>
        </View>

        <View style={styles.form}>
          <View style={styles.inputContainer}>
            <Text style={styles.inputContainerLabel}>Enter promo code</Text>
            <TextInput
              style={styles.inputContainerInput}
              placeholder=""
              placeholderTextColor="#333"
              autoCorrect={true}
              autoCapitalize="none"
              value={promoCode}
              onChangeText={text => setPromoCode(text)}
            />
          </View>
          <Pressable style={styles.button} onPress={submit}>
            <Text style={styles.buttonText}>Submit</Text>
          </Pressable>
        </View>

        <View style={styles.body}>
          <Text style={styles.promotionsContainerHeading}>Your promotions</Text>

          <View style={styles.promotionsContainer}>
            <Text style={styles.promotionsHeading}>10% promo for 10 rides</Text>
            <Text style={styles.promotionsInfo}>Maximum promo $20</Text>
            <Text style={styles.promotionsStatus}>Expired</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default PromotionsScreen;
