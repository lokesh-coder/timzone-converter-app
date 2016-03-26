require("./public/scss/main.scss");
import React from "react";
import ReactDom from "react-dom";
import TimeBox from "./app/components/TimeBox.js";



ReactDom.render( < TimeBox defaultTZ="Asia/Kolkata"/ > , document.getElementById('here'));
ReactDom.render( < TimeBox defaultTZ="Europe/Amsterdam"/ > , document.getElementById('there'));