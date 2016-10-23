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
		result.type.should.equal('div');
		var wrapper = result.props.children[0];
		wrapper.type.should.equal('div');
		wrapper.props.className.should.equal('wrapper');
		var currentWeather = wrapper.props.children[0];
		currentWeather.type.should.equal('div');
		currentWeather.props.className.should.equal('current-weather');
		var city = currentWeather.props.children[0];
		city.type.should.equal('h1');
		city.props.className.should.equal('city');
		city.props.children.should.equal('Boston');
		var h2 = currentWeather.props.children[1];
		h2.type.should.equal('h2');
		var i = currentWeather.props.children[2];
		i.type.should.equal('i');
		i.props.className.should.equal('wi wi-owm-Hi!');





	})
})
