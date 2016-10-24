var React = require('react');
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
	render: function(){
		return (
			<div>
			 {this.props.loading ?
					<div className="loader">
						<i className="fa fa-refresh fa-spin fa-5x fa-fw"></i>
						<span className="sr-only">Loading</span>
					</div>
					:
					<div className="wrapper">
					<div className="current-weather">
				<h1 className="city">{this.props.city}</h1>
				<h2>{this.props.temp} {this.props.description}</h2>
				<i className={"wi wi-owm-"+this.props.id}></i>
				<div className="padding-bottom">
				<button className="btn btn-default link" role="button"><a href="https://pure-scrubland-15027.herokuapp.com">Update Weather</a></button>
				</div>
			</div>
			<div>
					{this.props.children}
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
exports.ACurrentWeatherContainer = connect(mapStateToProps)(CurrentWeatherContainer)
exports.CurrentWeatherContainer = CurrentWeatherContainer;
