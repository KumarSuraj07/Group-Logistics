import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBsdZ45rvVh0LIjobgxVybKhnFqA-d_kUA",
  authDomain: "grouplogistics-49d63.firebaseapp.com",
  projectId: "grouplogistics-49d63",
  storageBucket: "grouplogistics-49d63.firebasestorage.app",
  messagingSenderId: "247422602484",
  appId: "1:247422602484:web:1611be2adc02ce8c81a2a1"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

