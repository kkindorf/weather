import React from 'react'
var router = require('react-router');
var Router = router.Router;
var Route = router.Route;
var Link = router.Link;
var actions = require('../actions')
var connect = require('react-redux').connect;
var ChartistGraph = require('react-chartist');

var FiveDayWeatherForeCast = React.createClass({
   componentDidMount: function(){
        this.props.dispatch(actions.getFiveDayWeather(this.props.data))
    },

	render:function() {
        return(
            	<div>
            	{this.props.loadFive ?
            		<div className="loadFive">
                		<i className="fa fa-refresh fa-spin fa-5x fa-fw"></i>
               	 		<span className="sr-only">Loading</span>
            		</div>
            	:
               		<div className="pos-relative">
                    		<Link to={'/'}>
                       		 <p className="link">Get Hourly Forecast</p>
                    		</Link>
				<p className="title">Five Day Forecast</p>
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
        data: state.fiveDayForeCast,
        loadFive: state.loadFive,
        options: state.fiveDayOptions

    }
}
var Container = connect(mapStateToProps)(FiveDayWeatherForeCast);
module.exports = Container;
//module.exports = FiveDayWeatherForeCast;
