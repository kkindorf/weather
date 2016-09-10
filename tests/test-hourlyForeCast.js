var React = require('react');
var TestUtils = require('react-addons-test-utils');
var should = require('chai').should();
var HourlyWeatherForeCast = require('../components/hourlyForecast');
//how do I test what's inside the object and function?
describe('HourlyWeatherForeCast component', function(){
	it('Renders hourly day weather forecast', function(){
		var data = {};
		var options = {};
		var renderer = TestUtils.createRenderer();
		renderer.render(<HourlyWeatherForeCast data ={data}
										options = {options} />);
		var result = renderer.getRenderOutput();
		console.log(result)
		result.type.should.equal('div');
		result.props.children.type.should.equal('div')
		
	})
})
