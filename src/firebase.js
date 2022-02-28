import { initializeApp } from "firebase/app";
import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  signOut,
} from "firebase/auth";
import {
  getFirestore,
  query,
  getDocs,
  collection,
  where,
  addDoc,
  setDoc,
  doc
} from "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyAvn1YB-cFk1MYc7HNvFv82lRKsNnA-m7U",
    authDomain: "mobile-app-b6ebc.firebaseapp.com",
    databaseURL: "https://mobile-app-b6ebc.firebaseio.com",
    projectId: "mobile-app-b6ebc",
    storageBucket: "mobile-app-b6ebc.appspot.com",
    messagingSenderId: "432394255342",
    appId: "1:432394255342:web:db191516f1180537536cff",
    measurementId: "G-XVJRMFQZ0D"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const googleProvider = new GoogleAuthProvider();

const signInWithGoogle = async () => {
  try {
    const res = await signInWithPopup(auth, googleProvider);
    const user = res.user;
    const q = query(collection(db, "users"), where("uid", "==", user.uid));
    const docs = await getDocs(q);
    if (docs.docs.length === 0) {
      await setDoc(doc(collection(db, "users"), user.uid), {
        uid: user.uid,
        name: user.displayName,
        authProvider: "google",
        email: user.email,
      });
    }
  } catch (err) {
    console.error(err);
    let errorMessageFormated = err.code.replace('auth/','').replace(/-/g, " ")
    errorMessageFormated = errorMessageFormated.charAt(0).toUpperCase() + errorMessageFormated.slice(1) + "."
    // alert(errorMessageFormated);
  }
};

const registerWithEmailAndPassword = async (name, email, password, extra={}) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const user = res.user;
    await setDoc(doc(collection(db, "users"), user.uid), {
      uid: user.uid,
      name,
      authProvider: "local",
      email,
      ...extra
    }).catch(err=>{
        return err
    })
  } catch (err) {
    return err
  }
};

const sendPasswordReset = (email) => {
    return sendPasswordResetEmail(auth, email);
};

const logout = () => {
  signOut(auth);
};

export {
  auth,
  db,
  signInWithGoogle,
  registerWithEmailAndPassword,
  sendPasswordReset,
  logout,
};