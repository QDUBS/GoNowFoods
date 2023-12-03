import {useNavigation, useRoute} from '@react-navigation/native';
import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {Pressable, ScrollView, StatusBar, Text, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import CartItem from '../../../components/cart/CartItem';
import {AppRoutes} from '../../../constants/app_routes';
import {useCartContext} from '../../../context/CartContext';
import {useOrderContext} from '../../../context/OrderContext';
import {BASE_URL} from '../../../utils/config';
import styles from './styles';
import PaymentModal from '../../../components/modals/PaymentModal';
import DeliveryInstructionModal from '../../../components/modals/DeliveryInstructionModal';
import DeliveryAddressModal from '../../../components/modals/DeliveryAddressModal';
import PaymentSuccessfulModal from '../../../components/modals/PaymentSuccessfulModal';
import PaymentFailedModal from '../../../components/modals/PaymentFailedModal';

function OrderCheckoutScreen() {
  const navigation = useNavigation();
  const route = useRoute();
  const id = route.params?.id;
  const [cart, setCart] = useState(null);
  const [cartDishes, setCartDishes] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [deliveryAddressModalVisible, setDeliveryAddressModalVisible] =
    useState(false);
  const [
    deliveryInstructionsModalVisible,
    setDeliveryInstructionsModalVisible,
  ] = useState(false);
  const [activePayment, setSetActivePayment] = useState('');
  const [address, setAddress] = useState('');
  const [instructions, setSetInstructions] = useState('');
  const {setCartRestaurant} = useCartContext();
  const {createOrder} = useOrderContext();
  const sumTotal = cartDishes.reduce(
    (sum, cartDish) => sum + cartDish.quantity * cartDish.dish.price,
    cart?.restaurant?.delivery_fee,
  );

  const getCart = async id => {
    try {
      const basket = await axios.get(`${BASE_URL}/baskets/${id}`);
      setCart(basket.data);
    } catch (error) {
      console.error('An error occurred:', error);
    }
  };

  const getCartDishes = async basket_id => {
    try {
      const cartDishes = await axios.get(
        `${BASE_URL}/basket-dishes?basket_id=${basket_id}`,
      );

      setCartDishes(cartDishes.data);
    } catch (error) {
      console.error('An error occurred:', error);
    }
  };

  const onCreateOrder = async () => {
    if (cart) {
      setCartRestaurant(cart?.restaurant);

      const newOrder = await createOrder(cart, cart?.restaurant, sumTotal);
      console.log('New order:', newOrder);
      navigation.navigate(AppRoutes.Orders, {
        screen: AppRoutes.OrderNavigator,
        params: {id: newOrder.id},
      });
    }
  };

  const removeItem = async id => {
    await axios.delete(`${BASE_URL}/basket-dishes/${id}`);
    navigation.navigate(AppRoutes.Restaurant, {id: cart?.restaurant?.id});
  };

  useEffect(() => {
    if (id) {
      getCart(id);
    }
  }, [id]);

  useEffect(() => {
    if (cart) {
      getCartDishes(id);
    }
  }, [cart]);

  // if (!cart) {
  //   return <ActivityIndicator size={'large'} />;
  // }

  return (
    <SafeAreaView>
      <StatusBar translucent backgroundColor="white" barStyle="dark-content" />
      <View>
        <ScrollView
          style={styles.container}
          showsVerticalScrollIndicator={false}>
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
              <Text style={styles.headerText}>Overview</Text>
            </View>
          </View>

          {/* Order Items */}
          <View style={styles.order_section}>
            <Text style={styles.heading}>Order Details</Text>
            <View style={styles.sectionContainer}>
              {cartDishes.map(item => (
                <CartItem
                  key={item.id}
                  cartItem={item}
                  onPress={() => removeItem(item.id)}
                />
              ))}
            </View>
          </View>

          {/* Delivery Address */}
          <View style={styles.section}>
            <Text style={styles.heading}>Delivery Address</Text>
            <View
              style={[
                styles.sectionContainer,
                {flexDirection: 'row', alignItems: 'flex-end'},
              ]}>
              <View style={{width: '75%'}}>
                <Text style={styles.deliveryText1}>Steven Dobson</Text>
                <Text style={styles.deliveryText2}>
                  107a Trafalager Street, Brighton, United Kingdom, BNI 1AP
                </Text>
              </View>
              <View style={{width: '25%'}}>
                <Pressable
                  style={styles.editButton}
                  onPress={() => setDeliveryAddressModalVisible(true)}>
                  <Text style={styles.editButtonText}>Edit</Text>
                </Pressable>
              </View>
            </View>
          </View>

          {/* Delivery Instructions */}
          <View style={styles.section}>
            <Text style={styles.heading}>Delivery Instructions</Text>
            <View
              style={[
                styles.sectionContainer,
                {flexDirection: 'row', alignItems: 'flex-end'},
              ]}>
              <View style={{width: '75%'}}>
                <Text style={styles.deliveryText2}>No instructions given</Text>
              </View>
              <View style={{width: '25%'}}>
                <Pressable
                  style={styles.editButton}
                  onPress={() => setDeliveryInstructionsModalVisible(true)}>
                  <Text style={styles.editButtonText}>Edit</Text>
                </Pressable>
              </View>
            </View>
          </View>

          {/* Delivery Cost */}
          <View style={styles.section}>
            <Text style={styles.heading}>Delivery Cost</Text>
            <View style={styles.sectionContainer}>
              <Text style={styles.orderTotal}>&#x20A6;1000.00</Text>
            </View>
          </View>

          {/* Order Total */}
          <View style={{paddingVertical: 10}}>
            <Text style={styles.heading}>Order Total</Text>
            <View style={styles.sectionContainer}>
              <Text style={styles.orderTotal}>&#x20A6;1000.00</Text>
            </View>
          </View>
        </ScrollView>

        <View style={styles.buttonContainer}>
          <Pressable
            style={styles.button}
            onPress={() => setModalVisible(true)}>
            <Text style={styles.buttonText}>
              Pay Now &#8226; &#x20A6;{sumTotal?.toLocaleString()}
            </Text>
          </Pressable>
        </View>
      </View>

      {modalVisible && (
        <PaymentModal
          modalVisible={modalVisible}
          activePayment={activePayment}
          close={() => setModalVisible(false)}
          setSetActivePayment={setSetActivePayment}
        />
      )}

      {deliveryAddressModalVisible && (
        <DeliveryAddressModal
          modalVisible={deliveryAddressModalVisible}
          close={() => setDeliveryAddressModalVisible(false)}
          address={address}
          setAddress={setAddress}
        />
      )}

      {deliveryInstructionsModalVisible && (
        <DeliveryInstructionModal
          modalVisible={deliveryInstructionsModalVisible}
          close={() => setDeliveryInstructionsModalVisible(false)}
          instructions={instructions}
          setInstructions={setSetInstructions}
        />
      )}
    </SafeAreaView>
  );
}

export default OrderCheckoutScreen;
