_ = require("lodash")

module.exports = {
title: "Strings"
steps: [{
problem: """
In JavaScript a bunch of letters, numbers, words or anything else is known as a **String** (as in a string of characters). Strings have to begin AND end with a quotation mark. Single `'` or double `"` is fine, just make sure you use the same type of quote at the beginning as you do at the end. This can make using *the other* type of quotes in a sentence much easier. For instance:

```javascript
"It's a stringy world."
```

Make a variable called `myString` with the string `"My Great String"`.
"""

test: (repl, cons) ->
  repl.some (line) ->
    line.type == "VariableDeclaration" and line.text == "myString = \"My Great String\""

solution: """
## Yeah, that's it.
"""
}, {
problem: """
You can also add strings together. Make another variable called `myOtherString` with the string `"Another Great String"`.

Then add them together on the console:

```javascript
console.log(myString + myOtherString);
```
"""

test: (repl, cons) ->
  (
    repl.some (line) ->
      line.type == "VariableDeclaration" and line.text == "myOtherString = \"Another Great String\""
  ) and (
    cons.some (cLine) -> cLine == "\"My Great StringAnother Great String\""
  )

solution: """
## Great!

Let's move onto objects in the next lesson.
"""
}]
}
