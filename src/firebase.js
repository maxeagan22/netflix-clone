import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth"
import { addDoc, collection, getFireStore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyDYM_MEI5d8koEk1goxmrkk-_VSfjrNk2Y",
  authDomain: "netflix-clone-54f47.firebaseapp.com",
  projectId: "netflix-clone-54f47",
  storageBucket: "netflix-clone-54f47.appspot.com",
  messagingSenderId: "552584810282",
  appId: "1:552584810282:web:48f64cc9af785842e65853"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const db = getFireStore(app)

const signup = async (name, email, password) => {
    try {
        const res = await createUserWithEmailAndPassword(auth,email,password);
        const user = res.user;
        await addDoc(collection(db, "user"), {
            uid: user.uid,
            name,
            authProvider: "local",
            email,
        });
    } catch (error) {
        console.log(error);
        alert(error);
    }
}