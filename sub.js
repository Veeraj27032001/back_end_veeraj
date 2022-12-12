var mqtt=require("mqtt");
const redis = require('redis');
const radisClient = redis.createClient({
    Host: "apn1-brave-adder-33713.upstash.io",
    Port: "33713",
    Password: "69b6358deaf14b44a0f44fbdb31adf8b"
});
radisClient.connect();


options={    
    Host:"2614451-internet-facing-466cb06d39e23407.elb.ap-south-1.amazonaws.com",
    Port:"1883",
    username:"backend_task",
    password:"G6B2HEfDmfvDA9y"};
var client=mqtt.connect(options);
var dataList=[];

client.on('connect',function()
{
    //subscribe to a serice i.e add/veeraj
client.subscribe("add/veeraj");
    console.log("subcribed sucessfully");
});

//on error 
client.on("error" ,function(er){
    console.log(er)
})
//this is called when publisher publishes data
client.on('message',async function(topic,message)
{
console.log(message.toString());
dataList.push(message.toString());

});
