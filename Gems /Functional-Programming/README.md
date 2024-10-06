# Introduction to Functional Programming in JavaScript

## 1. What is Functional Programming?

Functional programming is a programming paradigm that treats computation as the evaluation of mathematical functions and avoids changing state and mutable data. It emphasizes:

- Immutability
- Pure functions
- Function composition
- Avoiding side effects

## 2. Key Concepts in Functional Programming

### 2.1 Pure Functions

Pure functions always produce the same output for the same input and have no side effects.

Example:
```javascript
// Pure function
function add(a, b) {
  return a + b;
}

// Impure function (relies on external state)
let count = 0;
function incrementCount() {
  count++;
  return count;
}
```

### 2.2 Immutability

Immutability means not changing data once it's created. Instead of modifying existing data, we create new data structures.

Example:
```javascript
// Mutable approach
const numbers = [1, 2, 3];
numbers.push(4); // Modifies the original array

// Immutable approach
const numbers = [1, 2, 3];
const newNumbers = [...numbers, 4]; // Creates a new array
```

### 2.3 Higher-Order Functions

Functions that can take other functions as arguments or return functions.

Example:
```javascript
function multiplyBy(factor) {
  return function(number) {
    return number * factor;
  }
}

const double = multiplyBy(2);
console.log(double(5)); // Output: 10
```

### 2.4 Function Composition

Building complex functions by combining simpler functions.

Example:
```javascript
const add5 = x => x + 5;
const multiply2 = x => x * 2;
const subtract3 = x => x - 3;

const compose = (...fns) => x => fns.reduceRight((y, f) => f(y), x);
const composedFunction = compose(subtract3, multiply2, add5);

console.log(composedFunction(10)); // Output: 27
// (10 + 5) * 2 - 3 = 27
```

## 3. Functional Programming Techniques in JavaScript

### 3.1 Map, Filter, and Reduce

These are powerful array methods that embrace functional programming principles.

```javascript
const numbers = [1, 2, 3, 4, 5];

// Map: Transform each element
const doubled = numbers.map(n => n * 2);

// Filter: Select elements based on a condition
const evens = numbers.filter(n => n % 2 === 0);

// Reduce: Accumulate values
const sum = numbers.reduce((acc, n) => acc + n, 0);
```

### 3.2 Currying

Transforming a function with multiple arguments into a sequence of functions, each with a single argument.

```javascript
const curry = (fn) => {
  return function curried(...args) {
    if (args.length >= fn.length) {
      return fn.apply(this, args);
    } else {
      return function(...args2) {
        return curried.apply(this, args.concat(args2));
      }
    }
  };
}

const add = curry((a, b, c) => a + b + c);
console.log(add(1)(2)(3)); // Output: 6
console.log(add(1, 2)(3)); // Output: 6
```

### 3.3 Recursion

Using a function that calls itself to solve problems.

```javascript
function factorial(n) {
  if (n <= 1) return 1;
  return n * factorial(n - 1);
}

console.log(factorial(5)); // Output: 120
```

## 4. Benefits of Functional Programming

- Easier to test and debug due to pure functions
- More predictable code behavior
- Better support for parallel/concurrent programming
- Improved code reusability

## 5. Challenges and Considerations

- Learning curve for developers used to imperative programming
- Potential performance overhead in some cases
- Not all problems are naturally suited to functional solutions

## 6. Functional Programming Libraries in JavaScript

- Ramda
- Lodash/FP
- Immutable.js

## Conclusion

Functional programming in JavaScript offers a powerful way to write clean, maintainable, and robust code. By embracing concepts like pure functions, immutability, and function composition, developers can create more predictable and easier-to-reason-about programs.
