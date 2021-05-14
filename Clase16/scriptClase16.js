   // Your web app's Firebase configuration
   var firebaseConfig = {
    apiKey: "AIzaSyD3XC1WdMGfn12u3ReXTMk3T4FpqMjmOvM",
    authDomain: "sistemasgeo-6c2cc.firebaseapp.com",
    projectId: "sistemasgeo-6c2cc",
    storageBucket: "sistemasgeo-6c2cc.appspot.com",
    messagingSenderId: "756718335316",
    appId: "1:756718335316:web:4e20af2a8884923ee884c1"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  
  const auth = firebase.auth();

  const db = firebase.firestore();