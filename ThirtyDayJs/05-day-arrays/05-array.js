// syntax
const arr1 = Array();
// or
// let arr = new Array()
console.log(arr1); // []

// syntax
// This the most recommended way to create an empty list
const arr2 = [];
console.log(arr2);

////////////////////////////////
console.log("*****************");
////////////////////////////////

const numbers = [0, 3.14, 9.81, 37, 98.6, 100]; // array of numbers
const fruits = ["banana", "orange", "mango", "lemon"]; // array of strings, fruits
const vegetables = ["Tomato", "Potato", "Cabbage", "Onion", "Carrot"]; // array of strings, vegetables
const animalProducts = ["milk", "meat", "butter", "yoghurt"]; // array of strings, products
const webTechs = ["HTML", "CSS", "JS", "React", "Redux", "Node", "MongDB"]; // array of web technologies
const countries = ["Finland", "Denmark", "Sweden", "Norway", "Iceland"]; // array of strings, countries

// Print the array and its length

console.log("Numbers:", numbers);
console.log("Number of numbers:", numbers.length);

console.log("Fruits:", fruits);
console.log("Number of fruits:", fruits.length);

console.log("Vegetables:", vegetables);
console.log("Number of vegetables:", vegetables.length);

console.log("Animal products:", animalProducts);
console.log("Number of animal products:", animalProducts.length);

console.log("Web technologies:", webTechs);
console.log("Number of web technologies:", webTechs.length);

console.log("Countries:", countries);
console.log("Number of countries:", countries.length);

const arr3 = [
  "Asabeneh",
  250,
  true,
  { country: "Finland", city: "Helsinki" },
  { skills: ["HTML", "CSS", "JS", "React", "Python"] },
]; // arr containing different data types
console.log(arr3);

////////////////////////////////
console.log("*****************");
////////////////////////////////

let js = "JavaScript";
const charsInJavaScript = js.split("");

console.log(charsInJavaScript); // ["J", "a", "v", "a", "S", "c", "r", "i", "p", "t"]

let companiesString = "Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon";
const companies = companiesString.split(",");

console.log(companies); // ["Facebook", " Google", " Microsoft", " Apple", " IBM", " Oracle", " Amazon"]
let txt =
  "I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.";
const words = txt.split(" ");

console.log(words);
// the text has special characters think how you can just get only the words
// ["I", "love", "teaching", "and", "empowering", "people.", "I", "teach", "HTML,", "CSS,", "JS,", "React,", "Python"]

////////////////////////////////
console.log("*****************");
////////////////////////////////

const fruits1 = ["banana", "orange", "mango", "lemon"];
let firstFruit = fruits1[0]; // we are accessing the first item using its index

console.log(firstFruit); // banana

secondFruit = fruits1[1];
console.log(secondFruit); // orange

let lastFruit = fruits1[3];
console.log(lastFruit); // lemon
// Last index can be calculated as follows

let lastIndex = fruits1.length - 1;
lastFruit = fruits1[lastIndex];

console.log(lastFruit); // lemon

////////////////////////////////
console.log("*****************");
////////////////////////////////

// Methods to manipulate array
// There are different methods to manipulate an array.
// These are some of the available methods to deal with arrays:
// Array, length, concat, indexOf, slice, splice, join, toString,
// includes, lastIndexOf, isArray, fill, push, pop, shift, unshift

// Array:To create an array.
// fill: Fill all the array elements with a static value
// concat:To concatenate two arrays.
// Length:To know the size of the array
// indexOf:To check if an item exist in an array. If it exists it returns the index else it returns -1.
// lastIndexOf: It gives the position of the last item in the array. If it exist, it returns the index else it returns -1.
// includes:To check if an item exist in an array. If it exist it returns the true else it returns false.
// Array.isArray:To check if the data type is an array
// toString:Converts array to string
// join: It is used to join the elements of the array, the argument we passed in the join method will be joined in the array and return as a string. By default, it joins with a comma, but we can pass different string parameter which can be joined between the items.
// Slice: To cut out a multiple items in range. It takes two parameters:starting and ending position. It doesn't include the ending position.
// Splice: It takes three parameters:Starting position, number of times to be removed and number of items to be added.
// Push: adding item in the end. To add item to the end of an existing array we use the push method.
// pop: Removing item in the end.
// shift: Removing one array element in the beginning of the array.
// unshift: Adding array element in the beginning of the array.
// reverse: reverse the order of an array.
// sort: arrange array elements in ascending order. Sort takes a call back function, we will see how we use sort with a call back function in the coming sections.

//Array of arrays
const firstNums = [1, 2, 3];
const secondNums = [1, 4, 9];

const arrayOfArray = [
  [1, 2, 3],
  [1, 2, 3],
];
console.log(arrayOfArray[0]); // [1, 2, 3]

const frontEnd = ["HTML", "CSS", "JS", "React", "Redux"];
const backEnd = ["Node", "Express", "MongoDB"];
const fullStack = [frontEnd, backEnd];
console.log(fullStack); // [["HTML", "CSS", "JS", "React", "Redux"], ["Node", "Express", "MongoDB"]]
console.log(fullStack.length); // 2
console.log(fullStack[0]); // ["HTML", "CSS", "JS", "React", "Redux"]
console.log(fullStack[1]); // ["Node", "Express", "MongoDB"]
