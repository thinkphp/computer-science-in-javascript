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

  
