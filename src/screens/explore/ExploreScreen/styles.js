import {StyleSheet} from 'react-native';

export default styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    width: '100%',
    height: '100%',
    paddingVertical: '15%',
  },
  header: {
    flexDirection: 'column',
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  profile__pic: {
    width: 40,
    height: 40,
    borderRadius: 100,
    shadowColor: '#52006A',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  bestDealContainer: {
    paddingTop: 10,
    paddingBottom: 30,
    paddingHorizontal: 20,
    borderBottomColor: '#f1f1f1',
    borderBottomWidth: 7,
  },
  bestDealHeadingContainer: {
    marginBottom: 20,
  },
  bestDealHeading: {
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: 18,
    color: '#000',
  },
  elevateContainer: {
    paddingTop: 25,
    paddingBottom: 10,
    paddingHorizontal: 20,
    borderBottomColor: '#f1f1f1',
    borderBottomWidth: 7,
  },
  elevateHeadingContainer: {
    marginBottom: 20,
  },
  elevateHeading: {
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: 16,
    color: '#000',
  },
  elevateList: {
    width: '50%',
  },
  topRatedContainer: {
    paddingTop: 20,
    paddingBottom: 10,
    paddingHorizontal: 20,
  },
  topRatedHeading: {
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: 16,
    color: '#000',
  },
});
