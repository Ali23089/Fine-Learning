// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY || "AIzaSyCuuNxchYgOGmfDt_o74ESkPYhvsZivwbM",
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN || "fine-learning.firebaseapp.com",
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID || "fine-learning",
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET || "fine-learning.firebasestorage.app",
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID || "22348243811",
  appId: import.meta.env.VITE_FIREBASE_APP_ID || "1:22348243811:web:25bf37d7f7a3b4d2e5a956",
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID || "G-4YGC4CM0JZ"
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