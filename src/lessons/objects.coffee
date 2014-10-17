_ = require("lodash")

module.exports = {
title: "Objects"
steps: [{
problem: """
In JavaScript, everying is considered an "object." Objects are *things* that have `properties`.

You've already learned about Strings, strings are objects and have properties too, they have properties that help you manipulate the data in those strings. For instance, there is a function on strings that will turn that string in to upper case, sort of like the string was written in ALL CAPS.

```javascript
var stringVariable = "It's a stringy world."
var upperCaseVariable = stringVariable.toUpperCase()
```

Or, you could write the same thing this way:

```javascript
var upperCaseVariable = "It's a stringy world.".toUpperCase()
```

For this lesson, print the variable you created in the previous lesson in UpperCase using the string object's `.toUpperCase()` method.
"""

test: (repl, cons) ->
  cons.some (cLine) -> cLine == "\"It's a stringy world.\"".toUpperCase()

solution: """
Right on!
"""
},{
problem: """
So, everything is an object, that means you should be able to create new objects with nothing but what you would like to have in them :)

```javascript
var myObject = { property: "Just another string." }
console.log(myObject.property)
```

You may not have noticed, but you've been using an object this whole time: `console`. The `log()` function is actually a property of the console object which you access using the "dot syntax." You can access properties of any object using like this.

You can also access properties using another syntax with brackets.

```javascript
var myObject = { property: "Just another string." }
console.log(myObject["property"])
```

This syntax takes a string as the property which is very useful because when property names have spaces or special characters that we can't access them using the "dot syntax." For instance, we can create an object like this:

```javascript
var myObject = {"my property": "Just another string."}
```

If we were to try and access that property using the "dot syntax" we would get a synax error. This also means we can use variables with strings to access properties.

```javascript
var myObject = {"my property": "Just another string."}
var name = "my property"
console.log(myObject[name])
```

For this lesson, create a new object with a property that contains the string from your previous lesson, `"It's a stringy world.".toUpperCase()`, as the value and print that string to the console using `console.log()` on the next line.
"""

test: (repl, cons) ->
  # TODO: should check for the existance of the object here also
  cons.some (cLine) -> cLine == "\"It's a stringy world.\"".toUpperCase()

solution: """
Right on!
"""
}]
}
