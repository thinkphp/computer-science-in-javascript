// Storing data in localStorage
localStorage.setItem('username', 'JohnDoe');
localStorage.setItem('userAge', 30);

// Retrieving data from localStorage
const username = localStorage.getItem('username');
const userAge = localStorage.getItem('userAge');

console.log(username); // Output: JohnDoe
console.log(userAge);  // Output: 30

// Removing data from localStorage
localStorage.removeItem('username');

// Clearing all data from localStorage
localStorage.clear();
