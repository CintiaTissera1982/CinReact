import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyC8g5cFfO-gVtXPf9OzCOgu7Ojm0LtA39w",
  authDomain: "ommiapp-9cf41.firebaseapp.com",
  projectId: "ommiapp-9cf41",
  storageBucket: "ommiapp-9cf41.appspot.com",
  messagingSenderId: "108828514174",
  appId: "1:108828514174:web:20e643843a957c41fcc52f"
};


const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)