// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBuJSjlteCSQB3rMNjTKPE7Iod3QLHOI5w",
  authDomain: "challe-de-jeux.firebaseapp.com",
  projectId: "challe-de-jeux",
  storageBucket: "challe-de-jeux.appspot.com",
  messagingSenderId: "566458576657",
  appId: "1:566458576657:web:5a9cae7357351e7161a6b0",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
