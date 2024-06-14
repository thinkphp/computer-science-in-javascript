```
<script>
const fruits = ["apple", "banana", "orange", "mango"];
const itemToRemove = "banana";

// Find the index of the item to remove
const index = fruits.indexOf(itemToRemove);

// Check if the item exists in the array
if (index !== -1) {
  // Remove the item using splice
  fruits.splice(index, 1);
  console.log(fruits); // Output: ["apple", "orange", "mango"]
} else {
  console.log("Item not found in the array.");
}
</script>
```
