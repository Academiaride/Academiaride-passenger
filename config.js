import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { getAnalytics } from "firebase/analytics";

export const firebaseConfig={
    apiKey: "AIzaSyDiy0VUH7O9uWp-t436Z7UdIMJcmF0pNN8",
    authDomain: "academia-ride-2023-12990.firebaseapp.com",
    projectId: "academia-ride-2023-12990",
    storageBucket: "academia-ride-2023-12990.appspot.com",
    messagingSenderId: "716820502890",
    appId: "1:716820502890:web:6ea69472d833eaef826d13",
    measurementId: "G-Q76SXZX3Y2"
};

if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
}

