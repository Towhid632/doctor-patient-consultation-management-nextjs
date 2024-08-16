// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCZbcnIjJ_Cge5OI009-pLKg2Rb74_zpNc",
  authDomain: "patient-schedule-management.firebaseapp.com",
  projectId: "patient-schedule-management",
  storageBucket: "patient-schedule-management.appspot.com",
  messagingSenderId: "390116352855",
  appId: "1:390116352855:web:f86bc744cf4092fb9dd412",
  measurementId: "G-4EMT5Z9242"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export {db};

