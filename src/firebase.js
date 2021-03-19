import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDOxeNHan6BNO5gPf2ga5_ODOWFQHuEb5Q",
    authDomain: "clone-c66d0.firebaseapp.com",
    projectId: "clone-c66d0",
    storageBucket: "clone-c66d0.appspot.com",
    messagingSenderId: "23974951933",
    appId: "1:23974951933:web:4186cf26bc3b3642b13794",
    measurementId: "G-KLG7RS9C3M"
})


const auth = firebase.auth();

export {auth};