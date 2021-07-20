import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyAPz1wFL8vtUb_oa_MojjxHoljW5e1jQps",
  authDomain: "react-trello-a4222.firebaseapp.com",
  projectId: "react-trello-a4222",
  storageBucket: "react-trello-a4222.appspot.com",
  messagingSenderId: "622910802791",
  appId: "1:622910802791:web:ac2c5f45ee81e474c63dc2"
}

firebase.initializeApp(config)

const db = firebase.firestore();
const firebaseAuth = firebase.auth()
const boardsRef = db.collection('boards')
const listsRef = db.collection('lists')
const cardsRef = db.collection('cards')

export { boardsRef, listsRef, cardsRef, firebaseAuth }
