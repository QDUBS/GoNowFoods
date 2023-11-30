import {StyleSheet} from 'react-native';

export default styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    paddingVertical: 10,
    borderBottomColor: 'lightgrey',
    borderBottomWidth: 1,
  },
  image: {
    width: 100,
    height: 100,
    marginRight: 7,
  },
  name: {
    color: 'black',
    fontSize: 15,
    fontWeight: '500',
  },
  count: {
    color: '#666',
    fontSize: 13,
    fontWeight: '500',
  },
  button: {
    color: 'black',
    fontSize: 15,
    fontWeight: '400',
    fontStyle: 'italic',
    textDecorationLine: 'underline',
    marginVertical: 10,
  },
});
