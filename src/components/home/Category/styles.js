import {Platform, StyleSheet} from 'react-native';

export default styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
    marginRight: 20,
    shadowColor: Platform.OS === 'ios' ? 'green' : '#ccc',
    shadowOffset: {
      width: Platform.OS === 'ios' ? 3 : 0,
      height: Platform.OS === 'ios' ? 3 : 2,
    },
    shadowOpacity: Platform.OS === 'ios' ? 1 : 0.8,
    shadowRadius: Platform.OS === 'ios' ? null : 40,
    elevation: Platform.OS === 'ios' ? null : 4,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 100,
  },
  name: {
    fontSize: 12,
    fontWeight: '500',
    color: 'black',
    textAlign: 'center',
    marginTop: 10
  },
});
