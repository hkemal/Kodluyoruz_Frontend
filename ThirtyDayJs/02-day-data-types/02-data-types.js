let numOne = 3;
let numTwo = 3;

console.log(numOne == numTwo); // true

let js = "JavaScript";
let py = "Python";

console.log(js == py); //false

let lightOn = true;
let lightOff = false;

console.log(lightOn == lightOff); // false

let nums = [1, 2, 3];
nums[0] = 10;

console.log(nums); // [10, 2, 3]

let numbers = [1, 2, 3];

console.log(nums == numbers); // false

let userOne = {
  name: "Asabeneh",
  role: "teaching",
  country: "Finland",
};

let userTwo = {
  name: "Asabeneh",
  role: "teaching",
  country: "Finland",
};

console.log(userOne == userTwo); // false

numbers = nums;

console.log(nums == numbers); // true

userTwo = userOne;

console.log(userOne == userTwo); // true

//Numbers
let age = 35;
const gravity = 9.81; // we use const for non-changing values, gravitational constant in  m/s2
let mass = 72; // mass in Kilogram
const PI = 3.14; // pi a geometrical constant

// More Examples
const boilingPoint = 100; // temperature in oC, boiling point of water which is a constant
const bodyTemp = 37; // oC average human body temperature, which is a constant

console.log(age, gravity, mass, PI, boilingPoint, bodyTemp);

//Math Object
PI = Math.PI;

console.log(PI); // 3.141592653589793

// Rounding to the closest number
// if above .5 up if less 0.5 down rounding

console.log(Math.round(PI)); // 3 to round values to the nearest number

console.log(Math.round(9.81)); // 10

console.log(Math.floor(PI)); // 3 rounding down

console.log(Math.ceil(PI)); // 4 rounding up

console.log(Math.min(-5, 3, 20, 4, 5, 10)); // -5, returns the minimum value

console.log(Math.max(-5, 3, 20, 4, 5, 10)); // 20, returns the maximum value

const randNum = Math.random(); // creates random number between 0 to 0.999999
console.log(randNum);

// Let us  create random number between 0 to 10

const num = Math.floor(Math.random() * 11); // creates random number between 0 and 10
console.log(num);

//Absolute value
console.log(Math.abs(-10)); // 10

//Square root
console.log(Math.sqrt(100)); // 10

console.log(Math.sqrt(2)); // 1.4142135623730951

// Power
console.log(Math.pow(3, 2)); // 9

console.log(Math.E); // 2.718

// Logarithm
// Returns the natural logarithm with base E of x, Math.log(x)
console.log(Math.log(2)); // 0.6931471805599453
console.log(Math.log(10)); // 2.302585092994046

// Returns the natural logarithm of 2 and 10 respectively
console.log(Math.LN2); // 0.6931471805599453
console.log(Math.LN10); // 2.302585092994046

// Trigonometry
Math.sin(0);
Math.sin(60);

Math.cos(0);
Math.cos(60);

//Strings
// Concatenating Using Addition Operator
let space = " ";
let firstName = "Asabeneh";
let lastName = "Yetayeh";
let country = "Finland";
let city = "Helsinki";
let language = "JavaScript";
let job = "teacher";
let age = 250;

let fullName = firstName + space + lastName;
let personInfoOne = fullName + ". I am " + age + ". I live in " + country; // ES5 string addition

console.log(personInfoOne);

// \n: new line
// \t: Tab, means 8 spaces
// \\: Back slash
// \': Single quote (')
// \": Double quote (")

// Template Literals (Template Strings)
console.log(`The sum of 2 and 3 is 5`); // statically writing the data
let a = 2;
let b = 3;
console.log(`The sum of ${a} and ${b} is ${a + b}`); // injecting the data dynamically

// String Methods
// length: The string length method returns the number of characters in a string included empty space.
// Accessing characters in a string: We can access each character in a string using its index. In programming, counting starts from 0. The first index of the string is zero, and the last index is the length of the string minus one.
// toUpperCase(): this method changes the string to uppercase letters.
// toLowerCase(): this method changes the string to lowercase letters.
// substr(): It takes two arguments, the starting index and number of characters to slice.
// substring(): It takes two arguments, the starting index and the stopping index but it doesn't include the character at the stopping index.
// split(): The split method splits a string at a specified place.
// trim(): Removes trailing space in the beginning or the end of a string.
// includes(): It takes a substring argument and it checks if substring argument exists in the string. includes() returns a boolean. If a substring exist in a string, it returns true, otherwise it returns false.
// replace(): takes as a parameter the old substring and a new substring.
// charAt(): Takes index and it returns the value at that index
// charCodeAt(): Takes index and it returns char code (ASCII number) of the value at that index
// indexOf(): Takes a substring and if the substring exists in a string it returns the first position of the substring if does not exist it returns -1
// lastIndexOf(): Takes a substring and if the substring exists in a string it returns the last position of the substring if it does not exist it returns -1
// concat(): it takes many substrings and joins them.
// startsWith: it takes a substring as an argument and it checks if the string starts with that specified substring. It returns a boolean(true or false).
// endsWith: it takes a substring as an argument and it checks if the string ends with that specified substring. It returns a boolean(true or false).
// search: it takes a substring as an argument and it returns the index of the first match. The search value can be a string or a regular expression pattern.
// match: it takes a substring or regular expression pattern as an argument and it returns an array if there is match if not it returns null. Let us see how a regular expression pattern looks like. It starts with / sign and ends with / sign.
// repeat(): it takes a number as argument and it returns the repeated version of the string.

//Checking Data Types
// Different javascript data types
// Let's declare different data types

let firstName1 = "Asabeneh"; // string
let lastName1 = "Yetayeh"; // string
let country1 = "Finland"; // string
let city1 = "Helsinki"; // string
let age1 = 250; // number, it is not my real age, do not worry about it
let job1; // undefined, because a value was not assigned

console.log(typeof "Asabeneh"); // string
console.log(typeof firstName1); // string
console.log(typeof 10); // number
console.log(typeof 3.14); // number
console.log(typeof true); // boolean
console.log(typeof false); // boolean
console.log(typeof NaN); // number
console.log(typeof job1); // undefined
console.log(typeof undefined); // undefined
console.log(typeof null); // object

// Changing Data Type (Casting)
let num1 = "10";
let numInt = parseInt(num1);
console.log(numInt); // 10

let num2 = "9.81";
let numFloat = parseFloat(num2);

console.log(numFloat); // 9.81

let num3 = 9.81;
let numInt3 = parseInt(num3);

console.log(numInt); // 9
