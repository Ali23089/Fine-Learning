// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCuuNxchYgOGmfDt_o74ESkPYhvsZivwbM",
  authDomain: "fine-learning.firebaseapp.com",
  projectId: "fine-learning",
  storageBucket: "fine-learning.firebasestorage.app",
  messagingSenderId: "22348243811",
  appId: "1:22348243811:web:25bf37d7f7a3b4d2e5a956",
  measurementId: "G-4YGC4CM0JZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Analytics (only in production)
let analytics;
if (typeof window !== 'undefined') {
  analytics = getAnalytics(app);
}

// Initialize Firestore
export const db = getFirestore(app);

export default app;