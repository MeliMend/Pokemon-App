// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider } from "firebase/auth";
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAWG3MAM2KKWxpiw6OIBl7dijt4A8V60SA",
  authDomain: "pokemonapp-a0b5a.firebaseapp.com",
  projectId: "pokemonapp-a0b5a",
  storageBucket: "pokemonapp-a0b5a.appspot.com",
  messagingSenderId: "305267946134",
  appId: "1:305267946134:web:309f0a963639dbeb0188b7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const google= new GoogleAuthProvider()
export const pokemonComments = getFirestore()