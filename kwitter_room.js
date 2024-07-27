// Your web app's Firebase configuration
const firebaseConfig = {
      apiKey: "AIzaSyD9579qwXhwn-D-qqeEDj4Y5kJuIqT_1hg",
      authDomain: "kwitter-60364.firebaseapp.com",
      projectId: "kwitter-60364",
      storageBucket: "kwitter-60364.appspot.com",
      messagingSenderId: "208496163401",
      appId: "1:208496163401:web:a94e063d7d4d0089515d98"
    };
    
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    
//ADD YOUR FIREBASE LINKS HERE

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
