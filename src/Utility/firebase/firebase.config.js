// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration


console.log('byPass data :',
    import.meta.env.PASS_DATA)

const firebaseConfig = {
    apiKey: "AIzaSyCAkqFIIABZeQQe7QANsODYen0BZMN5yGE",
    authDomain: "dragon-news-9528d.firebaseapp.com",
    projectId: "dragon-news-9528d",
    storageBucket: "dragon-news-9528d.appspot.com",
    messagingSenderId: "35738390188",
    appId: "1:35738390188:web:92e41ec56e429f72389909"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export default auth;