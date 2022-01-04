"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var InputDate = function (props) {
    // let inputColorsEl: any;
    // let inputTimeZoneEl: any;
    // let [inputColorsEl, setInputColorsEl] = React.useState<any>();
    // let [inputTimeZoneEl, setInputTimeZoneEl] = React.useState<any>();
    var inputColorsEl = React.useRef();
    var inputTimeZoneEl = React.useRef();
    React.useEffect(function () {
        console.log("input effect");
        inputColorsEl.current = document.getElementById("input-colors");
        inputTimeZoneEl.current = document.getElementById("input-zone");
        console.log(inputTimeZoneEl.current);
    }, []);
    function returnColors() {
        var colorsStr = inputColorsEl.current.value;
        props.colorsFn(colorsStr.split(" "));
    }
    function returnTimeZone() {
        var timeZoneStr = inputTimeZoneEl.current.value;
        props.timeZoneFn(timeZoneStr.split(' '));
    }
    return React.createElement("div", null,
        React.createElement("input", { id: "input-colors", placeholder: "Enter colors separated by space" }),
        " ",
        React.createElement("button", { onClick: returnColors }, "Go"),
        React.createElement("input", { id: "input-zone", placeholder: "Enter timeZone" }),
        " ",
        React.createElement("button", { onClick: returnTimeZone }, "Go"));
};
exports.default = InputDate;
