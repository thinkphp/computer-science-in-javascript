## Computer Science in JavaScript

# Introduction to JavaScript - Stanford Course Outline

## Week 1: JavaScript Basics

### 1.1 Introduction to JavaScript
- What is JavaScript?
- History and evolution
- Role in web development

### 1.2 Setting Up the Development Environment
- Choosing a text editor (e.g., Visual Studio Code)
- Using browser developer tools

### 1.3 Variables and Data Types
- Declaring variables (var, let, const)
- Basic data types: number, string, boolean, null, undefined
- Type coercion and conversion

Example:
```javascript
let name = "Alice";
const age = 25;
let isStudent = true;
console.log(`${name} is ${age} years old. Student status: ${isStudent}`);
```

### 1.4 Basic Operators
- Arithmetic operators
- Comparison operators
- Logical operators

Example:
```javascript
let x = 5;
let y = 3;
console.log(x + y);  // Addition: 8
console.log(x > y);  // Comparison: true
console.log(x > 0 && y < 10);  // Logical AND: true
```

## Week 2: Control Flow and Functions

### 2.1 Conditional Statements
- if...else statements
- switch statements

Example:
```javascript
let score = 85;

if (score >= 90) {
    console.log("A");
} else if (score >= 80) {
    console.log("B");
} else {
    console.log("C");
}
```

### 2.2 Loops
- for loops
- while loops
- do...while loops

Example:
```javascript
for (let i = 0; i < 5; i++) {
    console.log(`Iteration ${i + 1}`);
}
```

### 2.3 Functions
- Function declaration and expression
- Parameters and return values
- Arrow functions

Example:
```javascript
function greet(name) {
    return `Hello, ${name}!`;
}

const square = (x) => x * x;

console.log(greet("Bob"));  // Output: Hello, Bob!
console.log(square(4));     // Output: 16
```

## Week 3: Data Structures

### 3.1 Arrays
- Creating and accessing arrays
- Array methods (push, pop, shift, unshift, splice)
- Iterating through arrays

Example:
```javascript
let fruits = ["apple", "banana", "orange"];
fruits.push("grape");
console.log(fruits.length);  // Output: 4

fruits.forEach(fruit => console.log(fruit));
```

### 3.2 Objects
- Creating objects
- Accessing and modifying properties
- Object methods

Example:
```javascript
let person = {
    name: "Charlie",
    age: 30,
    greet: function() {
        console.log(`Hello, my name is ${this.name}`);
    }
};

person.greet();  // Output: Hello, my name is Charlie
```

## Week 4: Advanced Concepts

### 4.1 Scope and Closures
- Global and local scope
- Lexical scope
- Closures and their applications

Example:
```javascript
function outerFunction(x) {
    return function(y) {
        return x + y;
    };
}

const addFive = outerFunction(5);
console.log(addFive(3));  // Output: 8
```

### 4.2 This Keyword and Binding
- Understanding 'this'
- Function binding
- Arrow functions and 'this'

### 4.3 Prototypes and Inheritance
- Prototype chain
- Inheritance in JavaScript
- ES6 classes

Example:
```javascript
class Animal {
    constructor(name) {
        this.name = name;
    }

    speak() {
        console.log(`${this.name} makes a sound.`);
    }
}

class Dog extends Animal {
    speak() {
        console.log(`${this.name} barks.`);
    }
}

const dog = new Dog("Buddy");
dog.speak();  // Output: Buddy barks.
```

## Week 5: Asynchronous JavaScript

### 5.1 Callbacks
- Understanding asynchronous programming
- Callback functions
- Callback hell and its solutions

### 5.2 Promises
- Creating and consuming promises
- Chaining promises
- Error handling with promises

Example:
```javascript
function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Data fetched successfully");
        }, 2000);
    });
}

fetchData()
    .then(data => console.log(data))
    .catch(error => console.error(error));
```

### 5.3 Async/Await
- Using async/await syntax
- Error handling with try/catch
- Comparing async/await with promises

Example:
```javascript
async function getData() {
    try {
        const result = await fetchData();
        console.log(result);
    } catch (error) {
        console.error(error);
    }
}

getData();
```

## Week 6: DOM Manipulation and Events

### 6.1 Document Object Model (DOM)
- Understanding the DOM tree
- Selecting and modifying DOM elements
- Creating and removing elements

### 6.2 Events
- Event listeners
- Event propagation
- Common DOM events (click, submit, load)

Example:
```javascript
document.addEventListener("DOMContentLoaded", () => {
    const button = document.getElementById("myButton");
    button.addEventListener("click", () => {
        console.log("Button clicked!");
    });
});
```

## Week 7: Modern JavaScript Development

### 7.1 ES6+ Features
- Template literals
- Destructuring
- Spread and rest operators
- Modules (import/export)

### 7.2 Tools and Best Practices
- Package managers (npm, yarn)
- Bundlers (webpack, Rollup)
- Linters and formatters (ESLint, Prettier)
- Version control with Git

### 7.3 Introduction to Frontend Frameworks
- Overview of popular frameworks (React, Vue, Angular)
- Comparing vanilla JavaScript with framework-based development

## Week 8: Final Project

Students will work on a final project that incorporates the concepts learned throughout the course. This could be a small web application or an interactive website that demonstrates their understanding of JavaScript fundamentals and modern development practices.



#### References

Learn X in Y minutes 

* https://learnxinyminutes.com/docs/javascript/

Programming Language Explorations 

* https://rtoal.github.io/ple/
* https://www.learneroo.com/modules/64/nodes/350

JavaScript: The Good Parts 

* https://andersonguelphjs.github.io/OReilly_JavaScript_The_Good_Parts_May_2008.pdf

W3Schools:
* https://www.w3schools.com/js/default.asp

What is Document Object Model(DOM) 

* https://simplesnippets.tech/what-is-document-object-modeldom-how-js-interacts-with-dom/

https://eloquentjavascript.net/

https://domscripting.com/book/

JavaScript basics:

* https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/JavaScript_basics

Introducing JavaScript objects:

* https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects

Minimal Projects

* https://learnprogramming.online/

TypeScript - a superset of JS
* https://www.typescripttutorial.net/

