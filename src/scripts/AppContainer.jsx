var React = require("react/addons");
var WorkSheet = require("./WorkSheet.jsx");
var LessonPanel = require("./LessonPanel.jsx");
var Parser = require("./Parser.js");
var _ = require("lodash");
/**
 * @jsx React.DOM
 */

module.exports = React.createClass({
    displayName: "AppContainer",

    getInitialState: function() {
      var code = localStorage.getItem("savedCode") || "";
      var progress = localStorage.getItem("progress") || "[]";
      var completedSteps = this.deserializeProgress(progress);

      return {
        code: code,
        currentLesson: null,
        completedSteps: completedSteps
      };
    },

    updateCode: function(code) {
      this.setState({code: code});
    },

    resetAllProgress: function() {
      localStorage.setItem("savedCode", "");
      localStorage.setItem("progress", "[]");
      window.location.reload();
    },

    deserializeProgress: function(progress) {
      var _this = this;
      return JSON.parse(progress).map(function(stepIx) {
        var ixes = stepIx.split(":"),
            lIx = parseInt(ixes[0]),
            sIx = parseInt(ixes[1]);

        return _this.props.lessons[lIx].steps[sIx];
      });
    },

    serializeProgress: function(completedSteps) {
      return JSON.stringify(_.flatten(
        this.props.lessons.map(function(l, lIx) {
          return l.steps.filter(function(step) {
            return completedSteps.indexOf(step) != -1;
          }).map(function(step, sIx) {
            return lIx + ":" + sIx;
          });
        })
      ));
    },

    saveProgress: function(completedSteps, code) {
      localStorage.setItem("savedCode", code);
      var progress = this.serializeProgress(completedSteps);
      localStorage.setItem("progress", progress);
    },

    componentDidUpdate: function(prevP, prevS) {
      var consoleOut = Parser.getConsoleOutput(this.state.code);
      var replOut = Parser.getParsedLines(this.state.code);
      localStorage.setItem("savedCode", this.state.code);

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

        if (newComps > 0) {
          this.saveProgress(steps, this.state.code);
          this.setState({completedSteps: steps});
        }
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
            resetAllProgress={this.resetAllProgress}
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


