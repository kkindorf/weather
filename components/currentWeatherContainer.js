var React = require('react');
//var HourlyWeatherForeCast = require('./hourlyForeCast');
//var FiveDayWeatherForeCast = require('./fiveDayForeCast');
var actions = require('../actions')
var connect = require('react-redux').connect;

var CurrentWeatherContainer = React.createClass({
	componentDidMount: function(){
		this.props.dispatch(actions.getCurrentWeather(this.props.city, this.props.temp, this.props.description, this.props.id))
	},
	render: function(){
		return (
			<div className="current-weather">
				<h1 className="city">{this.props.city}</h1>
				<p>{this.props.temp} {this.props.description}</p>
				<i className={"wi wi-owm-"+this.props.id}></i>
			</div>
			
		);
	}
})

var mapStateToProps = function(state, props){
    return{
        city: state.currentCityName,
        temp: state.currentTemp,
        description: state.currentDescription,
        id: state.id
        
    }
}
var Container = connect(mapStateToProps)(CurrentWeatherContainer);
<<<<<<< HEAD
//module.exports = Container;
=======
module.exports = Container;
>>>>>>> features
//module.exports = CurrentWeatherContainer;
