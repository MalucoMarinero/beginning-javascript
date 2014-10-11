var React = require("react/addons");
/**
 * @jsx React.DOM
 */

module.exports = React.createClass({
    displayName: "LessonPanel",

    render: function() {
      var _this = this;

      if (this.props.currentLesson) {
        var lesson = this.props.currentLesson;
        return (
          <section className="lesson-panel">
          <a onClick={function() { _this.props.setLesson(null) }}>Back</a>
          <h2>{lesson.title}</h2>
          <ul>
          {lesson.steps.map(this.renderStep)}
          </ul>
          </section>
        )
      } else {
        return (
          <section className="lesson-panel">
          <h1>Beginning Javascript</h1>
          <ul>{this.renderLessons()}</ul>
          </section>
        )
      }
    },

    renderStep: function(step) {
      var completed = this.props.completedSteps.indexOf(step) != -1
        ? <strong>Completed</strong>
        : null;

      return (
        <li>
        <p>{step.text}</p>
        {completed}
        </li>
      )
    },

    renderLessons: function() {
      var _this = this;
      return this.props.lessons.map(function(lesson) {
        return (
          <li>
          <a onClick={function() { _this.props.setLesson(lesson) }}>
          {lesson.title}
          </a>
          </li>
        )
      });
    }
});
