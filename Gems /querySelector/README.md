```
<ul id="techList">
    <li class="item">
        <h2>Technologies</h2>
        <ul>
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>React</li>
          <li>Node.js</li>
        </ul>
     </li>
</ul>
```

```
const techList = document.getElementById('techList'); // Get the element with id "techList"
const h2Element = techList.querySelector('h2');
const textList = [];

const technologyList = techList.querySelectorAll('li ul li'); // Get all nested list items

technologyList.forEach(item => textList.push(item.textContent.trim())); // Extract and trim text content

console.log("h2 Text:", h2Element.textContent.trim());
console.log("List Items:", textList);
```
