import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {ActivityIndicator, Text, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import ToggleButton from '../../../components/common/ToggleButton';
import FavoriteDish from '../../../components/favorites/FavoriteDish';
import FavoriteRestaurant from '../../../components/favorites/FavoriteRestaurant';
import {AppRoutes} from '../../../constants/app_routes';
import restaurants from '../../../data/restaurants.json';
import styles from './styles';
import EmptyFavorites from '../../../components/empty/EmptyFavorites';
import axios from 'axios';

const FavoritesScreen = () => {
  const navigation = useNavigation();
  const [userId, setUserId] = useState(null);
  const [favoriteRestaurants, setFavoriteRestaurants] = useState([]);
  const [favoriteDishes, setFavoriteDishes] = useState([]);
  const [activeTab, setActiveTab] = useState('Restaurants');

  const getFavoriteRestaurants = async () => {
    try {
      const restaurants = await axios.get(`${BASE_URL}/favorites/restaurants`);
      setFavoriteRestaurants(restaurants.data);
    } catch (error) {
      console.error('An error occurred:', error);
    }
  };

  const getFavoriteDishes = async () => {
    try {
      const dishes = await axios.get(`${BASE_URL}/favorites/dishes`);
      setFavoriteDishes(dishes.data);
    } catch (error) {
      console.error('An error occurred:', error);
    }
  };

  useEffect(() => {
    getFavoriteRestaurants();
  }, [userId, favoriteRestaurants]);

  useEffect(() => {
    getFavoriteDishes();
  }, [userId, favoriteDishes]);

  useEffect(() => {
    const loadData = async () => {
      const id = await AsyncStorage.getItem('userId');
      setUserId(id);
    };

    loadData();
  }, [userId]);

  if (!favoriteRestaurants || !favoriteDishes) {
    return <ActivityIndicator color={'black'} />;
  }

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.heading}>Favorites</Text>

      <View style={styles.toggleContainer}>
        <View style={styles.toggle}>
          <ToggleButton
            text={'Restaurants'}
            activeTab={activeTab}
            setActiveTab={() => setActiveTab('Restaurants')}
          />
          <ToggleButton
            text={'Specials'}
            activeTab={activeTab}
            setActiveTab={() => setActiveTab('Specials')}
          />
        </View>
      </View>

      <View>
        {activeTab === 'Restaurants' && (
          <>
            {favoriteRestaurants.length > 0 ? (
              <View style={styles.restaurantsContainer}>
                {favoriteRestaurants.map(restaurant => (
                  <FavoriteRestaurant
                    key={restaurant.id}
                    restaurant={restaurant.restaurant}
                    onPress={() => {
                      navigation.navigate(AppRoutes.Restaurant, {
                        id: restaurant.restaurant.id,
                      });
                    }}
                  />
                ))}
              </View>
            ) : (
              <EmptyFavorites onPress={() => {}} />
            )}
          </>
        )}

        {activeTab === 'Specials' && (
          <>
            {favoriteDishes.length > 0 ? (
              <View style={styles.restaurantsContainer}>
                {restaurants.map(dish => (
                  <FavoriteDish
                    key={dish.id}
                    dish={dish.dish}
                    onPress={() => {
                      navigation.navigate(AppRoutes.MenuItem, {
                        id: dish.dish.id,
                      });
                    }}
                  />
                ))}
              </View>
            ) : (
              <EmptyFavorites onPress={() => {}} />
            )}
          </>
        )}
      </View>
    </ScrollView>
  );
};

export default FavoritesScreen;
