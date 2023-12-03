import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

export const firebaseConfig = {
  apiKey: 'AIzaSyD9aJGP-PTRIapX7rVmCBTyMaEgb45oEnQ',
  authDomain: 'GoNow Foods',
  projectId: 'gonowfoods',
  storageBucket: 'gonowfoods.appspot.com',
  messagingSenderId: '643605797326',
  appId: '1:643605797326:web:ad1cc95b0bd5caff2a739f',
  measurementId: 'G-DWS6P4ZLN0',
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
