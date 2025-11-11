import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDU24qzd-Y6aE0yYrGAdHFBnGH8cgK1tOg",
  authDomain: "edtech-b4ab9.firebaseapp.com",
  projectId: "edtech-b4ab9",
  storageBucket: "edtech-b4ab9.firebasestorage.app",
  messagingSenderId: "355859122357",
  appId: "1:355859122357:web:3456bf4709fe1a60be16fc",
  measurementId: "G-457VERFMLK"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
