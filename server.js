var port = process.env.PORT || 3000;
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var http = require('http');
var lat;
var lon;
var apiKey = '26e15f4e93a0b55a337858553d29b7aa';
app.use(bodyParser.json());
app.use(express.static('build'));

app.get('/status', function(req, res){
	res.json({
		message: 'OK!'
	})
});


app.get('/hourlyWeather', function(req, res){

	var url = 'http://api.openweathermap.org/data/2.5/forecast?lat=' + lat + '&lon=' + lon + '&units=imperial&APPID=' + apiKey;
	http.get(url, function(resp){
		resp.pipe(res)
	})
});

app.get('/currentWeather/:lat/:lon', function(req, res){
	lat = req.params.lat
	lon = req.params.lon
	var currentURL = 'http://api.openweathermap.org/data/2.5/weather?lat='+lat+'&lon='+lon+'&units=imperial&APPID='+apiKey;
	var url = currentURL;
	http.get(url, function(resp){
       resp.pipe(res);
   })
});

app.get('/fiveDay', function(req, res){
	var url = 'http://api.openweathermap.org/data/2.5/forecast/daily?lat=' + lat + '&lon=' + lon + '&mode=json&units=imperial&cnt=5&APPID=' + apiKey;
	http.get(url, function(resp){
		resp.pipe(res)
	})
});

app.listen(port, function(){
	console.log('app listening on port '+port)
})
