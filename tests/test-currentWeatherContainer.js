var React = require('react');
var TestUtils = require('react-addons-test-utils');
var should = require('chai').should();

var CurrentWeather = require('../components/currentWeatherContainer').CurrentWeatherContainer;

describe('CurrentWeather component', function(){
	it('Renders the current Weather Data', function(){
		var city = 'Boston';
		var description = 'Very sunny';
		var temp = 88;
		var id = 'Hi!';

		var renderer = TestUtils.createRenderer();
		renderer.render(<CurrentWeather city ={city}
										description = {description}
										temp = {temp}
										id = {id} />);
		var result = renderer.getRenderOutput();
		result.props.className.should.equal('current-weather');
		
		var city = result.props.children[0];
		city.props.className.should.equal('city');
		city.props.children.should.equal('Boston')
		result.props.children[1].type.should.equal('p');
		result.props.children[2].type.should.equal('i');
		


	})
})
