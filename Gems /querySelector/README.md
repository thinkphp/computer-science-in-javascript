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

#### Method1
```
const techList = document.getElementById('techList'); // Get the element with id "techList"
const h2Element = techList.querySelector('h2');
const textList = [];

const technologyList = techList.querySelectorAll('li ul li'); // Get all nested list items

technologyList.forEach(item => textList.push(item.textContent.trim())); // Extract and trim text content

console.log("h2 Text:", h2Element.textContent.trim());
console.log("List Items:", textList);
```


#### Method2
```
const techList = document.getElementById('techList');
const h2Element = techList.getElementsByTagName('li')[0].getElementsByTagName('h2')[0];
const technologyList = techList.getElementsByTagName('li')[0].getElementsByTagName('ul')[0].getElementsByTagName('li');

const textList = [];
for (let i = 0; i < technologyList.length; i++) {
  textList.push(technologyList[i].textContent.trim());
}

console.log("h2 Text:", h2Element.textContent.trim());
console.log("List Items:", textList);

```
