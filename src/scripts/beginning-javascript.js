
var React = require("react/addons");
var AppContainer = require("./AppContainer.jsx");
var _ = require("lodash");

var homeNode = document.getElementById("beginning-javascript");


var HelloWorld = require("../lessons/hello-world.coffee");
var Arrays = require("../lessons/arrays.coffee");

React.renderComponent(AppContainer({
  "lessons": [HelloWorld, Arrays]
}), homeNode);
