import React from "react";
import UserInput from "./UserInput.js";

let TimeBox = React.createClass( {
	setInitialState: function() {
		return {
			timezone: 'india/kolkata'
		}
	},
	render: function() {
		return <div className = "time-box" ref={this.props.id} onClick={this.props.triggerParent.bind(this,this.props.id)}>
			< UserInput defaultTZ={this.props.defaultTZ}/ >
			< /div>;
	}
});

export default TimeBox;