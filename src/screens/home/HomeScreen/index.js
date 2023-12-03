import axios from 'axios';
import React, { useEffect, useState } from 'react';
import {
  ActivityIndicator,
  Image,
  Pressable,
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  View
} from 'react-native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import profilepic from '../../../assets/images/profile-pic.jpg';
import Category from '../../../components/home/Category';
import Restaurant from '../../../components/home/Restaurant';
import RestaurantSmall from '../../../components/home/RestaurantSmall';
import { AppRoutes } from '../../../constants/app_routes';
import { categories } from '../../../data/categories';
import { BASE_URL, PLACES_API_KEY } from '../../../utils/config';
import styles from './styles';

const HomeScreen = ({navigation}) => {
  const {openDrawer} = navigation;
  const [restaurants, setRestaurants] = useState([]);
  const [city, setCity] = useState(null);

  useEffect(() => {
    const getRestaurants = async () => {
      try {
        const restaurant = await axios.get(`${BASE_URL}/restaurants`);
        setRestaurants(restaurant.data);
      } catch (error) {
        console.error('An error occurred:', error);
      }
    };

    getRestaurants();
  }, [restaurants]);

  if (!restaurants) {
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
            <GooglePlacesAutocomplete
              query={{key: PLACES_API_KEY}}
              onPress={(data, details = null) => {
                console.log(data.description);
                const city = data.description.split(',')[0];
                setCity(city);
              }}
              placeholder="Search..."
              minLength={1}
              styles={{
                textInput: {
                  backgroundColor: '#f3f3f3',
                  height: 43,
                  borderWidth: 0,
                  color: '#333',
                  fontWeight: '600',
                  marginTop: 5,
                },
                textInputContainer: {
                  backgroundColor: '#f3f3f3',
                  width: '100%',
                  height: 43,
                  borderRadius: 50 / 2,
                  borderWidth: 0,
                  flexDirection: 'row',
                  alignItems: 'center',
                  paddingHorizontal: 10,
                },
                predefinedPlacesDescription: {
                  color: '#333',
                },
              }}
              textInputProps={{placeholderTextColor: '#333'}}
              renderLeftButton={() => (
                <Pressable onPress={openDrawer} style={styles.menu_button}>
                  <SimpleLineIcons name={'menu'} color="#000000" size={18} />
                </Pressable>
              )}
              renderRightButton={() => (
                <Pressable onPress={() => {}}>
                  <FontAwesome name="search" size={18} color={'#666'} />
                </Pressable>
              )}
            />

            <Pressable onPress={() => navigate(AppRoutes.ProfileScreen)}>
              <Image source={profilepic} style={styles.profile__pic} />
            </Pressable>
          </View>
        </View>

        {/* Categories */}
        <View style={styles.categoriesContainer}>
          <View>
            <View style={styles.recommendedHeadingContainer}>
              <Text style={styles.recommendedHeading}>Categories</Text>
            </View>

            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              style={styles.recommendedList}>
              {categories.map(category => (
                <Category
                  key={category.id}
                  category={category}
                  onPress={() =>
                    navigation.navigate(AppRoutes.CategoriesScreen, {
                      category: category.key,
                    })
                  }
                />
              ))}
            </ScrollView>
          </View>
        </View>

        {/* Recommended Scroll */}
        <View style={styles.recommendedContainer}>
          <View>
            <View style={styles.recommendedHeadingContainer}>
              <Text style={styles.recommendedHeading}>Recommended for you</Text>
              <Pressable
                activeOpacity={1}
                onPress={() =>
                  navigation.navigate(AppRoutes.RecommendedScreen)
                }>
                <Text style={styles.recommendedLink}>See all</Text>
              </Pressable>
            </View>

            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              style={styles.recommendedList}>
              {restaurants.map(restaurant => (
                <RestaurantSmall
                  key={restaurant.id}
                  restaurant={restaurant}
                  onPress={() =>
                    navigation.navigate(AppRoutes.Restaurant, {
                      id: restaurant.id,
                    })
                  }
                />
              ))}
            </ScrollView>
          </View>
        </View>

        {/* Near Scroll */}
        <View style={styles.nearContainer}>
          <View style={styles.nearHeadingContainer}>
            <Text style={styles.nearHeading}>Restaurants near you</Text>
            <Pressable
              activeOpacity={1}
              onPress={() => navigation.navigate(AppRoutes.NearScreen)}>
              <Text style={styles.nearLink}>See all</Text>
            </Pressable>
          </View>

          <View style={styles.nearList}>
            {restaurants.map(restaurant => (
              <Restaurant
                key={restaurant.id}
                restaurant={restaurant}
                onPress={() =>
                  navigation.navigate(AppRoutes.Restaurant, {
                    id: restaurant.id,
                  })
                }
              />
            ))}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
