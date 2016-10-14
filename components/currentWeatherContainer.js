var React = require('react');
//var HourlyWeatherForeCast = require('./hourlyForeCast');
//var FiveDayWeatherForeCast = require('./fiveDayForeCast');
var router = require('react-router');
var Router = router.Router;
var Route = router.Route;
var Link = router.Link;
var actions = require('../actions')
var connect = require('react-redux').connect;

var CurrentWeatherContainer = React.createClass({
	componentDidMount: function(){
		this.props.dispatch(actions.getCurrentWeather(this.props.city, this.props.temp, this.props.description, this.props.id))
	},
	setInitialState: function(){
		
	},
	render: function(){
		return (
			<div>
			 {this.props.loading ?
					<div className="loader">
						<i className="fa fa-refresh fa-spin fa-5x fa-fw"></i>
						<span className="sr-only">Loading</span>
					</div>
					:
					<div className="current-weather">
				<h1 className="city">{this.props.city}</h1>
				<p>{this.props.temp} {this.props.description}</p>
				<i className={"wi wi-owm-"+this.props.id}></i>
				<div className="links">
					<div className="child-link1">
					<Link to={'/hourlyForeCast'}>
						<p className="link">Hourly Forecast</p>
					</Link>
					</div>
					<div className="child-link2">
					<Link to={'/fivedayforecast'}>
						<p className="link">Five Day Forecast</p>
				    </Link>
				    </div>
				</div>
			</div>};
			</div>
			
		);
	}
})

var mapStateToProps = function(state, props){
    return{
        city: state.currentCityName,
        temp: state.currentTemp,
        description: state.currentDescription,
        id: state.id,
        loading: state.loading

    }
}
var Container = connect(mapStateToProps)(CurrentWeatherContainer);
module.exports = Container;
//module.exports = CurrentWeatherContainer;
