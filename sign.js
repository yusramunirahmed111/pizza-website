 
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/11.3.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.3.0/firebase-analytics.js";
  import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.3.0/firebase-auth.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyAiSKDOO4IGffoImCc7F44ub0qwKPJpklg",
    authDomain: "authentication-93c3d.firebaseapp.com",
    projectId: "authentication-93c3d",
    storageBucket: "authentication-93c3d.firebasestorage.app",
    messagingSenderId: "222872167533",
    appId: "1:222872167533:web:c8ad038a33adce5f2a0b64",
    measurementId: "G-HJQSRR7L0D"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  const submit = document.getElementById("submit")
  submit.addEventListener("click" , function (event){
    event.preventDefault()
    const email = document.getElementById("email").value
    const password = document.getElementById("password").value
const auth = getAuth();
createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    alert("sign up sucessfully")
    window.location.href="login.html"
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert("error message")
    // ..
  });
  })
 