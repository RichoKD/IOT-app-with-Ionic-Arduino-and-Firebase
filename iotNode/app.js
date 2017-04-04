var firebase = require('firebase');
var j5 = require('johnny-five');


var arduino = new j5.Board();
var led,relay;
var go = false;
var db;
var ref2;
var snap;

// Initialize Firebase
// TODO: Replace with your project's customized code snippet
var config = {
    apiKey: "AIzaSyC4LeAobec0Dl2VyVpjovGaq5x3b4C2iJA",
    authDomain: "auto-30ed0.firebaseapp.com",
    databaseURL: "https://auto-30ed0.firebaseio.com",
    storageBucket: "auto-30ed0.appspot.com",
    messagingSenderId: "514424789161"
};

// Initialize Arduino
arduino.on("ready", function(){
	 led = new j5.Led(13);
	 relay = new j5.Pin(7);	
	 console.log("Board Ready");
	 
	 go = true;
	 toggle();
 })
  
// Toggle Light switch  
function toggle(){
	if(snap === true ){
			relay.low();
			led.on();
			console.log('On');
		}else{
			relay.high();
			led.off();
			console.log('Off');
		}
} 

// Initialize Firebase
	firebase.initializeApp(config);
	 // The app only has access as defined in the Security Rules
	db = firebase.database();
	 
	ref2 = db.ref("switch");

// This gets triggered when the fire base data changes
ref2.on("value", function(snapshot){
	snap = snapshot.val().state;
	  if(go === true){
		toggle();
	  }
		
		
});