
var React = require("react/addons");
var AppContainer = require("./AppContainer.jsx");

var homeNode = document.getElementById("beginning-javascript");
React.renderComponent(AppContainer({
  "lessons": [
    {
      title: "Hello World",
      steps: [{
          text: "You must console log \"Hello World\".",
          test: function(repl, consoleOut) {
            console.log(repl, consoleOut);
            return consoleOut[0] == "\"Hello World\"";
          }
      }]
    }
  ]
}), homeNode);
