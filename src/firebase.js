import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBX2hdFqHlAQrjvVak-h_mdBVkqVz6Cgwo",
  authDomain: "dashboard-29d67.firebaseapp.com",
  projectId: "dashboard-29d67",
  storageBucket: "dashboard-29d67.appspot.com",
  messagingSenderId: "834676818219",
  appId: "1:834676818219:web:ea78e85a5b69ee3b77056e",
  measurementId: "G-R9WTF5DN2E",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();


export { auth, provider };
