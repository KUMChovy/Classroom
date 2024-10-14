// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"; // Para autenticación
import { getDatabase } from "firebase/database"; // Para Realtime Database

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY || "AIzaSyCOraxY9O5yhbALFZRAGT5K7w8clZAL52U",
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN || "esp-32-3aa57.firebaseapp.com",
  databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL || "https://esp-32-3aa57-default-rtdb.firebaseio.com",
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID || "esp-32-3aa57",
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET || "esp-32-3aa57.appspot.com",
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID || "908155508595",
  appId: process.env.REACT_APP_FIREBASE_APP_ID || "1:908155508595:web:16841f350ae676fcbf9706"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize services
const auth = getAuth(app); // Inicializa autenticación
const db = getDatabase(app); // Inicializa Realtime Database

export { auth, db };
