
import firebase from './firebase/app';
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBI9gI2Rh9Z6GIoixqrs4j3XB4uQ4M8nng",
  authDomain: "school-app-2e54d.firebaseapp.com",
  projectId: "school-app-2e54d",
  storageBucket: "school-app-2e54d.appspot.com",
  messagingSenderId: "14659000457",
  appId: "1:14659000457:web:00776096888e29fdface58",
  measurementId: "G-KG416F1FK9"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const db = firebase.firestore();

export default db;