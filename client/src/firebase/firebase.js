// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCpWlRCbMmAm6jiPybbeF2r5BapyRcpcIw",
  authDomain: "aetherial-c1202.firebaseapp.com",
  databaseURL: "https://aetherial-c1202-default-rtdb.firebaseio.com",
  projectId: "aetherial-c1202",
  storageBucket: "aetherial-c1202.appspot.com",
  messagingSenderId: "12383017568",
  appId: "1:12383017568:web:8fc821452fef626fe60105",
  measurementId: "G-RESZF88FET"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;