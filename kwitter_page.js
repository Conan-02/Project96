  // Your web app's Firebase configuration
  var firebaseConfig = {
      apiKey: "AIzaSyC3X2QsqzBpG61_YFFvTnJ5V1AQDKucXE0",
      authDomain: "kwitter-f6530.firebaseapp.com",
      databaseURL: "https://kwitter-f6530-default-rtdb.firebaseio.com",
      projectId: "kwitter-f6530",
      storageBucket: "kwitter-f6530.appspot.com",
      messagingSenderId: "523270584276",
      appId: "1:523270584276:web:1304cbb55d88ccb9a44841"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

roomName = localStorage.getItem("clickedRoom");
username = localStorage.getItem("username")

function send() {
      msg = document.getElementById("chatI").value;
      localStorage.setItem("msg", msg);

      firebase.database().ref(roomName).push({
            name: username,
            message: msg,
            likes: 0
      });
      document.getElementById("chatI").value = "";
}

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();
