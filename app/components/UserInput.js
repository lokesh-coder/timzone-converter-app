import React from "react";
import Timer from "./Timer.js";

var UserInput = React.createClass({
	getInitialState: function() {
		return {
			style: 'default',
			userInputValue: null,
			parsedUserInputValue: null
		};
	},
	handleChange: function(e) {
		let parsedTime = String(Date.parse(e.target.value));
		this.setState({
			userInputValue: e.target.value,
			parsedUserInputValue: parsedTime
		});
	},
	render: function() {
		return <div >

			< Timer set = {
				this.state.parsedUserInputValue
			}
		raw = {
			this.state.userInputValue
		}
		defaultTZ={this.props.defaultTZ}
		/>  < input type = "text"
		className = "input"
		onChange = {
			this.handleChange
		}
		placeholder = "type like a barbarian.." / >
			< /div>;
	}
});

export default UserInput;