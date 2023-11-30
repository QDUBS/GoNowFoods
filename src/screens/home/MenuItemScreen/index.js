import {useNavigation, useRoute} from '@react-navigation/native';
import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {ActivityIndicator, Image, Pressable, SafeAreaView, ScrollView, StatusBar, Text, View} from 'react-native';
import {useCartContext} from '../../../context/CartContext';
import {BASE_URL} from '../../../utils/config';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import styles from './styles';

const MenuItemScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const {addDishToCart} = useCartContext();
  const [dish, setDish] = useState(null);
  const [count, setCount] = useState(1);
  const id = route.params?.id;

  const minus = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  const add = () => {
    setCount(count + 1);
  };

  const getTotal = () => {
    return dish.price * count;
  };

  const addToCart = async () => {
    await addDishToCart(dish, count);
    navigation.goBack();
  };

  useEffect(() => {
    const getDish = async () => {
      try {
        const dish = await axios.get(`${BASE_URL}/dishes/${id}`);
        setDish(dish.data);
      } catch (error) {
        console.error('An error occurred:', error);
      }
    };

    getDish();
  }, [id, dish]);

  if (!dish) {
    return <ActivityIndicator color={'black'} />;
  }

  return (
    <SafeAreaView>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="dark-content"
      />
      <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
        <View style={{height: 300, position: 'relative'}}>
          <Image
            source={{uri: dish.image ? dish.image : ''}}
            style={styles.image}
          />
          <Pressable
            style={styles.backButton}
            onPress={() => navigation.goBack()}>
            <FontAwesome5 name="arrow-left" size={15} color={'black'} />
          </Pressable>
        </View>

        <View style={{height: '25%', paddingHorizontal: 10, paddingBottom: 10}}>
          <Text style={styles.name}>{dish.name}</Text>
          <Text style={styles.description}>{dish.description}</Text>
        </View>

        <View style={styles.separator} />

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 20,
          }}>
          <Pressable style={styles.sign} onPress={minus}>
            <Text style={styles.symbol}>&#10134;</Text>
          </Pressable>

          <Text style={styles.count}>{count}</Text>

          <Pressable style={styles.sign} onPress={add}>
            <Text style={styles.symbol}>&#10133;</Text>
          </Pressable>
        </View>
      </ScrollView>
      <View
        style={{
          paddingHorizontal: 10,
          position: 'absolute',
          bottom: 20,
          width: '100%',
        }}>
        <Pressable style={styles.button} onPress={addToCart}>
          <Text style={styles.buttonText}>
            Add {count} to cart &#8226; &#x20A6;{getTotal().toLocaleString()}
          </Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

export default MenuItemScreen;
