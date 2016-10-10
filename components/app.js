var React = require('react');
var CurrentWeatherContainer = require('./currentWeatherContainer');
var connect = require('react-redux').connect;


var App = React.createClass({
	render: function(){
		return (
			<div className="wrapper">
				<CurrentWeatherContainer />
				<div>
					{this.props.children}
				</div>
			</div>
		);
	}
});

var Container = connect()(App);

module.exports = Container;
//module.exports = App;
