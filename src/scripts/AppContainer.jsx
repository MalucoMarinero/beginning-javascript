var React = require("react/addons");
var WorkSheet = require("./WorkSheet.jsx");
var LessonPanel = require("./LessonPanel.jsx");
var Parser = require("./Parser.js");
/**
 * @jsx React.DOM
 */

module.exports = React.createClass({
    displayName: "AppContainer",

    getInitialState: function() {
      return {code: "", currentLesson: null, completedSteps: []};
    },

    updateCode: function(code) {
      this.setState({code: code});
    },

    componentDidUpdate: function(prevP, prevS) {
      var consoleOut = Parser.getConsoleOutput(this.state.code);
      var replOut = Parser.getParsedLines(this.state.code);

      var steps = this.state.completedSteps.concat();
      var newComps = 0;
      if (this.state.currentLesson) {
        this.state.currentLesson.steps.forEach(function(step) {
          var stepSuccess = step.test(replOut, consoleOut);
          if (stepSuccess && steps.indexOf(step) == -1) {
            newComps++;
            steps.push(step);
          }
        });

        if (newComps > 0) this.setState({completedSteps: steps});
      }
    },

    setLesson: function(lesson) {
      this.setState({currentLesson: lesson});
    },

    render: function() {
      return (
        <div className="wrapper">
          <LessonPanel
            currentLesson={this.state.currentLesson}
            completedSteps={this.state.completedSteps}
            setLesson={this.setLesson}
            lessons={this.props.lessons}
          />
          <WorkSheet
            code={this.state.code}
            updateCode={this.updateCode}
          />
        </div>
      )
    }
});


