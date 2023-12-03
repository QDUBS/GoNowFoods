import {Dimensions, StyleSheet} from 'react-native';

export default styles = StyleSheet.create({
  paymentMethod: {
    width: '100%',
    marginBottom: 20,
  },
  paymentMethodCardContainer: {
    width: '100%',
    position: 'relative',
  },
  paymentMethodCardActive: {
    width: '100%',
    backgroundColor: 'white',
    borderRadius: 5,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    position: 'relative',
    borderWidth: 3,
    borderColor: '#00BA00',
  },
  paymentMethodCardInactive: {
    width: '100%',
    backgroundColor: 'white',
    borderRadius: 5,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    position: 'relative',
  },
  paymentMethodImage: {
    width: 250,
    height: 50,
    objectFit: 'contain',
  },
  paymentMethodText: {
    color: 'grey',
    fontSize: 15,
    fontWeight: '400',
    textAlign: 'center',
    marginVertical: 10,
  },
  checkmarkContainer: {
    backgroundColor: 'white',
    width: 25,
    height: 25,
    borderRadius:
      Math.round(
        Dimensions.get('window').width + Dimensions.get('window').height,
      ) / 2,
    position: 'absolute',
    top: '-10%',
    right: '-2.5%',
  },
  checkmarkImage: {
    width: 25,
    height: 25,
  },
});
