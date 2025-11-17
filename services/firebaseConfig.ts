// services/firebaseConfig.ts
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC0yNy7J-rIF5j2p9NwJqEZz-s2gZCxlI8",
  authDomain: "sprintmobile-35b45.firebaseapp.com",
  projectId: "sprintmobile-35b45",
  storageBucket: "sprintmobile-35b45.firebasestorage.app",
  messagingSenderId: "796712078632",
  appId: "1:796712078632:web:95e0bdfb4d1a30c896541d"
};

const app = initializeApp(firebaseConfig);

// autenticação
export const auth = getAuth(app);

// banco de dados firestore
export const db = getFirestore(app);
