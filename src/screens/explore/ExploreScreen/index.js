import MasonryList from '@react-native-seoul/masonry-list';
import React, {useEffect, useState} from 'react';
import {
  ActivityIndicator,
  Image,
  Pressable,
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  View,
} from 'react-native';
import profilepic from '../../../assets/images/profile-pic.jpg';
import Advert from '../../../components/explore/Advert';
import Dish from '../../../components/explore/Dish';
import RestaurantExploreCard from '../../../components/explore/RestaurantExploreCard';
import styles from './styles';
import axios from 'axios';
import {BASE_URL} from '../../../utils/config';
import { useNavigation } from '@react-navigation/native';
import { AppRoutes } from '../../../constants/app_routes';

const ExploreScreen = () => {
  const navigation = useNavigation();
  const [restaurants, setRestaurants] = useState([]);
  const [dishes, setDishes] = useState([]);
  const [adverts, setAdverts] = useState([]);

  const filtered_restaurants = restaurants.map(restaurant => ({
    id: restaurant.id,
    imgURL: restaurant.image,
    text: restaurant.name,
  }));

  const renderItem = ({item, i}) => {
    return (
      <RestaurantExploreCard
        item={item}
        style={{marginLeft: i % 2 === 0 ? 0 : 12}}
      />
    );
  };

  const getRestaurants = async () => {
    try {
      const restaurants = await axios.get(`${BASE_URL}/restaurants`);
      setRestaurants(restaurants.data);
    } catch (error) {
      console.error('An error occurred:', error);
    }
  };

  const getDishes = async () => {
    try {
      const dishes = await axios.get(`${BASE_URL}/dishes`);
      setDishes(dishes.data);
    } catch (error) {
      console.error('An error occurred:', error);
    }
  };

  const getAdverts = async () => {
    try {
      const adverts = await axios.get(`${BASE_URL}/adverts`);
      setAdverts(adverts.data);
    } catch (error) {
      console.error('An error occurred:', error);
    }
  };

  useEffect(() => {
    getRestaurants();
  }, [restaurants]);

  useEffect(() => {
    getDishes();
  }, [dishes]);

  useEffect(() => {
    getAdverts();
  }, [adverts]);

  if (!restaurants || !dishes || !adverts) {
    return <ActivityIndicator size={'large'} color={'black'} />;
  }

  return (
    <SafeAreaView>
      <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
        <StatusBar
          translucent
          backgroundColor="white"
          barStyle="dark-content"
        />

        {/* Header */}
        <View style={styles.header}>
          <Pressable
            onPress={() => navigate(AppRoutes.ProfileScreen)}
            style={{
              alignSelf: 'flex-end',
            }}>
            <Image source={profilepic} style={styles.profile__pic} />
          </Pressable>
        </View>

        {/* Best Deals */}
        <View style={styles.bestDealContainer}>
          <View>
            <View style={styles.bestDealHeadingContainer}>
              <Text style={styles.bestDealHeading}>Best deals this week</Text>
            </View>

            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              style={styles.bestDealList}>
              {adverts.map(advert => (
                <Advert
                  key={advert.id}
                  advert={advert}
                  onPress={() =>
                    navigation.navigate(AppRoutes.Restaurant, {
                      id: advert.restaurant_id,
                    })
                  }
                />
              ))}
            </ScrollView>
          </View>
        </View>

        {/* Elevate */}
        <View style={styles.elevateContainer}>
          <View>
            <View style={styles.elevateHeadingContainer}>
              <Text style={styles.elevateHeading}>Elevate your tastebuds</Text>
            </View>

            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              style={styles.elevateList}>
              {dishes.map((dish, index) => (
                <Dish
                  key={dish.name}
                  dish={dish}
                  onPress={() =>
                    navigation.navigate(AppRoutes.MenuItem, {id: dish.id})
                  }
                />
              ))}
            </ScrollView>
          </View>
        </View>

        {/* Top Rated */}
        <View style={styles.topRatedContainer}>
          <View>
            <View style={styles.elevateHeadingContainer}>
              <Text style={styles.topRatedHeading}>
                Top rated with top tastes
              </Text>
            </View>

            <MasonryList
              keyExtractor={item => item.id}
              ListHeaderComponent={<View />}
              contentContainerStyle={{
                alignSelf: 'stretch',
              }}
              onEndReached={() => console.log('onEndReached')}
              numColumns={2}
              data={filtered_restaurants}
              renderItem={renderItem}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ExploreScreen;
