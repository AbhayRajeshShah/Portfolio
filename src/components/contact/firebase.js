import firebase from "firebase/app"
import "firebase/firestore"



    const firebaseConfig = {
      apiKey: process.env.REACT_APP_FIREBASEAPIKEY,
      authDomain: process.env.REACT_APP_FIREBASEAUTHDOMAIN,
      projectId: process.env.REACT_APP_FIREBASEPROJECTID,
      storageBucket: process.env.REACT_APP_FIREBASESOTRAGEBUCKET,
      messagingSenderId: process.env.REACT_APP_FIREBASESENDERID,
      appId: process.env.REACT_APP_FIREBASEAPPID
    };


const firebaseApps=firebase.initializeApp(firebaseConfig);
const db = firebaseApps.firestore();
export default db;

