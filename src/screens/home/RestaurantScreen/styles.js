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
    fontSize: 25,
    fontWeight: '400',
    marginBottom: 5,
    marginRight: 10,
    color: 'black',
    flex: 1,
  },
  description: {
    color: 'grey',
    fontSize: 15,
    fontWeight: '400',
  },
  menuHeading: {
    fontSize: 20,
    fontWeight: '500',
    marginTop: 20,
    marginBottom: 10,
    color: 'black',
    marginLeft: 10,
  },
  dishesContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  buttonContainer: {
    backgroundColor: 'white',
    paddingHorizontal: 10,
    paddingVertical: 10,
    position: 'absolute',
    bottom: 0,
    width: '100%',
    marginTop: 80,
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
