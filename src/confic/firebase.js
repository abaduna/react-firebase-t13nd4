// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
import {getStorage} from "firebase/storage"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCFx6X9SRE33nfSKErkjOggSQgu2D_U_XU",
  authDomain: "tinedavirtualv3.firebaseapp.com",
  projectId: "tinedavirtualv3",
  storageBucket: "tinedavirtualv3.appspot.com",
  messagingSenderId: "41800959040",
  appId: "1:41800959040:web:8c95efe5b3dc0d53418ba5",
  measurementId: "G-LZF1DGGXB7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export const storage = getStorage(app)
