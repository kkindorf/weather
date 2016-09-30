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
            {this.props.loading ?
                '':<div className="pos-relative">
                    <Link to={'/fivedayforecast'}>
                        <p className="link">Get Five Day Forecast</p>
                    </Link>
                <p className="title">Hourly Forecast</p>
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
        loading: state.loading,
        options: state.threeHourOptions
    }
}
var Container = connect(mapStateToProps)(HourlyWeatherForeCast);
module.exports = Container;
//module.exports = HourlyWeatherForeCast;






