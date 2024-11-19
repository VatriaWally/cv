import { getFirestore, doc, getDoc } from 'firebase/firestore';
import { initializeApp } from 'firebase/app';

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
const db = getFirestore(app);

/**
 * Fetches the Base64 string of an image from Firestore.
 *
 * @param {string} collectionName - The name of the Firestore collection.
 * @param {string} docId - The document ID of the image.
 * @returns {Promise<string | null>} - The Base64 string of the image, or null if not found.
 */
const fetchImageBase64 = async (collectionName, docId) => {
  try {
    const docRef = doc(db, collectionName, docId);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      const { imageBase64 } = docSnap.data();
      return imageBase64; // Return the Base64 string
    } else {
      console.error('No such document!');
      return null;
    }
  } catch (error) {
    console.error('Error fetching image:', error);
    return null;
  }
};

export default fetchImageBase64;
