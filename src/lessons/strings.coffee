_ = require("lodash")

module.exports = {
title: "Strings"
steps: [{
problem: """
In JavaScript a bunch of letters, numbers, words or anything else is known as a **String** (as in a string of characters). Strings have to begin AND end with a quotation mark. Single `'` or double `"` is fine, just make sure you use the same at the beginning as you do at the end. This can make using *the other* type of quotes in a sentence much easier. For instance:

```javascript
"It's a stringy world."
```

For this lesson, change the `console.log()` you did in the last lesson to print `"It's a stringify world."`.
"""

test: (repl, cons) ->
  cons.some (cLine) -> cLine == "\"It's a stringify world.\""

solution: """
Right on!
"""
}]
}
