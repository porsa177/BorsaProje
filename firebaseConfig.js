// firebaseConfig.js
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'SENİN_API_KEY',
  authDomain: 'senin-app.firebaseapp.com',
  projectId: 'senin-app',
  storageBucket: 'senin-app.appspot.com',
  messagingSenderId: '...',
  appId: '...',
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
