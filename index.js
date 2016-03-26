require("./public/scss/main.scss");
import React from "react";
import ReactDom from "react-dom";
import M from "moment";
import tz from "timezone";
import ReactSelect from "react-select";
import 'selectCss';
import TimeBox from "./app/components/TimeBox.js";


let Container = React.createClass({
  selectedTz: '',
  userTz: M.tz.guess(),
  getInitialState() {
    return {
      child: [],
      timezones: []
    }
  },
  elem(tz) {
    console.log('==> TZ VAL ' + tz);
    return React.createElement(TimeBox, {
      defaultTZ: tz,
      id: this.state.child.length,
      triggerParent: this.triggerFromChild
    });
  },
  triggerTimezone(val) {
    this.selectedTz = val;
  },
  triggerFromChild(id) {
    console.log('==> FROM CHILD ' + id);
  },
  findTz() {
    if (this.selectedTz.length == 0)
      return this.userTz;

    return this.selectedTz;
  },
  addTimeboxHandle() {
    if (this.selectedTz.length == 0) {
      var tz = this.userTz;
    } else {
      var tz = this.selectedTz;
    }
    console.log('==> TO VAL=> ' + this.findTz());
    this.state.child.push(this.elem(tz));
    this.setState({
      child: this.state.child
    });
  },
  removeTimeboxHandle() {
    if (this.state.child.length <= 2)
      return;
    this.state.child.pop();
    this.setState({
      child: this.state.child
    });
  },
  componentDidMount() {
    let tz_array = M.tz.names();
    let count = 0;
    let tz_obj = tz_array.map(function(val) {
      return {
        id: count++,
        value: val,
        label: val
      };
    });

    this.setState({
      timezones: tz_obj
    });
    this.addTimeboxHandle();
  },
  render() {
    let childrens = [];
    this.state.child.map(function(val, i) {
      childrens.push(React.cloneElement(val, {
        key: i
      }));
    });
    return <div >
      < nav > < div className = "select" > < ReactSelect
    name = "form-field-name"
    value = {
      this.selectedTz
    }
    options = {
      this.state.timezones
    }
    onChange = {
      this.triggerTimezone
    }
    /></div > < a onClick = {
      this.addTimeboxHandle
    }
    className = "button" > Add timezone < /a> < a onClick = {
    this.removeTimeboxHandle
  }
  className = "button danger" > Remove timezone < /a></nav > {
    childrens
  } < /div>;
}
});


ReactDom.render( < Container / > , document.getElementById('timeboxes'));