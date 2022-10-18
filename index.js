// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDPLAj1L8sOPD4eKGxGCl5ZUXs1X7UduQk",
  authDomain: "tkuaiic-discord-bot.firebaseapp.com",
  projectId: "tkuaiic-discord-bot",
  storageBucket: "tkuaiic-discord-bot.appspot.com",
  messagingSenderId: "59814214406",
  appId: "1:59814214406:web:4542c2eeb8c4aa87953c87",
  measurementId: "G-FYBXZ70NNS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);