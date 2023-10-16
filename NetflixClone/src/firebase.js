import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
const firebaseConfig = {
  apiKey: "AIzaSyCeNaAOrZ9WB6b_GRM0838XcMugVoqQ6ZU",
  authDomain: "netflixclone-1f47c.firebaseapp.com",
  projectId: "netflixclone-1f47c",
  storageBucket: "netflixclone-1f47c.appspot.com",
  messagingSenderId: "720373360986",
  appId: "1:720373360986:web:c46081906a5dc4969c6b63",
  measurementId: "G-CXGPP7MFX9"
};
const app = initializeApp(firebaseConfig);
const Auth =getAuth(app);
export {Auth}