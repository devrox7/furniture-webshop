import firebase from 'firebase';
import 'firebase/firestore';

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyA-0WTJFMGtxTmlC-82ghxidaBGfaNj11c",
    authDomain: "furniture-webshop.firebaseapp.com",
    databaseURL: "https://furniture-webshop.firebaseio.com",
    projectId: "furniture-webshop",
    storageBucket: "furniture-webshop.appspot.com",
    messagingSenderId: "301911091711",
    appId: "1:301911091711:web:c90b811537d1fbc55d9fca"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export const db = firebase.firestore();

  // export const dbProducts =  db.collection('Products');
  // export const dbRooms =  db.collection('Room Type');
