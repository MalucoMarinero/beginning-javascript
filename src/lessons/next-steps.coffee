_ = require("lodash")

module.exports = {
title: "Where to from here?"
steps: [{
problem: """
So far we've covered using your browsers built in console to run and debug arbitrary JavaScript code; as  well as creating and manipulating strings, arrays, object and functions. The bread and butter of any JavaScript developer.

At this stage you may be asking yourself, "where to from here?" - well my friend with an entire world of possibilities before you this is a completely reasonable question.

Fortunatly the JavaScript community have you covered: [NodeSchool](http://nodeschool.io) has many additional workshops for you to dive into, which will put your newly learnt JavaScrip knowledge to the test.
"""

test: (repl, cons) ->
  cons.some (cLine) -> cLine == "\"It's a stringify world.\""
  # TODO: should detect the varaiable assignment here also.
  # repl.some (line) ->
  #   cons.some (cLine) -> cLine == "\"Hello World\""
  #   line.type == "VariableDeclaration" and line.text == "a = 15"
  #   line.type == "VariableDeclaration" and line.value[0]?.value?.length == 0

solution: """
Right on!
"""
}]
}
