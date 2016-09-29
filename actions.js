//style={image.url ? display:block: display:none;}
var fetch = require('isomorphic-fetch');

var SHOW_CURRENT_WEATHER = 'SHOW_CURRENT_WEATHER';
var showCurrentWeather = function(city, temp, description, id) {
    return {
        type: SHOW_CURRENT_WEATHER,
        city: city,
        temp: temp,
        description: description,
        id: id
    }

};
var SHOW_CURRENT_WEATHER_ERROR = 'SHOW_CURRENT_WEATHER_ERROR';
var showCurrentWeatherError = function(city, temp, description, id, error) {
    return {
        type: SHOW_CURRENT_WEATHER_ERROR,
        city: city,
        temp: temp,
        description: description,
        id: id,
        error: error
    }
};


var SHOW_HOURLY_WEATHER = 'SHOW_HOURLY_WEATHER';
var showHourlyWeather = function(chartData) {
    return {
        type: SHOW_HOURLY_WEATHER,
        chartData: chartData
        
        

    }
};

var SHOW_HOURLY_WEATHER_ERROR = 'SHOW_HOURLY_WEATHER_ERROR';
var showHourlyWeatherError = function(chartData, error) {
    return {
        type: SHOW_HOURLY_WEATHER_ERROR,
        chartData: chartData,
        error: error
    }
};

var SHOW_FIVE_DAY_WEATHER = 'SHOW_FIVE_DAY_WEATHER';
var showFiveDayWeather = function(fiveDayData) {
    return {
        type: SHOW_FIVE_DAY_WEATHER,
        fiveDayData: fiveDayData

    }
};
var SHOW_FIVE_DAY_WEATHER_ERROR = 'SHOW_FIVE_DAY_WEATHER_ERROR';
var showFiveDayWeatherError = function(fiveDayData, error) {
    return {
        type: SHOW_FIVE_DAY_WEATHER_ERROR,
        fiveDayData: fiveDayData,
        error: error
    }
};

var rootUrl = 'http://localhost:3000';
var apiKey = '26e15f4e93a0b55a337858553d29b7aa';
var getCurrentWeather = function(city, temp, description, id) {
    return function(dispatch){
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(locationSuccess, locationError);
        }
        else{
            showError("Your browser does not support Geolocation!");
        }
        function locationSuccess(position) {
            var lat = position.coords.latitude;
            var lon = position.coords.longitude;
            var url = rootUrl+'/currentWeather?lat='+lat+'&lon='+lon;
                    return fetch(url)
                .then(function(response) {
                    if (response.state < 200 || response.status >= 300) {
                        var error = new Error(response.statusText)
                        error.response = response
                        throw error;
                    }
                    return response.json()
                }).then(function(currentWeatherData) {
                    var city = currentWeatherData.name;
                    var temp = currentWeatherData.main.temp;
                    var description = currentWeatherData.weather['0'].description;
                    var id = currentWeatherData.weather['0'].id;
                    return dispatch(showCurrentWeather(city, temp, description, id))
                }).catch(function(error) {
                    return dispatch(showCurrentWeatherError(city, temp, description, id, error))
                })
            
        }
        function locationError(error){
            switch(error.code) {
                case error.TIMEOUT:
                    showError("A timeout occured! Please try again!");
                    break;
                case error.POSITION_UNAVAILABLE:
                    showError('We can\'t detect your location. Sorry!');
                    break;
                case error.PERMISSION_DENIED:
                    showError('Please allow geolocation access for this to work.');
                    break;
                case error.UNKNOWN_ERROR:
                    showError('An unknown error occured!');
                    break;
            }

        }
        function showError(msg){
            alert(msg);
        }
    }
}

            

