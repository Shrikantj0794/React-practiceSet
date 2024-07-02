// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCTAPRXWWFDNMW2zBgUGRPxemP3NHYRgNo",
  authDomain: "expenses-tracker-93125.firebaseapp.com",
  projectId: "expenses-tracker-93125",
  storageBucket: "expenses-tracker-93125.appspot.com",
  messagingSenderId: "338443532401",
  appId: "1:338443532401:web:06bce19dd561dc7c17c3d0",
  measurementId: "G-2180MDVZFC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

export default app;