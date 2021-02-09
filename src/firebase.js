// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase';

const firebaseConfig = {
    apiKey: 'AIzaSyDwNSEHx4FhhiQsTx_wTAMTC_L0f4BbPLg',
    authDomain: 'reels-v0.firebaseapp.com',
    projectId: 'reels-v0',
    storageBucket: 'reels-v0.appspot.com',
    messagingSenderId: '1030610485715',
    appId: '1:1030610485715:web:6bcf86a92ac43d784c2f26',
    measurementId: 'G-FGKXPRNQL8',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
export default db;
