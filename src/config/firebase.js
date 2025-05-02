import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAOcFNTqs336eeyma7Bk-y2vtqZhrYmqR4",
  authDomain: "app-vite-firebase-notes.firebaseapp.com",
  projectId: "app-vite-firebase-notes",
  storageBucket: "app-vite-firebase-notes.firebasestorage.app",
  messagingSenderId: "887353722562",
  appId: "1:887353722562:web:d54b2946fad7beb3685d5b",
  measurementId: "G-SNM8GYNYX2"
};
const app = initializeApp(firebaseConfig);
export default app;