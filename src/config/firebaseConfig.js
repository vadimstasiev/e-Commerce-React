// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAvn1YB-cFk1MYc7HNvFv82lRKsNnA-m7U",
  authDomain: "mobile-app-b6ebc.firebaseapp.com",
  databaseURL: "https://mobile-app-b6ebc.firebaseio.com",
  projectId: "mobile-app-b6ebc",
  storageBucket: "mobile-app-b6ebc.appspot.com",
  messagingSenderId: "432394255342",
  appId: "1:432394255342:web:db191516f1180537536cff",
  measurementId: "G-XVJRMFQZ0D"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default {app}