var getHourlyWeather = function(data) {
    return function(dispatch){
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(locationSuccess, locationError);
        }
        else{
            showError("Your browser does not support Geolocation!");
        }

        function locationSuccess(position) {
            var lat = position.coords.latitude;
            var lon = position.coords.longitude;
                    var apiKey = '26e15f4e93a0b55a337858553d29b7aa';
                   var foreCastURL = 'https://crossorigin.me/http://api.openweathermap.org/data/2.5/forecast?lat=' + lat + '&lon=' + lon + '&units=imperial&APPID=' + apiKey;
                    console.log(foreCastURL)
                    return fetch(foreCastURL)
                .then(function(response) {
                    console.log(response) //response
                    if (response.state < 200 || response.status >= 300) {
                        var error = new Error(response.statusText)
                        error.response = response
                        throw error;
                    }
                    return response.json()
                }).then(function(data) {
                    console.log(data)

                    return dispatch(showHourlyWeather(data))
                }).catch(function(error){
                    return dispatch(showHourlyWeatherError(data, error))
                })
        }
        function locationError(error){
            switch(error.code) {
                case error.TIMEOUT:
                    showError("A timeout occured! Please try again!");
                    break;
                case error.POSITION_UNAVAILABLE:
                    showError('We can\'t detect your location. Sorry!');
                    break;
                case error.PERMISSION_DENIED:
                    showError('Please allow geolocation access for this to work.');
                    break;
                case error.UNKNOWN_ERROR:
                    showError('An unknown error occured!');
                    break;
            }

        }

        function showError(msg){
            alert(msg);
        }
   }
}

var getFiveDayWeather = function(data) {
    return function(dispatch){
         if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(locationSuccess, locationError);
        }
        else{
            showError("Your browser does not support Geolocation!");
        }
        function locationSuccess(position) {
            var lat = position.coords.latitude;
            var lon = position.coords.longitude;
                    var apiKey = '26e15f4e93a0b55a337858553d29b7aa';
                   var fiveDayURL = 'https://crossorigin.me/http://api.openweathermap.org/data/2.5/forecast/daily?lat=' + lat + '&lon=' + lon + '&mode=json&units=imperial&cnt=5&APPID=' + apiKey;
                    return fetch(fiveDayURL)
                .then(function(response) {
                    console.log(response) //response
                    if (response.state < 200 || response.status >= 300) {
                        var error = new Error(response.statusText)
                        error.response = response
                        throw error;
                    }
                    return response.json()
                }).then(function(data) {
                    console.log(data)
                    
                    

                    return dispatch(showFiveDayWeather(data))
                }).catch(function(error){
                    return dispatch(showFiveDayWeatherError(data, error))
                })
        }
    
        function locationError(error){
            switch(error.code) {
                case error.TIMEOUT:
                    showError("A timeout occured! Please try again!");
                    break;
                case error.POSITION_UNAVAILABLE:
                    showError('We can\'t detect your location. Sorry!');
                    break;
                case error.PERMISSION_DENIED:
                    showError('Please allow geolocation access for this to work.');
                    break;
                case error.UNKNOWN_ERROR:
                    showError('An unknown error occured!');
                    break;
            }

        }

        function showError(msg){
            alert(msg);
        }

   }
}

    




exports.getCurrentWeather = getCurrentWeather;
exports.getHourlyWeather = getHourlyWeather;
exports.getFiveDayWeather = getFiveDayWeather;

exports.SHOW_CURRENT_WEATHER_ERROR = SHOW_CURRENT_WEATHER_ERROR;
exports.showCurrentWeatherError = showCurrentWeatherError;
exports.SHOW_CURRENT_WEATHER = SHOW_CURRENT_WEATHER;
exports.showCurrentWeather = showCurrentWeather;

exports.SHOW_HOURLY_WEATHER = SHOW_HOURLY_WEATHER;
exports.showHourlyWeather = showHourlyWeather;
exports.SHOW_CURRENT_WEATHER_ERROR = SHOW_HOURLY_WEATHER_ERROR;
exports.showHourlyWeatherError = showHourlyWeatherError;

exports.SHOW_FIVE_DAY_WEATHER = SHOW_FIVE_DAY_WEATHER;
exports.showFiveDayWeather = showFiveDayWeather;
exports.SHOW_FIVE_DAY_WEATHER_ERROR = SHOW_FIVE_DAY_WEATHER_ERROR;
exports.showFiveDayWeatherError = showFiveDayWeatherError;
