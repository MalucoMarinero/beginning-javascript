_ = require("lodash")

module.exports = {
title: "Hello World!"
steps: [{
problem: """
Welcome to JavaScript, you're gonna love it :)

This is a space for learning how JavaScript works. On the right you have your worksheet on the top, and your worksheet's output on the bottom.

The first thing you should learn is how to print things. Printing things is the best way to debug your programs and learn what might be going on. In JavaScript you can use `console.log` to print *almost* anything.

Using the worksheet, copy or manually type the following code in to it:

```javascript
console.log("Hello World!");
```
 
"""

test: (repl, cons) ->
  cons.some (cLine) -> cLine == "\"Hello World!\""

solution: """
## That's it!

When you're building real programs, `console.log` is a great way to see what's actually going on inside it.

Click 'back' and then go to the next lesson.
"""
}]
}
