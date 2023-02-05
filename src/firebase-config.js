import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDYt7xIKxjq0kzoJqCV44CJ9bHrjzxkPWE",
  authDomain: "hackathon-2023-85a50.firebaseapp.com",
  projectId: "hackathon-2023-85a50",
  storageBucket: "hackathon-2023-85a50.appspot.com",
  messagingSenderId: "1020130789227",
  appId: "1:1020130789227:web:c7c1d30a0497bd96546e2e"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);