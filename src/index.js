"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var ReactDom = require("react-dom"); //rendering
// import 'react-devtools'
var App_1 = require("./App");
var kuku = "Hello World!";
ReactDom.render(React.createElement(App_1.default, null), document.getElementById("react"));
