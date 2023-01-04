/* eslint-disable */
import { initializeApp } from "firebase/app";

require("dotenv").config();

const { FIREBASE_API_KEY } = process.env;

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: FIREBASE_API_KEY,
  authDomain: "origins-digital.firebaseapp.com",
  projectId: "origins-digital",
  storageBucket: "origins-digital.appspot.com",
  messagingSenderId: "898956315661",
  appId: "1:898956315661:web:8d467e832ba230ef295944",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
