import {StyleSheet} from 'react-native';

export default styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingVertical: 15,
    paddingHorizontal: 10,
    borderBottomColor: '#f1f1f1',
    borderBottomWidth: 10,
  },
  image: {
    width: '100%',
    height: 250,
    borderRadius: 10,
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
    flex: 1,
    marginTop: 10,
  },
  name: {
    fontSize: 16,
    fontWeight: '500',
    marginBottom: 5,
    color: 'black',
  },
  price: {
    color: 'grey',
    fontWeight: '400',
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
    fontWeight: '500',
    fontSize: 14,
  },
});
