import {StyleSheet} from 'react-native';

export default styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    width: '100%',
    height: '100%',
  },
  backButton: {
    width: 35,
    height: 35,
    backgroundColor: 'white',
    borderRadius: 50,
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    top: 10,
    left: 10,
  },
  backButtonArrow: {
    color: '#000',
    fontSize: 20,
    transform: [{rotateY: '180deg'}],
  },
  image: {
    width: '100%',
    height: 250,
    position: 'relative',
  },
  name: {
    fontSize: 25,
    fontWeight: '400',
    marginBottom: 5,
    color: 'black',
  },
  description: {
    color: 'grey',
    fontSize: 15,
    fontWeight: '400',
  },
  menuHeading: {
    fontSize: 18,
    fontWeight: '500',
    marginTop: 30,
    // marginBottom: 10,
    color: 'black',
    marginLeft: 10,
  },
  ordersContainer: {
    flex: 1,
    paddingHorizontal: 10,
  },
});
