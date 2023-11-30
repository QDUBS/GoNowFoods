import {StyleSheet} from 'react-native';

export default styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    width: '100%',
    height: '100%',
    position: 'relative',
  },
  backButton: {
    width: 35,
    height: 35,
    backgroundColor: 'white',
    borderRadius: 50,
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    top: '18%',
    left: '4%',
  },
  backButtonArrow: {
    color: '#000',
    fontSize: 20,
    transform: [{rotateY: '180deg'}],
  },
  image: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    position: 'relative',
  },
  name: {
    color: 'black',
    fontSize: 25,
    fontWeight: '600',
    marginVertical: 10,
  },
  description: {
    fontWeight: '400',
    fontSize: 16,
    color: '#696969',
    marginVertical: 10,
  },
  separator: {
    height: 1,
    backgroundColor: 'lightgrey',
    marginVertical: 10,
  },
  sign: {
    width: 40,
    height: 40,
    borderColor: 'black',
    borderWidth: 2,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  symbol: {
    color: 'black',
  },
  count: {
    fontSize: 20,
    fontWeight: '500',
    color: 'black',
    marginHorizontal: 10,
  },
  button: {
    width: '100%',
    height: 45,
    backgroundColor: 'black',
    borderRadius: 3,

    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 14,
    fontWeight: '600',
  },
});
