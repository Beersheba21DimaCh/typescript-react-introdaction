"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var Colors = function (props) {
    // const colors: string[] = [];
    // const colors: Array<string> = ["red", "green", "blue", "yellow", "brown"];
    var colors = props.colors;
    return React.createElement("div", null,
        React.createElement("ul", null, colors.map(function (r, index) { return React.createElement("li", { key: index, style: { color: "white", backgroundColor: r } }, r); })));
};
exports.default = Colors;
