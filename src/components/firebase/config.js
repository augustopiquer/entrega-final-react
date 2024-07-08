
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"


const firebaseConfig = {
  apiKey: "AIzaSyCCK-5x2lEnJEjYkzgUBIYl8f5PSd2penw",
  authDomain: "calvi-cafe.firebaseapp.com",
  projectId: "calvi-cafe",
  storageBucket: "calvi-cafe.appspot.com",
  messagingSenderId: "117984852122",
  appId: "1:117984852122:web:f74b07cbc617d14a2d0723"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);