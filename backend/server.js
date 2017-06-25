var express = require('express');
var mailgun=require("mailgun-js");
var path = require('path');
var sha1 = require('sha1');


var MongoClient = require('mongodb').MongoClient
  
// Connection url
var url = 'mongodb://localhost:27017/Examinationdb';



var app = express();

app.use(express.static(path.resolve(__dirname + './../frontend/views')));

app.use(express.static(path.resolve(__dirname + './../frontend')));

console.log(path.resolve(__dirname + './../frontend'),">>>>>")


app.get('/' , function(req,res){
	res.render('index.html'); 
})


console.log(__dirname);


app.post('/SignIn' , function(req,res){

	console.log('>>> data received from front' , req.query);
	req.query.password = sha1(req.query.password);

MongoClient.connect(url , function(err,db){

if(err){
	console.log(err);
}
console.log('connected')

db.collection('SignIn_tb').findOne(req.query , function(err,data){
if(err){
	return res.send('Error');
}

setTimeout(function(){
	res.send('find success');
} , 8000)


})

})

})


app.post('/SignUp' , function(req,res){

	console.log('>>> data received from front' , req.query);
	req.query.password = sha1(req.query.password);

MongoClient.connect(url , function(err,db){

if(err){
	console.log(err);
}
console.log('connected')

db.collection('SignIn_tb').insertOne(req.query , function(err,data){
if(err){
	return res.send('Error');
}
res.send('created');


})

})

})


app.post('/Forget', function(req,res) {

console.log(req.query);


var api_key = 'key-d69292e57ddb2ec987f93c88e8642c22';
var domain = 'sandbox32ce0a8f8f924992a9d56caa030d41b9.mailgun.org';
var mailgun = require('mailgun-js')({apiKey: api_key, domain: domain});
 
var data = {
  from: 'Mailgun ExaminationSystem <postmaster@sandbox32ce0a8f8f924992a9d56caa030d41b9.mailgun.org>',
  to:req.query.mail,
  subject: 'Hello its working',
  html :'<a href="http://127.0.0.1:7000/setpass.html">Click here to set your new password</a>'
};
 
mailgun.messages().send(data, function (error, body) {
  console.log(body);
  if(!error)
  	res.send('Mail sent');
  else
  	res.send('Mail Not sent');
});

})

app.listen(7000,function(){
	console.log('server started');
});


