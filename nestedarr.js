function formatArray(arr) {
  let strings = [];
  let numbers = [];

  arr.forEach((item) => {
    if (typeof item === "string") {
      strings.push(item);
    } else if (typeof item === "number") {
      numbers.push(item);
    }
  });

  // Return array of arrays, handling null case separately
  return [strings, numbers, arr.includes(null) ? null : []];
}

let data = ["sarath", "santhosh", "nithish", 1, 2, 3, null];
let formattedData = formatArray(data);
console.log(formattedData);

/*JavaScript supports several types of loops for iterating over
 arrays, objects, and performing repetitive tasks. Here's a list of commonly used loops in JavaScript:*/

/*for loop: Used to iterate a block of code a fixed number of times.
javascript
Copy code
for (initialization; condition; increment/decrement) {
    // code to be executed
}

for...in loop: Used to iterate over the enumerable properties of an object.
javascript
Copy code
for (variable in object) {
    // code to be executed
}

for...of loop: Introduced in ES6, used to iterate over iterable objects like arrays, strings, maps, sets, etc.
javascript
Copy code
for (variable of iterable) {
    // code to be executed
}

while loop: Continuously executes a block of code while a specified condition is true.
javascript
Copy code
while (condition) {
    // code to be executed
}

do...while loop: Similar to a while loop, but the code block is executed once before checking the condition.
javascript
Copy code
do {
    // code to be executed
} 

while (condition);
Each of these loops has its specific use cases and syntax. Choosing the right loop depends
 on the context and requirements of your code*/
