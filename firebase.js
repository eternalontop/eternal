import { initializeApp } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-app.js";

const firebaseConfig = {
  apiKey: "AIzaSyDRUlpd-_2vKA2tt_naUfvVhBOPD2oOzg8",
  authDomain: "eternal-gg.firebaseapp.com",
  projectId: "eternal-gg",
  storageBucket: "eternal-gg.firebasestorage.app",
  messagingSenderId: "869844638780",
  appId: "1:869844638780:web:d9eb05c79d563ba172b739"
};

const app = initializeApp(firebaseConfig);
console.log("Firebase app initialized:", app);