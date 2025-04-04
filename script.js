  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/11.3.1/firebase-app.js";
  import { getDatabase, ref , set } from "https://www.gstatic.com/firebasejs/11.3.1/firebase-database.js"
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyDt6OItzUF0TXKygTGuDo9yER3C2ue_Qvo",
    authDomain: "web-app-7cd19.firebaseapp.com",
    projectId: "web-app-7cd19",
    storageBucket: "web-app-7cd19.firebasestorage.app",
    messagingSenderId: "114458486905",
    appId: "1:114458486905:web:ae37f24178ad679eb9cca8",
    measurementId: "G-7QL4CECQQ8"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const db = getDatabase(app)
  document.getElementById("submit").addEventListener("click" , function (event)  {
    event.preventDefault()
    set(ref(db , 'student data/' + document.getElementById("nameinput").value),
    {
         name : document.getElementById("nameinput").value,
        email : document.getElementById("emailinput").value,
        Number : document.getElementById("phoneinput").value,
        address : document.getElementById("addressinput").value,
        city : document.getElementById("cityinput").value,
        message : document.getElementById("messageinput").value,
    })
    alert("data saved successfully")
  })

   
 