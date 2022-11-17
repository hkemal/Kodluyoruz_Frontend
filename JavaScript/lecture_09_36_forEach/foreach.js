// Array forEach Metotu
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/forEach
// https://www.w3schools.com/jsref/jsref_foreach.asp

const PRODUCTS = [
  "Laptop",
  "Phone",
  "Speaker",
  "Desktop PC",
  "Server",
  "Mouse",
  "Keyboard",
];

// PRODUCTS.forEach((product, index, array) => array[index] = product + " 111" )
PRODUCTS.forEach(
  (product, index, array) => (array[index] = `${product.toUpperCase()}`)
); // toUpperCase

console.log(PRODUCTS);

PRODUCTS.forEach((product) => console.log(product));
console.log("*************");
PRODUCTS.forEach((product, index) => console.log(`${index} ${product}`));
console.log("*************");
PRODUCTS.forEach((product, index, array) =>
  console.log(`${index} ${product} ${array} `)
);
console.log("*************");
PRODUCTS.forEach((product, index, array) => console.log(`${array[index]}`));
console.log("*************");
// PRODUCTS.forEach((product, index, array) => (array[index] = product + " 111"));
PRODUCTS.forEach((product) => console.log(product));
console.log("*************");
PRODUCTS.forEach((product) => console.log(product.toUpperCase()));
console.log("*************");

const productListDOM = document.getElementById("productList");
PRODUCTS.forEach((product) => {
  const liDOM = document.createElement("li");
  liDOM.innerHTML = product;
  productListDOM.appendChild(liDOM);
});
