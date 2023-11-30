import {StyleSheet} from 'react-native';

export default styles = StyleSheet.create({
  container: {
    width: '48%',
    position: 'relative',
    paddingVertical: 20,
    paddingHorizontal: 5,
    flexDirection: 'column',
    alignItems: 'center',
    borderRadius: 10,
    borderColor: '#f3f3f3',
    borderWidth: 1,
    marginBottom: 20,
  },
  image: {
    width: 80,
    height: 80,
  },
  dishFlex: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  dishName: {
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: 14,
    color: 'black',
    paddingTop: 5,
  },
  dishPrice: {
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 13,
    color: 'black',
    paddingTop: 3,
  },
});
