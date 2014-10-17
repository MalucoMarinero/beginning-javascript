_ = require("lodash")

module.exports = {
title: "Values and Variables"
steps: [{
problem: """
Values are the simplest components in JavaScript. 1 is a value, true is a value, "hello" is a value, function() {} is a value, the list goes on, and don't worry, we'll exlpore more of those values later. :)

To store values we use things called variables. The word 'variable' means 'can change' and is used because variables can store many different types of values and can change their value many times. They are pretty much like mailboxes. We put something in a variable, like our sentence, and then give the variable an address that we can use to look up the sentence later. In real life mailboxes have to have PO Box numbers but in JavaScript you usually just use lowercase letters or numbers without any spaces.

```javascript
var myVariable = "It's a stringy world."
```

var is shorthand for variable and the = means store the thing on the right-hand side in the thing on the left-hand side.

You can now use this variable anywhere you can use a value, like in the `console.log()` prints we've done previously. So, we could easily write somethin like:

```javascript
var stringVariable = "I like to play with strings!"
console.log(stringVariable)
```

And this will print `I like to play with strings!`.

For this lesson, take the string from your prior less, `"It's a stringify world."`, and assign it to a variable. Then, on the next line, print the string using your new variable.
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
