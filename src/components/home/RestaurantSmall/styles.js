import {StyleSheet} from 'react-native';

export default styles = StyleSheet.create({
  container: {
    width: 200,
    height: 223,
    marginVertical: 10,
    marginRight: 15,
  },
  image: {
    width: '100%',
    height: 150,
  },
  tag: {
    flexDirection: 'column',
    justifyContent: 'center',
    paddingRight: 10,
    position: 'absolute',
    top: '5%',
    right: 0,
  },
  tagText: {
    color: '#fff',
    fontSize: 13,
    fontWeight: '700',
    letterSpacing: 0.5,
    alignSelf: 'flex-end',
  },
  info: {
    marginTop: 5,
  },
  flex: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  name: {
    fontSize: 14,
    fontWeight: '500',
    marginBottom: 5,
    color: 'black',
  },
  price: {
    color: 'grey',
    fontWeight: '400',
    fontSize: 13,
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
