import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCjp5_X_ms4b5ndU0AUyLtF3v_ymxe3oFI",
  authDomain: "nextfire2-8c0af.firebaseapp.com",
  projectId: "nextfire2-8c0af",
  storageBucket: "nextfire2-8c0af.appspot.com",
  messagingSenderId: "390309881654",
  appId: "1:390309881654:web:630b18325e18bb9d3bb597",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
