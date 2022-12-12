//install mqtt module npm install mqtt
const mqtt=require("mqtt");
//connection info
options={    
    Host:"2614451-internet-facing-466cb06d39e23407.elb.ap-south-1.amazonaws.com",
    Port:"1883",
    username:"backend_task",
    password:"G6B2HEfDmfvDA9y"};
//connect to server
var client=mqtt.connect(options);
// client functions
client.on("connect",  function( ){
	console.log("connected")
	setInterval(function(){
		var random=Math.random()*50;
//publish data 
client.publish("add/veeraj","value: "+random);
console.log(random);	
},3000);
});
