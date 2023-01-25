import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBvmYs9ioQwmR6bl6K9KJFTPIhwYXtlLZs",
  authDomain: "tiktok-clone-54647.firebaseapp.com",
  projectId: "tiktok-clone-54647",
  storageBucket: "tiktok-clone-54647.appspot.com",
  messagingSenderId: "523990439154",
  appId: "1:523990439154:web:d85d135a6782cd97e5ec6b",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
