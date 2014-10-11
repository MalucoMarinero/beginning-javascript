var esprima = require("esprima");
var _ = require("lodash");


var getCodeForLoc = function (code, loc) {
  var start = loc.start, end = loc.end;

  var lines = code.split("\n").slice(start.line - 1, end.line);
  lines[0] = lines[0].slice(start.column);
  lines[lines.length-1] = lines[lines.length-1].slice(undefined, end.column+1);
  return lines.join("\n");
};

var getCodeBeforeLoc = function (code, loc) {
  return getCodeForLoc(code, {
      start: {line: 1, column: 0},
      end: {
        line: loc.start.line,
        column: loc.start.column - 1
      }
  });
}

var getCodeUpToLoc = function (code, loc) {
  return getCodeForLoc(code, {
      start: {line: 1, column: 0},
      end: loc.end
  });
}


var parseCode = function(code) {
  return esprima.parse(code, {
      loc: true,
      tolerant: true
  });
}


module.exports.getConsoleOutput = function(code) {
  var output = [];

  _log = console.log;
  window.console.log = function() {
    output.push(Array.prototype.map.call(arguments, JSON.stringify).join(", "));
  };

  try {
    eval(code);
  } catch (e) {

  }

  window.console.log = _log;

  return output;
};


module.exports.getParsedLines = function(code) {
  try {
    var parsed = parseCode(code);
  } catch (e) {
    return [{
      type: "Error",
      value: e,
      text: "Parse Error: " + (e.description || e.message)
    }];
  }
  var outputLines = [];

  var parseAst = function(ast, depth) {

    var codeSlice = getCodeForLoc(code, ast.loc);
    var codeTo = getCodeUpToLoc(code, ast.loc);
    var closedEval = function(code) {
      return eval(codeTo + _.range(depth).map(function() { return "};"; }));
    }



    try {
      closedEval(codeTo);
    } catch (e) {
      outputLines[ast.loc.start.line-1] = {
        type: "Error",
        value: e,
        text: e.name + ": " + e.message
      }
      return;
    }

    if (ast.type == "VariableDeclaration") {
      var decs = ast.declarations.map(function(decl) {
        var varRes = eval(codeTo + "; " + decl.id.name + ";")
        return decl.id.name + " = " + JSON.stringify(varRes);
      });

      outputLines[ast.loc.start.line-1] = {
        type: ast.type,
        value: decs,
        text: decs.join(", ")
      };
    }

    else if (ast.type == "ExpressionStatement") {
      var varRes = closedEval(codeTo);
      var line = {
        type: ast.type,
        value: varRes,
        text: JSON.stringify(varRes)
      };
      if (ast.expression.type == "AssignmentExpression") {
        line.text = ast.expression.left.name + " = " + line.text;
      }

      outputLines[ast.loc.start.line-1] = line;
    }

    else if (ast.type == "IfStatement") {
      var codeBefore = getCodeBeforeLoc(code, ast.loc);
      var testExpr = getCodeForLoc(code, ast.test.loc)
                         .trim().replace(/\{$/, "")
                         .trim().replace(/\)$/, "");

      var testResult = eval(codeBefore + "; " + testExpr + ";")

      outputLines[ast.loc.start.line-1] = {
        type: "IfCondition",
        value: testResult,
        text: "(" + testExpr + ") resolves to " + !!testResult
      }

      if (!!testResult) {
        console.log(ast.consequent);
        ast.consequent.body.forEach(function(a) { parseAst(a, depth + 1) });
      } else {
        ast.alternate.body.forEach(function(a) { parseAst(a, depth + 1) });
      }
    }

    else {
      console.log(ast, "exit");
    }
  };

  parsed.body.forEach(function(a) { parseAst(a, 0) });

  var ix = 0;
  while (ix < outputLines.length) {
    if (!outputLines[ix]) {
      outputLines[ix] = {type: "Blank", text: ""};
    }

    ix++;
  }

  return outputLines;
};
