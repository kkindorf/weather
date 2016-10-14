import React from 'react'
var router = require('react-router');
var Router = router.Router;
var Route = router.Route;
var Link = router.Link;
var actions = require('../actions')
var connect = require('react-redux').connect;
var ChartistGraph = require('react-chartist');

var HourlyWeatherForeCast = React.createClass({
	componentDidMount: function(){
		this.props.dispatch(actions.getHourlyWeather(this.props.data))
	},
	render:function() {
		return(
			<div>
				{this.props.loadHour ?
            		<div className="loadFive">
                		<i className="fa fa-refresh fa-spin fa-5x fa-fw"></i>
               	 		<span className="sr-only">Loading</span>
            		</div>
            	:
            	
				<div className="pos-relative">
					<Link to={'/fivedayforecast'}>
						<h3 className="link">Five Day Forecast</h3>
					</Link>
				    <h4 className="title">Hourly Forecast</h4>
				    <p className="humidity">Humidity %</p>
				    <p className="temp">Temp F</p>
				    <ChartistGraph data={this.props.data} type={'Bar'} options={this.props.options} />
				</div>}
			</div>
      		
		)
	}
})

var mapStateToProps = function(state, props){
    return{
        data: state.threeHourForeCast,
        options: state.threeHourOptions,
        loadHour: state.loadHour
    }
}
var Container = connect(mapStateToProps)(HourlyWeatherForeCast);

module.exports = Container;

//module.exports = HourlyWeatherForeCast;
