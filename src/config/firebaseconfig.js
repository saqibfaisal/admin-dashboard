// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCpRVViS9OqZBO1kaHhd66GEh7ui6HCKpM",
  authDomain: "institute-system-c52c3.firebaseapp.com",
  databaseURL: "https://institute-system-c52c3-default-rtdb.firebaseio.com",
  projectId: "institute-system-c52c3",
  storageBucket: "institute-system-c52c3.appspot.com",
  messagingSenderId: "205909438563",
  appId: "1:205909438563:web:81fa78644abf6db7928856",
  measurementId: "G-TDKDVMCLLD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app