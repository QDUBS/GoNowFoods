import { StyleSheet } from "react-native";

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
  form: {
    marginTop: 20,
    paddingHorizontal: 15,
  },
  inputContainer: {
    width: '100%',
    borderWidth: 0,
    borderColor: '#ccc',
    borderWidth: 0.7,
    borderRadius: 10,
    color: '#000',
    paddingTop: 3,
    marginBottom: 10,
  },
  inputContainerLabel: {
    fontSize: 12,
    fontWeight: '400',
    color: '#666',
    paddingHorizontal: 10,
    position: 'absolute',
    top: 5,
  },
  inputContainerInput: {
    height: 40,
    color: 'black',
    paddingHorizontal: 10,
    marginTop: 8,
  },
  info: {
    fontSize: 14,
    fontWeight: '400',
    color: '#666',
    marginBottom: 15,
  },
  resend: {
    fontSize: 14,
    fontWeight: '400',
    color: '#a1705a',
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
    width: '100%',
    height: 45,
    backgroundColor: 'black',
    borderRadius: 3,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 14,
    fontWeight: '600',
  },
});
