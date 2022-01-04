"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _ = require("lodash");
var React = require("react");
var time_zones_1 = require("./time-zones");
var Clock = function (props) {
    var _a = React.useState(new Date()), date = _a[0], setDate = _a[1];
    var timeZone = React.useRef();
    function tic() {
        console.log("tic");
        setDate(new Date());
    }
    React.useEffect(function () {
        timeZone.current = getTimeZone(props.timeZone);
        console.log("useEffect");
        var interval = setInterval(tic, 1000);
        return function () { return clearInterval(interval); }; //при размонтировании вызывается return fun
    }, [props.timeZone]); //[] ресурс обнавления, при котором снова вызвать useEffect
    return timeZone.current ? React.createElement("div", null,
        React.createElement("h2", null,
            "Date ",
            timeZone.current,
            " time-zone"),
        React.createElement("h3", null, date.toLocaleString("ru", { timeZone: timeZone.current }))) : React.createElement("div", null);
};
function getTimeZone(input) {
    var index = _.findIndex(time_zones_1.default.map(function (e) { return e.name; }), function (v) { return v.includes(input); });
    console.log("index=" + index);
    return index >= 0 ? time_zones_1.default[index].name : "";
}
exports.default = Clock;
