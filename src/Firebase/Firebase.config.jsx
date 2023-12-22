
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
    apiKey: "AIzaSyCH0GW74IUOuqJrT3oSNKqQFW4075nqOxs",
    authDomain: "task-management-17a6c.firebaseapp.com",
    projectId: "task-management-17a6c",
    storageBucket: "task-management-17a6c.appspot.com",
    messagingSenderId: "242092217918",
    appId: "1:242092217918:web:a1ba4ce8e50da35f16236f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)