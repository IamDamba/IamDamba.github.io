import firebase from 'firebase';

const firebaseConfig = firebase.initializeApp({
    apiKey: "AIzaSyAEr57CLKpKmx3ergkpitMmlp2ySm7jj10",
    authDomain: "portfolio-ws-597f0.firebaseapp.com",
    databaseURL: "https://portfolio-ws-597f0.firebaseio.com",
    projectId: "portfolio-ws-597f0",
    storageBucket: "portfolio-ws-597f0.appspot.com",
    messagingSenderId: "633879179190",
    appId: "1:633879179190:web:867080e039dc8291899b17",
    measurementId: "G-8XCC4RM66S"
});

const db = firebase.database();

export { db };
