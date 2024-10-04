Here's a simple introduction to creating a custom web component using JavaScript. This example is designed for students and explains the key concepts in a clear manner.

### Overview
We'll create a custom button component that changes its text when clicked. This component will illustrate how to define a custom element, encapsulate styles, and manage events.

### Example: Custom Button Component

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Custom Button Component</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            background-color: #f4f4f4;
        }
        my-button {
            cursor: pointer;
        }
    </style>
</head>
<body>

    <my-button></my-button>

    <script>
        class MyButton extends HTMLElement {
            constructor() {
                super(); // Call the constructor of the HTMLElement class
                this.attachShadow({ mode: 'open' }); // Create a shadow root
                this.shadowRoot.innerHTML = `
                    <style>
                        button {
                            padding: 10px 20px;
                            background-color: #007bff;
                            color: white;
                            border: none;
                            border-radius: 5px;
                            font-size: 16px;
                            cursor: pointer;
                        }
                        button:hover {
                            background-color: #0056b3;
                        }
                    </style>
                    <button>Click me!</button>
                `;
            }

            connectedCallback() {
                // This method is called when the element is added to the DOM
                const button = this.shadowRoot.querySelector('button');
                button.addEventListener('click', () => {
                    button.textContent = button.textContent === 'Clicked!' ? 'Click me!' : 'Clicked!';
                });
            }

            disconnectedCallback() {
                // Cleanup if necessary when the element is removed from the DOM
                const button = this.shadowRoot.querySelector('button');
                button.removeEventListener('click', this.handleClick);
            }
        }

        // Define the new element
        customElements.define('my-button', MyButton);
    </script>

</body>
</html>
```

### Explanation of the Code

1. **HTML Structure**:
   - The `<my-button></my-button>` tag is where our custom component will be used in the HTML.

2. **JavaScript Class**:
   - `class MyButton extends HTMLElement`: This line defines a new class called `MyButton` that extends the built-in `HTMLElement` class. This allows us to create a custom HTML element.
   
3. **Constructor**:
   - `constructor()`: This method initializes the component. Inside it, we create a shadow root using `this.attachShadow({ mode: 'open' })`. This shadow root will encapsulate the styles and markup for our button.
   - `this.shadowRoot.innerHTML`: We define the inner HTML of the shadow root, which includes styles for the button and the button itself.

4. **connectedCallback()**:
   - This lifecycle method is called when the custom element is added to the DOM. Here, we attach a click event listener to the button. When the button is clicked, it toggles its text between "Click me!" and "Clicked!".

5. **disconnectedCallback()**:
   - This lifecycle method is called when the element is removed from the DOM. It is a good practice to clean up any event listeners to avoid memory leaks.

6. **Define Custom Element**:
   - `customElements.define('my-button', MyButton)`: This line registers the new custom element with the name `my-button`. 

### How to Use:
- Simply open the HTML file in a web browser, and you will see the button. Clicking the button will change its text, demonstrating the interactivity of the custom component.

### Conclusion:
This simple custom button component is a great starting point for students to understand how custom elements work in JavaScript. They can expand on this foundation by adding more features or  creating more complex components!


#### References

https://developer.mozilla.org/en-US/docs/Web/API/Web_components/Using_custom_elements
