// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBjrd5ipO5YJFPLB3TPrwBT1Nt1LCIa9o4",
  authDomain: "chat-app-9dec8.firebaseapp.com",
  projectId: "chat-app-9dec8",
  storageBucket: "chat-app-9dec8.appspot.com",
  messagingSenderId: "734016664912",
  appId: "1:734016664912:web:03ae4ed86660639715e855",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getFirestore();
export const storage = getStorage();
