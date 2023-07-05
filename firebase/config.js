import { getApps, initializeApp } from "firebase/app";
import {
  FacebookAuthProvider,
  getAuth,
  GoogleAuthProvider,
} from "firebase/auth"; //importing authentication service here
import { getFirestore } from "firebase/firestore";
import { getStorage } from 'firebase/storage';
const firebaseConfig = {
  apiKey: "AIzaSyA-ATY46IwPrN6qRkPsMTyWc_ijlFqCIJs",
  authDomain: "d-yemen.firebaseapp.com",
  projectId: "d-yemen",
  storageBucket: "d-yemen.appspot.com",
  messagingSenderId: "806704499379",
  appId: "1:806704499379:web:6e91f3cc69cfc9a13e7ec6",
  measurementId: "G-2QMG6L30ZF",
};

// Initialize Firebase
const app =
  getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];
export const auth = getAuth(app);
export const db = getFirestore(app);
export const googleProvider = new GoogleAuthProvider(); //Google method
export const facebookProvider = new FacebookAuthProvider(); //faceBook method
export const storage = getStorage(app);
