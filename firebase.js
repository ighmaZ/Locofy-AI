import { initializeApp } from "firebase/app";
import "firebase/auth";
import { GoogleAuthProvider, signInWithPopup, getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyD_Qb9-Ofe4r7gQp-y0FWPcbILjRM81bkk",
  authDomain: "netflix-clone-25a3b.firebaseapp.com",
  projectId: "netflix-clone-25a3b",
  storageBucket: "netflix-clone-25a3b.appspot.com",
  messagingSenderId: "1008181798860",
  appId: "1:1008181798860:web:496b453dad31fbb73f5f69",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();
const auth = getAuth();

export const signInWithGoogle = async () => {
  try {
    return signInWithPopup(auth, googleProvider);
  } catch (e) {
    console.error("error", error);
  }
};
