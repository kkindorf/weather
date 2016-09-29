var port = process.env.PORT || 3000;
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var http = require('http');

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
  res.header("Access-Control-Allow-Credentials", true);
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use(bodyParser.json());
app.use(express.static('build'));

app.get('/status', function(req, res){

	res.json({
		message: 'OK!'
	})
})

app.get('/currentWeather', function(req, res){
	console.log(req.body)
	var apiKey = '26e15f4e93a0b55a337858553d29b7aa';
	var currentURL = 'http://api.openweathermap.org/data/2.5/weather?';
	var url = currentURL + apiKey;
	http.get(url, function(resp){
       resp.pipe(res);
   })
});



app.get('/')
app.listen(port, function(){
	console.log('app listening on port '+port)
})
