var React = require('react');
var TestUtils = require('react-addons-test-utils');
var should = require('chai').should();
var FiveDayWeatherForeCast = require('../components/fiveDayForeCast').FiveDayForeCast;
//how do I test what's inside the object and function?
describe('FiveDayWeatherForeCast component', function(){
	it('Renders a five day weather forecast', function(){
		var data = {};
		var options = {};
		var renderer = TestUtils.createRenderer();
		renderer.render(<FiveDayWeatherForeCast data ={data}
										options = {options} />);
		var result = renderer.getRenderOutput();
		result.type.should.equal('div');
		result.props.children.type.should.equal('div');
		

		
	})
})
