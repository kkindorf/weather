var React = require('react');
var TestUtils = require('react-addons-test-utils');
var should = require('chai').should();
var App = require('../components/app');

describe('App component', function(){
	it('Renders a currentWeatherContainer component and charts', function(){
		var renderer = TestUtils.createRenderer();
		renderer.render(<App/>);
		var result = renderer.getRenderOutput();
		result.props.className.should.equal('wrapper');
		
	})
})