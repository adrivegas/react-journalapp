import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyCnpbSXYSWN3LNg5qkrwGgU7_Ohi2KqUx8",
    authDomain: "react-app-cursos-6bcf1.firebaseapp.com",
    projectId: "react-app-cursos-6bcf1",
    storageBucket: "react-app-cursos-6bcf1.appspot.com",
    messagingSenderId: "455077785405",
    appId: "1:455077785405:web:6c98749215be05095e5f54"
};
  
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();


export {
    db,
    googleAuthProvider,
    firebase
}