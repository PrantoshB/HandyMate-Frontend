import firebase from 'firebase/compat/app';
import 'firebase/compat/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyCok6eLh1EjjZu5YQrUrtLwbMj8umgiXSw',
  authDomain: 'handymate-services.firebaseapp.com',
  projectId: 'handymate-services',
  storageBucket: 'handymate-services.appspot.com',
  messagingSenderId: '849058977088',
  appId: '1:849058977088:web:8f14952da95791706f96a5',
};

firebase.initializeApp(firebaseConfig);

const storage = firebase.storage();

export { storage, firebase as default };
