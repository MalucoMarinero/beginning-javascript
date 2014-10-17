_ = require("lodash")

module.exports = {
title: "Arrays"
steps: [{
problem: """
I've mentioned these a few times but let's spend a minute learning about them. Imagine you need to keep track of all your buddies. Well, an Array will do just fine. Think of an Array like a sorted list that you can keep tons of stuff in.

This is how you make an array:

```javascript
  var myCatFriends = ["tommy", "tabby", "ceiling"]
```

Sweet! Now you have a list of cat buddies.

Elements (that is what you call a single item in an array) that are stored within arrays start at 0 and count up from there. So `myCatFriends[0]` returns `"tommy"` and `myCatFriends[1]` returns `"tabby"`... etc etc.

To get buddies out of your brand new Array you can just access an element directly like so:

```javascript
  console.log(myCatFriends[0])
```

If you made a brand new cat friend at the hippest cat club the other night and you want to add them to your list it is super simple: `myCatFriends.push("fluffy")`.

To check that the new cat made it into your array you can use `.length`

```javascript
  console.log(myCatFriends.length)
```

Also, when you use `.push()` it will return you the new length of the Array. Handy! Also take note that arrays will always preserve ordering which means they will remember the order in which you added or defined things. Not everything in JavaScript preserves ordering so remember this special property of Arrays!

For this lesson create a new array with one element at the top of the page. `console.log()` the length of array BEFORE doing anything to it. Now push the string `"tabby"` to the array and then `console.log()` the length of the array again.
"""

test: (repl, cons) ->
  cons.join() == "1,2"

solution: """
# Wicked sticks!

You've passed this lesson!
"""
}]
}
