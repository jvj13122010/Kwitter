
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
document.getElementById("username").innerHTML="Welcome "+ username +"! Enjoy your time!";

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
console.log("roomname "+Room_names);
row="<div class='room_name' id="+ Room_names + " onclick='redirectToRoomname(this.id)' >#"+ Room_names+"</div><hr>";
document.getElementById("output").innerHTML+=row;
});});}
getData();

function addRoom() {
      roomname=document.getElementById("room_name").value;
      firebase.database().ref("/").child(roomname).update({
            purpose:"Adding Room Name"
      });
      localStorage.setItem("roomname",roomname);
      window.location="kwitter_page.html";

}



function redirectToRoomname(Rname) {
console.log(Rname);
localStorage.setItem("roomname", Rname);
window.location="kwitter_page.html"
}


function logout(){
      localStorage.removeItem("username");
      localStorage.removeItem("roomname");
window.location="kwitter.html";

}