import {StyleSheet} from 'react-native';

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
  headerButton: {
    fontSize: 14,
    fontWeight: '400',
    color: '#a1705a',
  },
  body: {
    paddingHorizontal: 15,
  },
  walletContainer: {
    backgroundColor: '#f3f3f3',
    borderRadius: 15,
    paddingHorizontal: 10,
    paddingVertical: 15,
  },
  walletContainerHeading: {
    fontSize: 14,
    fontWeight: '400',
    color: '#666',
    marginBottom: 10,
  },
  walletBalance: {
    fontSize: 18,
    fontWeight: '500',
    color: '#666',
    marginBottom: 10,
  },
  walletContainerInfo: {
    fontSize: 13,
    fontWeight: '400',
    color: '#333',
    marginTop: 5,
    paddingTop: 10,
    borderTopColor: '#ccc',
    borderTopWidth: 0.4,
  },
  paymentMethodContainer: {
    paddingHorizontal: 15,
    paddingVertical: 15,
    marginTop: 30,
    borderTopColor: '#f3f3f3',
    borderTopWidth: 8,
  },
  paymentMethodHeading: {
    fontSize: 16,
    fontWeight: '500',
    color: 'black',
    marginBottom: 10,
  },
  paymentMethod: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 15,
    borderBottomColor: '#ccc',
    borderBottomWidth: 0.4,
  },
  paymentMethodFlex: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  paymentMethod2: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    paddingBottom: 5,
  },
  paymentMethodName: {
    color: '#000',
    fontSize: 14,
    fontWeight: '400',
    textAlign: 'center',
    marginLeft: 10,
  },
});
