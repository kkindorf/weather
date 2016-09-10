
import expect from 'expect';

import * as actions from '../actions';

describe('main sync actions from app', function(){
	it('should create SHOW_CURRENT_WEATHER action with city, temp, description, icon', function(){
		expect(actions.showCurrentWeather('Framingham', 123, 'very sunny', 'hi!')).toEqual({
            type: 'SHOW_CURRENT_WEATHER',
            city: 'Framingham',
            temp: 123,
            description: 'very sunny',
            id: 'hi!'
        });
	})
	it('should create a SHOW_CURRENT_WEATHER_ERROR action city, temp, description, icon, error', function(){
		expect(actions.showCurrentWeatherError('Framingham', 123, 'very sunny', 'hi!', 'this is an error!')).toEqual({
			type: 'SHOW_CURRENT_WEATHER_ERROR',
            city: 'Framingham',
            temp: 123,
            description: 'very sunny',
            id: 'hi!',
            error: 'this is an error!'
		})
	})
	it('should create a SHOW_HOURLY_WEATHER action chartData, options', function(){
		expect(actions.showHourlyWeather({})).toEqual({
		type: 'SHOW_HOURLY_WEATHER',
		chartData:{}
		})
	})
	it('should create a SHOW_HOURLY_WEATHER_ERROR action chartData, options, error', function(){
		expect(actions.showHourlyWeatherError({}, 'this is an error')).toEqual({
			type: 'SHOW_HOURLY_WEATHER_ERROR',
			chartData: {},
			error: 'this is an error'
		})
	})
	it('should create a SHOW_FIVE_DAY_WEATHER action fiveDayData, options', function(){
		expect(actions.showFiveDayWeather({})).toEqual({
			type: 'SHOW_FIVE_DAY_WEATHER',
			fiveDayData:{}
		})
	})
	it('should create a SHOW_FIVE_DAY_WEATHER_ERROR action fiveDayData, options, error', function(){
		expect(actions.showFiveDayWeatherError({}, 'this is an error')).toEqual({
			type: 'SHOW_FIVE_DAY_WEATHER_ERROR',
			fiveDayData: {},
			error: 'this is an error'
		})
	})
})





