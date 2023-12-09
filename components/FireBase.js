import { initializeApp } from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBS5J2qTIRKygrJqVzZAU6rQCZfsRi2tHQ",
  authDomain: "lojaflores-bb3ea.firebaseapp.com",
  projectId: "lojaflores-bb3ea",
  storageBucket: "lojaflores-bb3ea.appspot.com",
  messagingSenderId: "733432594030",
  appId: "1:733432594030:web:2304d85a149312a61ab07f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;