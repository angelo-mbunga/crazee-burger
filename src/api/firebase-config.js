import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBl0ishjmenPVkpxFRzuvSekXifBPfBIPU",
  authDomain: "crazee-burger-561d0.firebaseapp.com",
  projectId: "crazee-burger-561d0",
  storageBucket: "crazee-burger-561d0.appspot.com",
  messagingSenderId: "1075237694508",
  appId: "1:1075237694508:web:7bd9c6e42790ce159bb589"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);