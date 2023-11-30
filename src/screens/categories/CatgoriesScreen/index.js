import { useRoute } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import {
  ActivityIndicator,
  Image,
  Pressable,
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  TextInput,
  View,
} from 'react-native';
import styles from './styles';
import axios from 'axios';
import {BASE_URL} from '../../../utils/config';
import Swiper from 'react-native-swiper';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import Ionicons from 'react-native-vector-icons/Ionicons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import FavoriteDish from '../../../components/favorites/FavoriteDish';
import { AppRoutes } from '../../../constants/app_routes';
import restaurants from '../../../data/restaurants.json';

const images = [
  require('../../../assets/images/category-advert-1.png'),
  require('../../../assets/images/category-advert-2.png'),
  require('../../../assets/images/category-advert-3.jpg'),
  require('../../../assets/images/category-advert-4.jpg'),
  require('../../../assets/images/category-advert-5.jpg'),
];

const CatgoriesScreen = ({navigation}) => {
  const {openDrawer} = navigation;
  const route = useRoute();
  const category = route.params?.category;
  const [dishes, setDishes] = useState([]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const getDishes = async () => {
    try {
      const dishes = await axios.get(
        `${BASE_URL}/dishes?category_code=${category}`,
      );
      setDishes(dishes.data);
    } catch (error) {
      console.error('An error occurred:', error);
    }
  };

  const renderPagination = (index, total, context) => {
    return (
      <View style={styles.paginationStyle}>
        {images.map((_, i) => (
          <View
            key={i}
            style={[styles.dot, i === index ? styles.activeDot : null]}
          />
        ))}
      </View>
    );
  };

  useEffect(() => {
    getDishes();
  }, [dishes]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex(prevIndex => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(intervalId);
  }, []);

  if (!dishes) {
    return <ActivityIndicator size={'large'} color={'black'} />;
  }

  return (
    <SafeAreaView>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="dark-content"
      />
      <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
        {/* Header */}
        <View style={styles.homeHeader}>
          <View style={styles.navbar}>
            <Pressable onPress={openDrawer} style={styles.menu_button}>
              <SimpleLineIcons name={'menu'} color="#000000" size={18} />
            </Pressable>

            <View style={styles.row}>
              <Pressable
                onPress={() => navigation.navigate(AppRoutes.Profile)}
                style={{marginRight: 10}}>
                <Ionicons name={'person-sharp'} color="#000000" size={18} />
              </Pressable>
              <Pressable
                onPress={() => navigation.navigate(AppRoutes.HomeCart)}>
                <FontAwesome6 name={'bag-shopping'} color="#000000" size={17} />
              </Pressable>
            </View>
          </View>

          <View style={styles.homeSearchContainer}>
            <TextInput
              style={styles.homeSearchInput}
              placeholder="Search..."
              placeholderTextColor="#333"
            />
            <FontAwesome name="search" size={15} color={'#666'} />
          </View>
        </View>

        {/* Advert Slider */}
        <View style={styles.advertContainer}>
          <Swiper
            style={styles.imageSlider}
            autoplay
            autoplayTimeout={5}
            loop
            index={currentImageIndex}
            renderPagination={renderPagination}>
            {images.map((image, index) => (
              <Image key={index} source={image} style={styles.sliderImage} />
            ))}
          </Swiper>
        </View>

        {/* Body */}
        <View style={styles.body}>
          <Text style={styles.heading}>Bakery & Dessert</Text>

          {restaurants.length > 0 && (
            <View style={styles.dishContainer}>
              {restaurants?.map(dish => (
                <FavoriteDish key={dish.id} dish={dish} onPress={() => {}} />
              ))}
            </View>
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default CatgoriesScreen;
