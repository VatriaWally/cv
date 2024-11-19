import { initializeApp } from 'firebase/app';
import { getDatabase, ref, set } from 'firebase/database'; // For Realtime Database
// import { getFirestore, doc, setDoc } from "firebase/firestore"; // For Firestore (optional)

const firebaseConfig = {
  apiKey: 'AIzaSyAVzdTJvsbBWThM4m7Zsh4-87DT0VqX1qQ',
  authDomain: 'winnipesik-ae750.firebaseapp.com',
  projectId: 'winnipesik-ae750',
  storageBucket: 'winnipesik-ae750.firebasestorage.app',
  messagingSenderId: '1098041875263',
  appId: '1:1098041875263:web:d2f6057e712861787e118a',
  measurementId: 'G-LNL9HS6W7R'
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Realtime Database
const database = getDatabase(app);

export { database };
