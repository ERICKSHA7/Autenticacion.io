import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey:"AIzaSyA-LfC5z9OQHYUtnFPj1gup8gx3mu45tm4",
    authDomain: "autenticacion-14e21.firebaseapp.com",
    projectId: "autenticacion-14e21",
    storageBucket: "autenticacion-14e21.firebasestorage.app",
    messagingSenderId: "1006272534556",
    appId: "1:1006272534556:web:d09a56164bc340d9a2e7d9"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
