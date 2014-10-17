_ = require("lodash")

module.exports = {
title: "Hello World!"
steps: [{
problem: """
Welcome to JavaScript, you're gonna love it :)

The first thing you should learn is how to print things. Printing things is the best way to debug your programs and learn what might be going on. In JavaScript you can use `console.log` to print *almost* anything.

Using the worksheet copy or manually type the following code in to it:

```javascript
console.log("Hello World!")
```
 
"""

test: (repl, cons) ->
  cons.some (cLine) -> cLine == "\"Hello World!\""

solution: """
Right on!
"""
}]
}
