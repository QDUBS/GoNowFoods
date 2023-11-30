import {StyleSheet} from 'react-native';

export default styles = StyleSheet.create({
  container: {
    width: '48%',
    height: 330,
    position: 'relative',
    borderRadius: 10,
    marginBottom: 10,
  },
  imageContainer: {
    position: 'relative',
  },
  image: {
    width: '100%',
    height: 250,
    marginRight: 10,
    borderRadius: 10,
  },
  favorite: {
    position: 'absolute',
    top: '4%',
    right: 10,
  },
  restaurantName: {
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: 14,
    color: 'black',
    paddingTop: 3,
  },
  restaurantLocation: {
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 13,
    color: '#666',
    paddingTop: 3,
  },
  restaurantWaitTime: {
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 12,
    color: '#220',
    paddingTop: 3,
  },
});
