var React = require('react');
var router = require('react-router');
var Router = router.Router;
var Route = router.Route;
var Link = router.Link;
var actions = require('../actions')
var connect = require('react-redux').connect;
var initialState = {
			showF: 'show-fahr',
			showC: 'hide-cels'
}
var CurrentWeatherContainer = React.createClass({
	getInitialState: function(){
		return initialState;
	},
	onClickF: function(){
		this.setState({showF: 'hide-fahr', showC: 'show-cels'});
	},
	onClickC: function(){
		this.setState({showF: 'show-fahr', showC: 'hide-cels'});
	},
	componentDidMount: function(){
		this.props.dispatch(actions.getCurrentWeather(this.props.city, this.props.temp, this.props.currentC, this.props.description, this.props.id))
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
						<h2 onClick = {this.onClickC} className={this.state.showC}> {this.props.currentC} <a href="#">C</a>{this.props.description}</h2>
						<h2 onClick = {this.onClickF} className={this.state.showF}>{this.props.temp} <a href="#">F</a> {this.props.description} </h2>
						<i className={"wi wi-owm-"+this.props.id}></i>
						<div className="padding-bottom">
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
				currentC: state.currentC,
        description: state.currentDescription,
        id: state.id,
        loading: state.loading

    }
}
exports.ACurrentWeatherContainer = connect(mapStateToProps)(CurrentWeatherContainer)
exports.CurrentWeatherContainer = CurrentWeatherContainer;
