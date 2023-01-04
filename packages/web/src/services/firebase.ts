import { initializeApp } from 'firebase/app';
import {
  browserLocalPersistence,
  getAuth,
  setPersistence,
} from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyCtg23r2N9WP7i_s5bgYbmxl6NR-rIWTXU',
  authDomain: 'ameixa-d2868.firebaseapp.com',
  projectId: 'ameixa-d2868',
  storageBucket: 'ameixa-d2868.appspot.com',
  messagingSenderId: '370574059900',
  appId: '1:370574059900:web:422dea7efacb7703c35cf9',
};

export const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

setPersistence(auth, browserLocalPersistence);

export { auth };
