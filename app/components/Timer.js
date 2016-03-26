import React from "react";
import M from "moment";
import tz from "timezone";

var Timer = React.createClass({
	getInitialState: function() {
		return {
			style: 'default',
			userInputValue: new Date(),
			formats: {
				time: 'hh:mm:ss',
				dateExpanded: 'DD MMMM YYYY',
				ampm:'A'
			}
		}
	},
	tickTock(time) {
		this.setState({
			time: M().tz(this.props.defaultTZ).format(this.state.formats.time),
			date: M().tz(this.props.defaultTZ).format(this.state.formats.dateExpanded),
			ampm: M().tz(this.props.defaultTZ).format(this.state.formats.ampm)
		});
	},
	componentDidMount: function() {
		// console.log(M.tz.names());
		this.intialTimer = setInterval(this.tickTock, 1000);
	},

	componentWillReceiveProps: function(nextprops) {
		if(nextprops.raw=='' || nextprops.raw=='now' || nextprops.raw==null){
			this.setState({
				time: M().tz(this.props.defaultTZ).format(this.state.formats.time),
				date: M().tz(this.props.defaultTZ).format(this.state.formats.dateExpanded),
			ampm: M().tz(this.props.defaultTZ).format(this.state.formats.ampm)
			});
			this.intialTimer = setInterval(this.tickTock, 1000);
			return;
		}
		clearInterval(this.intialTimer);
		this.setState({
			time: M(nextprops.set).tz(this.props.defaultTZ).format(this.state.formats.time),
			date: M(nextprops.set).tz(this.props.defaultTZ).format(this.state.formats.dateExpanded),
			ampm: M().tz(this.props.defaultTZ).format(this.state.formats.ampm)
		});

	},

	render: function() {
		return <div className = "timer" >
		<div className="timezone">{this.props.defaultTZ}</div>
			< div className = "time" > {
				this.state.time
			} <span className="ampm">{this.state.ampm}</span>< /div> < div className = "date" > {
		this.state.date 
	} < /div>  < /div > ;
}
});

export default Timer;