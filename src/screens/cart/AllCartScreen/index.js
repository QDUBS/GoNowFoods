import {useNavigation} from '@react-navigation/native';
import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {ActivityIndicator, FlatList, Text, View} from 'react-native';
import {BASE_URL} from '../../../utils/config';
import Cart from '../../../components/cart/Cart';
import styles from './styles';
import {AppRoutes} from '../../../constants/app_routes';
import AsyncStorage from '@react-native-async-storage/async-storage';
import EmptyCart from '../../../components/empty/EmptyCart';

const AllCartScreen = () => {
  const navigation = useNavigation();
  const [allCarts, setAllCarts] = useState([]);
  const [userId, setUserId] = useState(null);

  const getAllCarts = async () => {
    try {
      const baskets = await axios.get(`${BASE_URL}/baskets?user_id=${userId}`);
      setAllCarts(baskets.data);
    } catch (error) {
      console.error('An error occurred:', error);
    }
  };

  useEffect(() => {
    getAllCarts();
  }, [userId, allCarts]);

  useEffect(() => {
    const loadData = async () => {
      const id = await AsyncStorage.getItem('userId');
      setUserId(id);
    };

    loadData();
  }, [userId]);

  if (!allCarts) {
    return <ActivityIndicator />;
  }

  return (
    <View style={styles.container}>
      <View style={{paddingHorizontal: 10, paddingBottom: 10}}>
        <Text style={styles.name}>Cart</Text>
      </View>

      <View
        style={{
          paddingHorizontal: 10,
          paddingTop: 15,
          borderTopColor: 'lightgrey',
          borderTopWidth: 1,
        }}>
        {allCarts.length > 0 ? (
          <View>
            {allCarts.map(cart => (
              <Cart
                key={cart.id}
                cart={cart}
                onPress={() =>
                  navigation.navigate(AppRoutes.CartScreen, {
                    id: cart.id,
                  })
                }
              />
            ))}
          </View>
        ) : (
          <EmptyCart onPress={() => {}} />
        )}
      </View>
    </View>
  );
};

export default AllCartScreen;
