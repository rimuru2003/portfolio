import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC34dWEAQ9K4-_siurtbYlA97YvMICVa9o",
  authDomain: "portfolio-e8312.firebaseapp.com",
  projectId: "portfolio-e8312",
  storageBucket: "portfolio-e8312.appspot.com",
  messagingSenderId: "562785410485",
  appId: "1:562785410485:web:6b418deb289651b9accdfc",
  measurementId: "G-N9RF65HK2K"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
