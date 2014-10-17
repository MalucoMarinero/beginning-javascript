var React = require("react/addons");
var AppContainer = require("./AppContainer.jsx");
var _ = require("lodash");

var homeNode = document.getElementById("beginning-javascript");

var HelloWorld = require("../lessons/hello-world.coffee");
var Strings = require("../lessons/strings.coffee");
var Variables = require("../lessons/variables.coffee");
var Objects = require("../lessons/objects.coffee");
var Functions = require("../lessons/functions.coffee");
var Arrays = require("../lessons/arrays.coffee");
var Next = require("../lessons/next-steps.coffee");

React.renderComponent(AppContainer({
  "lessons": [HelloWorld, Strings, Variables, Objects, Functions, Arrays, Next]
}), homeNode);

