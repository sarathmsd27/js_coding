let arr = ["sarath", "santhosh", "bharath"];
arr.splice(1, 1, "vikcy");
console.log(arr);

const array = [1, 2, 3];
array.push(4, 5);
console.log(array);
// array is now [1, 2, 3, 4, 5]

const arrays = [1, 2, 3];
const poppedElement = arrays.pop();
console.log(arrays);
// poppedElement is 3, array is now [1, 2]

const arrayA = [1, 2, 3];
const shiftedElement = arrayA.shift();
console.log(arrayA);
// shiftedElement is 1, array is now [2, 3]


const arrayUnshift = [2, 3];
array.unshift(0, 1);
console.log(arrayUnshift);
// array is now [0, 1, 2, 3]

const arraySlice = [1, 2, 3, 4, 5];
const slicedArray = arraySlice.slice(2, 4);
console.log(arraySlice);
