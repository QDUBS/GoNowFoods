import {StyleSheet} from 'react-native';

export default styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    width: '100%',
    height: '100%',
    paddingTop: '12%',
  },
  heading: {
    color: 'black',
    fontSize: 22,
    fontWeight: '700',
    marginVertical: 10,
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderBottomColor: '#f3f3f3',
    borderBottomWidth: 1,
  },
  toggleContainer: {
    marginVertical: 15,
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginBottom: 25,
  },
  toggle: {
    width: '100%',
    backgroundColor: '#f3f3f3',
    flexDirection: 'row',
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  restaurantsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    paddingBottom: '15%',
  },
});
