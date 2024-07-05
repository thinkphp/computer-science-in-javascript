## Event Delegation

Event delegation is an event-handling technique in JavaScript that leverages the concept of event bubbling (propagation) in the Document Object Model (DOM) to attach a single event listener to a parent element and dynamically handle events for its child elements, including those added later.

Here's a breakdown of the key aspects:

- Event Bubbling: When an event occurs on an element in the DOM, it first triggers on that element itself. Then, the event bubbles up through its ancestors in the DOM hierarchy until it reaches the document object.
- Event Delegation: Instead of attaching separate event listeners to each individual child element, you attach a single event listener to a higher-level parent element. Inside the event handler function, you use the event.target property to identify the specific element that actually triggered the event. This allows you to handle events for all current and future child elements that match a particular selector.




##### Benefits of Event Delegation

- Improved Performance: By attaching fewer event listeners, you reduce the overhead of managing numerous listeners, leading to better performance, especially when dealing with many elements.
- Efficient Handling of Dynamic Content: When new elements are added to the DOM (e.g., using JavaScript or AJAX), event delegation automatically includes them without needing to modify the event listener code.
- Cleaner and More Maintainable Code: You have a single point of control for handling events on a group of elements, making the code easier to read and maintain.
- In essence, event delegation allows you to write cleaner, more efficient, and more scalable event handling code in JavaScript.

