// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import firebase from "firebase/app";
import "firebase/database";
import { getFirestore } from "firebase/firestore";
import {getStorage} from "firebase/storage";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyBHo4PgToFR1LJt5OEZD75IQIVRjuwStLc",
  authDomain: "tech-f1c2a.firebaseapp.com",
  projectId: "tech-f1c2a",
  storageBucket: "tech-f1c2a.appspot.com",
  messagingSenderId: "777062208224",
  appId: "1:777062208224:web:751d6f6919581d3ca83685",
  measurementId: "G-8GS4N57HWC",
};


export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const database = getFirestore(app);
export const storage=getStorage(app);
export const db=getDatabase(app);

