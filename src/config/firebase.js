// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import Constants from 'expo-constants';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: Constants.extra.apiKey,
    authDomain: Constants.extra.authDomain,
    projectId: Constants.extra.projectId,
    storageBucket: Constants.extra.storageBucket,
    messagingSenderId: Constants.extra.messagingSenderId,
    appId: Constants.extra.appId,
    measurementId: Constants.extra.measurementId 
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getFirestore();
