import {StyleSheet} from 'react-native';

export default styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomColor: 'lightgrey',
    borderBottomWidth: 1,
  },
  image: {
    width: 100,
    height: 100,
  },
  details: {
    flex: 1,
    marginLeft: 10,
  },
  name: {
    color: 'black',
    fontSize: 16,
    fontWeight: '700',
  },
  info: {
    color: 'grey',
    fontSize: 14,
    fontWeight: '600',
    marginVertical: 10,
  },
  time: {
    color: 'grey',
    fontSize: 13,
    fontWeight: '600',
  },
});
