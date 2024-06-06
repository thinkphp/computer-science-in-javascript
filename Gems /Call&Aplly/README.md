### Call & Apply

The differences between call and apply in JavaScript along with illustrative examples:

- in JS , both call and apply are methods that allow you to invoke a function with a specific context this and arguments.
- are essential for achieving flexibility in function calls and manipulating how functions behave.

  #### Key differences

  - call: takes arguments individually after the this argument
  - apply: takes arguments as a single array after the this argument.
 
  #### Similarities

  - both change the this value inside the function being called
  - both return the result of executing the function
  
  #### When to use Which

  - call: prefer call when you have a clear set of arguments that you want to pass directly. Its generally more readable for a smaller number of arguments.
  - apply: choose apply when you have an existing array of arguments that you want to use or if you need more dynamic argument handling.

   #### Examples:

  1. Changing this context:

  ```html
  function greet(message) {
    console.log(message + ', ' + this.name)
  }

  const person = {name: 'David'}
  greet.call(person, 'Hello') //output: Hello, David!
  ```

2. Borrowing a method:

```
    function sum(a, b) {
           return a + b 
    }

    const numbers = {num1: 5, num2: 3}
    const sumResult = sum.call(null, numbers.num1, numbers.num2) //output: 8 
```
  
3. Using default this (non-string mode)

```
     function identify() {
           console.log(thi)
     }

identify.call() //output: window object
```

4. Simulating varargs (variable arguments)

```
      function printArgs() {
               for(const arg of arguments) {
                      console.log(arg)  
               }
      }

      const args = [1,2,3,4,'five']
      printArgs.call(null, ...args) //1,2,3,4, five
```

 5. Creading a bound function indirect call

 ```
      function multiply(a, b) {
               return a * b
      }

       const multiplyBy3 = multiply.call(null, 3)
       const product = multiplyBy3(5)  //output: 15
 ```
