import {StyleSheet} from 'react-native';

export default styles = StyleSheet.create({
  container: {
    width: 200,
    height: 223,
    marginRight: 15,
  },
  image: {
    width: '100%',
    height: 150,
  },
  info: {
    marginTop: 10,
  },
  flex: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 3,
  },
  priceContainer: {
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  price: {
    color: 'black',
    fontWeight: '600',
    fontSize: 18,
  },
  priceTag: {
    color: 'black',
    fontWeight: '400',
    fontSize: 12,
    position: 'relative',
    top: -2,
  },
  name: {
    fontSize: 14,
    fontWeight: '400',
    marginBottom: 5,
    color: 'grey',
    marginTop: 5,
  },
  rating: {
    width: 35,
    height: 25,
    backgroundColor: 'lightgrey',
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
  },
  ratingText: {
    color: 'black',
    fontWeight: '700',
    fontSize: 14,
  },
});
