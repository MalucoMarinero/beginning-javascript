_ = require("lodash")

module.exports = {
title: "Values and Variables"
steps: [{
problem: """
Values are the simplest components in JavaScript. `1` is a **Number** value, `true` is a **Boolean** value, `"hello"` is a **String** value, the list goes on, and don't worry, we'll explore more of those values later. :)


To store values we use things called variables. The word 'variable' means 'can change' and is used because variables can store many different types of values and can change their value many times. They are pretty much like mailboxes. We put something in a variable, like a sentence, and then give the variable an address that we can use to look up the sentence later. In real life mailboxes have to have PO Box numbers but in JavaScript you usually just use lowercase letters or numbers without any spaces.

```javascript
var myVariable = "It's a stringy world.";
```

Try typing that out now in your worksheet.
"""

test: (repl, cons) ->
  repl.some (line) ->
    line.type == "VariableDeclaration" and line.text == "myVariable = \"It's a stringy world.\""

solution: """
## That's it.
"""
}, {
problem: """
Now you can access that variable by it's name. Try outputting it to the console using:

```javascript
console.log(myVariable);
```
"""

test: (repl, cons) ->
  cons.some (cLine) -> cLine == "\"It's a stringy world.\""

solution: """
## Great!

Move on to the next step to learn more about string values.
"""
}]
}
