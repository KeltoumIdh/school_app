import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBI9gI2Rh9Z6GIoixqrs4j3XB4uQ4M8nng",
  authDomain: "school-app-2e54d.firebaseapp.com",
  projectId: "school-app-2e54d",
  storageBucket: "school-app-2e54d.appspot.com",
  messagingSenderId: "14659000457",
  appId: "1:14659000457:web:00776096888e29fdface58",
  measurementId: "G-KG416F1FK9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)



export { app, auth };
