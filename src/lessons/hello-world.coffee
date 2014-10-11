_ = require("lodash")

module.exports = {
title: "Hello World!"
steps: [{
problem: """
## So you wanna learn javascript?

Let's start off by doing console.log "Hello World".
"""

test: (repl, cons) ->
  cons.some (cLine) -> cLine == "\"Hello World\""

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
