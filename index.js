var React = require('react');
var ReactDOM = require('react-dom');
var HourlyWeatherForeCast = require('./components/hourlyForeCast').AHourlyForeCast;
var FiveDayWeatherForeCast = require('./components/fiveDayForeCast').AFiveDayForeCast;
var CurrentWeatherContainer = require('./components/currentWeatherContainer').ACurrentWeatherContainer;
var router = require('react-router');
var Router = router.Router;
var Route = router.Route;
var hashHistory = router.hashHistory;
var IndexRoute = router.IndexRoute;
var Provider = require('react-redux').Provider;
var store = require('./store');

var routes = (
			 <Router history= {hashHistory}>
				<Route path = '/' component={CurrentWeatherContainer} >
					<IndexRoute component={HourlyWeatherForeCast} />
					<Route path ='/fivedayforecast' component={FiveDayWeatherForeCast} />
				</Route>
			 </Router>
	)

document.addEventListener('DOMContentLoaded', function(){

	ReactDOM.render(
		<Provider store = {store}>
			<Router history = {hashHistory}
					routes = {routes} />
		</Provider>, document.getElementById('app'))
});
