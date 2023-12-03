import {Dimensions, StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: 'white',
  },
  header: {
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    paddingVertical: 15,
    paddingBottom: 25,
  },
  headerFlex: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerText: {
    fontSize: 16,
    fontWeight: '500',
    color: 'black',
    marginLeft: 20,
  },
  body: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  heading: {
    color: '#a00',
    fontSize: 14,
    fontWeight: '400',
    marginBottom: 5,
    paddingHorizontal: 15,
  },
  order_section: {
    paddingBottom: 10,
    borderBottomWidth: 10,
    borderBottomColor: '#f3f3f3',
  },
  section: {
    borderBottomWidth: 10,
    borderBottomColor: '#f3f3f3',
    paddingVertical: 15,
  },
  sectionContainer: {
    marginTop: 5,
    paddingHorizontal: 15,
  },
  deliveryText1: {
    color: '#000',
    fontSize: 15,
    fontWeight: '500',
  },
  deliveryText2: {
    width: '70%',
    color: '#000',
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 20,
    marginTop: 5,
  },
  editButton: {
    backgroundColor: 'white',
    width: '100%',
    height: 30,
    borderRadius: 5,
    borderWidth: 0.7,
    borderColor: '#a00',
    alignItems: 'center',
    justifyContent: 'center',
  },
  editButtonText: {
    color: '#a00',
    fontSize: 13.5,
    fontWeight: '400',
  },
  orderTotal: {
    color: '#000',
    fontSize: 20,
    fontWeight: '500',
  },
  buttonContainer: {
    backgroundColor: 'white',
    paddingHorizontal: 10,
    paddingVertical: 20,
    position: 'absolute',
    bottom: 0,
    width: '100%',
    marginTop: 80,
  },
  button: {
    backgroundColor: 'black',
    width: '100%',
    height: 45,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#f3f3f3',
    fontSize: 14,
    fontWeight: '600',
  },
});
