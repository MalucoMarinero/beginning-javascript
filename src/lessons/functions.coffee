_ = require("lodash")

module.exports = {
title: "Functions"
steps: [{
problem: """
Functions are a great way to do the same thing over and over again. In fact, we've been using functions this whole time, `console.log()` is a function and `"string".toUpperCase()` is a function.

We call things that perform actions like this functions because, well, they serve a specific function (AKA purpose or action) for us. Calling them "actions" sounded weird I guess so they went with the word "function" instead.

There are many ways to create functions. One is to assign them to variables:

```javascript
var myFunction = function () {
  console.log('Hello World!')
}
```

Another is to name the function:

```javascript
function myFunction () {
  console.log('Hello World!')
}
```

Both ways allow us to easily refer to this behavior over and over again:

```javascript
myFunction()
myFunction()
```

For this lesson, create a function that encapsulates the printing of `"It's a stringy world.".toUpperCase()` and then call this function twice so that it prints the message two times.
"""

test: (repl, cons) ->
  cons.every (cLine) -> cLine == "\"It's a stringy world.\"".toUpperCase()

solution: """
Right on!
"""
}]
}
