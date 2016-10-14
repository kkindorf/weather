var actions = require('./actions');

var initialWeatherState = {
            currentCityName: '',
	    currentTemp: '',
	    currentDescription: '',
	    id: '',
	    threeHourForeCast: {},
	    threeHourOptions: {},
	    fiveDayForeCast: [],
	    fiveDayOption: {},
	    loading: true,
	    loadFive: true,
        loadHour: true

    }
    var weatherReducer = function(state, action){
        state = state || initialWeatherState;
        if(action.type === actions.SHOW_CURRENT_WEATHER){
            var updatedCurrentWeather = Object.assign({}, state, {
                currentCityName: action.city,
                currentTemp: Math.round(action.temp) +" F ",
                currentDescription: action.description,
                id: action.id,
				loading: false
            });

            return updatedCurrentWeather;
        }
        if(action.type === actions.SHOW_CURRENT_WEATHER_ERROR){
            throw new Error('The current weather conditions could not be retrieved!');
        }
        if(action.type === actions.SHOW_HOURLY_WEATHER){
                var updatedHourlyWeather = Object.assign({}, state, {
                threeHourForeCast:{
                        labels:[setTime(action.chartData.list['0'].dt), setTime(action.chartData.list[1].dt), setTime(action.chartData.list[2].dt), setTime(action.chartData.list[3].dt) ],
                        series:[[action.chartData.list['0'].main.temp_max, action.chartData.list['1'].main.temp_max,  action.chartData.list['2'].main.temp_max, action.chartData.list['3'].main.temp_max ],
                                [action.chartData.list['0'].main.humidity, action.chartData.list['1'].main.humidity,  action.chartData.list['2'].main.humidity, action.chartData.list['3'].main.humidity]
                        ]
                },
                threeHourOptions:{
                    chartPadding: {
                        top: 20,
                        right: 20,
                        bottom: 5,
                        left: 20

                    }

                },
                loadHour: false
            });
            return updatedHourlyWeather;
        }
        if(action.type === actions.SHOW_HOURLY_WEATHER_ERROR){
            throw new Error('The hourly weather forecast could not be retrieved!');
        }
        if(action.type === actions.SHOW_FIVE_DAY_WEATHER){
                var updatedFiveDayWeather = Object.assign({}, state, {fiveDayForeCast: {
                        labels:[setDate(action.fiveDayData.list['0'].dt), setDate(action.fiveDayData.list[1].dt), setDate(action.fiveDayData.list[2].dt), setDate(action.fiveDayData.list[3].dt), setDate(action.fiveDayData.list[4].dt)],
                        series:[[action.fiveDayData.list['0'].temp.max, action.fiveDayData.list[1].temp.max, action.fiveDayData.list[2].temp.max, action.fiveDayData.list[3].temp.max, action.fiveDayData.list[4].temp.max],
                                [action.fiveDayData.list['0'].humidity, action.fiveDayData.list[1].humidity, action.fiveDayData.list[2].humidity, action.fiveDayData.list[3].humidity, action.fiveDayData.list[4].humidity]

                       ]

                    },
                    fiveDayOptions:{
                    chartPadding: {
                        top: 20,
                        right: 20,
                        bottom: 5,
                        left: 20
                    }

                },

                loadFive: false
            })
            return updatedFiveDayWeather;
        }
        if(action.type === actions.SHOW_FIVE_DAY_WEATHER_ERROR){
             throw new Error('The Five Day Weather Forecast could not be retrieved!');
        }
        return state;
    }

    function whichDay(dateString) {
        return ['Sun', 'Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat']
        [new Date(dateString).getDay()];
    }
    function setDate(timestamp) {
        var stringDate = '';
        var date = new Date(timestamp * 1000),
            datevalues = [
                date.getFullYear(),
                date.getMonth()+1,
                date.getDate()

            ];
        stringDate = datevalues[1] + '/' + datevalues[2];
        return stringDate;
    };

    function setTime(timestamp) {
        var stringTime = '';
        var time = new Date(timestamp * 1000),
            timevalue = [
                time.getHours()
            ];
        stringTime = timevalue[0];
        if (stringTime < 12) {
            stringTime = stringTime.toString() + ' AM';
        }
        else {
            stringTime = (stringTime - 12).toString() + ' PM';
        }
        return stringTime;
    }


    exports.weatherReducer = weatherReducer;
