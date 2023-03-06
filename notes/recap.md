# Recap

## Week 1

### Contents

- Intro (Grades, Story Book)
- Test-Driven Development
- JS Functions
  - function keyword
  - named functions
  - function references
  - calling functions
  - too many, too few arguments
  - when to return, missing returns
  - statements vs. expressions
- Lambda expressions
  - => syntax
  - high-order functions
  - returning functions
  - nested lambda expressions
  - calling curried functions/lambdas
  - ( ) vs { }
- Homework: Snake Game

### Learnings

- ASI --> use Semicolons
- <https://stackoverflow.com/questions/36314/what-is-currying>
- comparing two objects, indexOf()
- unshift(), see <https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/unshift>

### Homework

- Snake Game

## Week 2

### Contents

JS Goodie:
  console.log();
  console.error();
  console.dir();
  console.table();
  document.querySelector();

Recap Week1:
  String() Constructor
  Introduce Toolbox Function: assert
  Improving snake game and testing setup

JS Scopes: Global and Function
JS Variables: use const and let (local scope)
  don't use plain "x" --> global scope
  don't use "var x" --> hoisted scope
    <https://developer.mozilla.org/en-US/docs/Glossary/Hoisting>
    <https://www.digitalocean.com/community/tutorials/understanding-hoisting-in-javascript>
  start with a "const", if you need to re-assing, use "let"
IIFE: Immediatly invoked function expression
Lambda Calculus: alpha, beta, theta
  alpha translation: rename parameter (syntactical)
    const id = x => x
  beta reduction: apply argument and reduce
    (f => x => f(x))(id)(1)   // replace f with id and remove f
  =                           // replace x with 1 and remove x and 1
  =                           // apply id function
  =                           // replace x with 1 and remove x and 1
  eta reduction: cancel parameter
    cancel out parameters if the rightmost parameters match
    --> kürzen

