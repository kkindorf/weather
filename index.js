var React = require('react');
var ReactDOM = require('react-dom');
var App = require('./components/app');
var HourlyWeatherForeCast = require('./components/hourlyForeCast');
var FiveDayWeatherForeCast = require('./components/fiveDayForeCast');
var router = require('react-router');
var Router = router.Router;
var Route = router.Route;
var hashHistory = router.hashHistory;
var IndexRoute = router.IndexRoute;
var Provider = require('react-redux').Provider;
var store = require('./store');

var routes = (
			<Route path = '/' component={App} >
				<Route path = '/hourlyForeCast' component={HourlyWeatherForeCast} />
				<Route path ='/fivedayforecast' component={FiveDayWeatherForeCast} />
			</Route>
	)

document.addEventListener('DOMContentLoaded', function(){

	ReactDOM.render(
		<Provider store = {store}>
			<Router history = {hashHistory}
					routes = {routes} />
		</Provider>, document.getElementById('app'))
});
