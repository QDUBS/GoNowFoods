import {StyleSheet} from 'react-native';

export default styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginVertical: 10,
    paddingVertical: 10,
    borderBottomColor: 'lightgrey',
    borderBottomWidth: 1,
  },
  image: {
    width: 100,
    height: 100,
    marginRight: 7,
  },
  quantityContainer: {
    width: 30,
    height: 30,
    backgroundColor: 'lightgrey',
    marginRight: 5,
    borderRadius: 3,
    alignItems: 'center',
    justifyContent: 'center',
  },
  menuItem: {
    color: 'black',
    fontSize: 14,
    fontWeight: '400',
  },
  menuPrice: {
    color: 'black',
    fontSize: 14,
    fontWeight: '500',
    marginBottom: 10,
  },
  button: {
    color: 'red',
    fontSize: 15,
    fontWeight: '400',
    fontStyle: 'italic',
    textDecorationLine: 'underline',
    marginVertical: 10,
  },
});
