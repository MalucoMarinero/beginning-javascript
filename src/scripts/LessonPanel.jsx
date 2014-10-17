var React = require("react/addons");
var ultramarked = require("ultramarked");
var options = {
  ultralight: true
};
var _ = require("lodash");
/**
 * @jsx React.DOM
 */

module.exports = React.createClass({
    displayName: "LessonPanel",

    componentDidUpdate: function() {
      var el = this.getDOMNode();
      el.style.cssText += ';-webkit-transform:rotateZ(0deg)'
      el.offsetHeight
      el.style.cssText += ';-webkit-transform:none'
    },

    render: function() {
      var _this = this;

      if (this.props.currentLesson) {
        var lesson = this.props.currentLesson;
        var latestCompleted = _.find(lesson.steps, function(step) {
          return _this.props.completedSteps.indexOf(step) != -1;
        });

        var nextStep = latestCompleted
          ? lesson.steps[lesson.steps.indexOf(latestCompleted) + 1]
          : lesson.steps[0];

        var stepCount = lesson.steps.length;
        var completedCount = _this.getCompletedCount(lesson.steps);

        return (
          <section className="lesson-panel">
          <a onClick={function() { _this.props.setLesson(null) }}>Lesson index</a>
          <h2>{lesson.title}</h2>
          <ul className="lesson-steps">
          {lesson.steps.map(function(step, ix) {
              return _this.renderStep(step, ix, step == nextStep);
          })}
          </ul>
          <a className={stepCount == completedCount ? "show" : "hide"}
             onClick={function() { _this.props.setLesson(null) }}>Lesson index</a>
          </section>
        )
      } else {
        return (
          <section className="lesson-panel">
          <h1>Welcome to JavaScript</h1>
          <ul className="lessons">{this.renderLessons()}</ul>
          <br />
          <a onClick={this.props.resetAllProgress}>Reset All Progress</a>
          </section>
        )
      }
    },

    renderStep: function(step, ix, isNextStep) {
      var completed = this.props.completedSteps.indexOf(step) != -1
        ? (
          <p className="solution">
            <strong>Completed</strong> - {step.solution}
          </p>
        ) : null;

      var stepClasses = {
        "lesson-step": true,
        "is-completed": !!completed,
        "is-next": isNextStep
      };

      return (
        <li
          className={React.addons.classSet(stepClasses)}
          key={ix}
        >
        <div
          className="lesson-step__problem"
          dangerouslySetInnerHTML={{
              __html: ultramarked(step.problem, options)
          }}
        />
        <div
          className="lesson-step__solution"
          dangerouslySetInnerHTML={{
              __html: ultramarked(step.solution, options)
          }}
        />
        </li>
      )
    },

    getCompletedCount: function(steps) {
      var _this = this;

      return steps.filter(function(step) {
        return _this.props.completedSteps.indexOf(step) != -1;
      }).length;
    },

    renderLessons: function() {
      var _this = this;

      return this.props.lessons.map(function(lesson, ix) {
        var stepCount = lesson.steps.length;
        var completedCount = _this.getCompletedCount(lesson.steps);
        var lessonClasses = {
          "lesson": true,
          "is-in-progress": completedCount > 0 && completedCount < stepCount,
          "is-completed": completedCount == stepCount
        };

        return (
          <li className={React.addons.classSet(lessonClasses)} key={ix}>
          <a
            className="lesson__name"
            onClick={function() { _this.props.setLesson(lesson) }}
          >
          {lesson.title}
          </a>
          <span className="lesson__count">
          {completedCount} / {stepCount}
          </span>
          </li>
        )
      });
    }
});
