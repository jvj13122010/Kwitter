const firebaseConfig = {
      apiKey: "AIzaSyClz5_6ha-ByDN_0dJl2YbrHz4kCfr6APk",
      authDomain: "newagent-sgje.firebaseapp.com",
      databaseURL: "https://newagent-sgje-default-rtdb.firebaseio.com",
      projectId: "newagent-sgje",
      storageBucket: "newagent-sgje.appspot.com",
      messagingSenderId: "788044818688",
      appId: "1:788044818688:web:015293f4b02c2a186f2be5"
    };
    firebase.initializeApp(firebaseConfig);
    username=localStorage.getItem("username");
    roomname=localStorage.getItem("roomname");
function getData() { firebase.database().ref("/"+roomname).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();


function send(){
msg=document.getElementById("msg").value;
firebase.database().ref(roomname).push({
      name:username,
      message:msg,
      like:0
});
document.getElementById("msg").value="";

}
function logout(){
      localStorage.removeItem("username");
      localStorage.removeItem("roomname");
window.location="kwitter.html";

}