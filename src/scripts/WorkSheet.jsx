var React = require("react/addons");
var activeLine = require("codemirror/addon/selection/active-line.js");
var jsCodeMirror = require("codemirror/mode/javascript/javascript.js");
var CodeMirror = require("codemirror");
var esprima = require("esprima");
/**
 * @jsx React.DOM
 */


var Parser = require("./Parser.js");

module.exports = React.createClass({
    displayName: "WorkSheet",
    getInitialState: function() {
      return {code: ""};
    },

    updateCode: function(e) {
      this.props.updateCode ? this.props.updateCode(instance.getValue()) : null;
    },

    componentDidMount: function() {
      var _this = this;
      var editorArea = this.refs.codeMirror.getDOMNode()
      CodeMirror.fromTextArea(editorArea, {
        styleActiveLine: true,
        mode: "javascript"
      }).on("change", this.onCmChange);
    },

    onCmChange: function(instance, change) {
      this.props.updateCode ? this.props.updateCode(instance.getValue()) : null;
    },

    renderWorksheetOutput: function(code) {
      var outputLines = Parser.getParsedLines(code);

      return outputLines.map(function(l, ix) {
        if (l.type == "Error") {
          return (
            <pre key={ix} className="worksheet-results__line is-error">{"// " + l.text}</pre>
          )
        } else if (l.type != "Blank") {
          return (
            <pre key={ix} className="worksheet-results__line">{"// " + l.text}</pre>
          )
        } else {
          return (
            <pre key={ix} className="worksheet-results__line"></pre>
          )
        }
      });
    },

    renderConsoleOutput: function(code) {
      return Parser.getConsoleOutput(code).join("\n");
    },

    render: function() {
      return (
        <section className="work-panel">
          <div className="worksheet-code">
            <textarea ref="codeMirror" onChange={this.updateCode}
                      type="hidden"
                      value={this.props.code}/>
          </div>
          <pre className="worksheet-results">
            {this.renderWorksheetOutput(this.props.code)}
          </pre>
          <div className="output">
            <pre>{this.renderConsoleOutput(this.props.code)}</pre>
          </div>
        </section>
      )
    }
});
