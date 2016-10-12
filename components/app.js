var React = require('react');
var CurrentWeatherContainer = require('./currentWeatherContainer');
var connect = require('react-redux').connect;
var App = React.createClass({
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
				<CurrentWeatherContainer />
				<div>
					{this.props.children}
				</div>
			</div>};
		</div>
		);
	}
});

var mapStateToProps = function(state, props){
    return{
        loading: state.loading
    }
}
var Container = connect(mapStateToProps)(App);

module.exports = Container;
//module.exports = App;
