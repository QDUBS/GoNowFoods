import {useNavigation} from '@react-navigation/native';
import {useMemo} from 'react';
import {Image, Pressable, Text} from 'react-native';
import {AppRoutes} from '../../../constants/app_routes';

const RestaurantExploreCard = ({item, style}) => {
  const navigation = useNavigation();
  const randomBool = useMemo(() => Math.random() < 0.5, []);

  return (
    <Pressable
      onPress={() => navigation.navigate(AppRoutes.Restaurant, {id: item.id})}
      key={item.id}
      style={[{marginTop: 12, flex: 1, borderRadius: 10}, style]}>
      <Image
        source={{uri: item.imgURL}}
        style={{
          height: randomBool ? 150 : 280,
          alignSelf: 'stretch',
        }}
        resizeMode="cover"
      />
      <Text
        style={{
          marginTop: 8,
          color: '#000',
        }}>
        {item.text}
      </Text>
    </Pressable>
  );
};

export default RestaurantExploreCard;
