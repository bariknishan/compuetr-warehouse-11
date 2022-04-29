 
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyChovPiUr0cp4d3rFE7r_c3JOraah2qCsM",
  authDomain: "computer-warehouse-a5ede.firebaseapp.com",
  projectId: "computer-warehouse-a5ede",
  storageBucket: "computer-warehouse-a5ede.appspot.com",
  messagingSenderId: "821656802377",
  appId: "1:821656802377:web:a22c24c65b124566065b98"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth= getAuth(app)
export default auth ;