var express = require('express');
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


app.post('/SignUps' , function(req,res){

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

app.listen(7000,function(){


	console.log('server started');
});


