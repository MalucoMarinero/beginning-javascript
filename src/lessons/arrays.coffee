_ = require("lodash")

module.exports = {
title: "Arrays"
steps: [{
problem: """
Let's create a blank array.
"""

test: (repl, cons) ->
  repl.some (line) ->
    line.type == "VariableDeclaration" and line.value[0]?.value?.length == 0

solution: """
Right on!
"""
}, {



problem: """
Bind 15 to variable named **a**
"""

test: (repl, cons) ->
  repl.some (line) ->
    line.type == "VariableDeclaration" and line.text == "a = 15"

solution: """
Right on!
"""
}]
}
