// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: 'AIzaSyCKSiEjLfSN22xLg1Vs0mWSCzzFqFd7aIQ',
    authDomain: 'react-test-app-1-b9e54.firebaseapp.com',
    projectId: 'react-test-app-1-b9e54',
    storageBucket: 'react-test-app-1-b9e54.firebasestorage.app',
    messagingSenderId: '386174503948',
    appId: '1:386174503948:web:d2559af6b6d5182f803229',
    measurementId: 'G-LDGC9QX1TG',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
