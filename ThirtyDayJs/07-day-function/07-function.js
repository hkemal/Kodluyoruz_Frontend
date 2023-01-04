function multiply(num1, num2) {
  let total = num1 + num2;
  return total;
}

console.log(multiply(1, 5));
//sınırsız parametre geçilen fonksiyon
function topla() {
  let total = 0;
  for (let i = 0; i < arguments.length; i++) {
    total += arguments[i];
  }
  return total;
}
console.log(topla(1, 2, 3, 4, 5));
/////////////////////////
//Anonymous and Expression Function
const sayHello = function (name) {
  return `Hello ${name}`;
};
console.log(sayHello("Kemal"));
/////////////////////////
//Self Invoking Functions
(function () {
  console.log("He yo!");
})();

(function (name) {
  console.log(`Hello ${name}!`);
})("Tayfun");
/////////////////////////
//Arrow Function
// function hello() {}
// const hello2 = () => {};

//Tek parametreli ve tek dönüş değerli arrow function
// function hello(name) {
//   return `Hello ${name}`;
// }
// const hello2 = (name) => `Hello ${name}`;

// console.log(hello("Kemal"));
// console.log(hello2("Kemal"));

//Tek parametreli ve tek dönüş değerli arrow function
function hello(name, surname) {
  return `Hello ${name} ${surname}`;
}
const hello2 = (name, surname) => `Hello ${name} ${surname}`;

console.log(hello("Kemal", "Doe"));
console.log(hello2("Kemal", "Doe"));

//spread operator ile çok paramtre geçme
const topla2 = (num1, ...numbers) => {
  console.log(num1);
  console.log(numbers);
};
topla2(1, 2, 3, 4, 5);
/////////////////////////
//Function with default parameters
function multiply(num1, num2 = 1) {
  return num1 * num2;
}
console.log(multiply(10));
console.log(multiply(10, 2));

//call vs invoke
function test() {
  console.log("Test fonksiyonu çalisti");
}
//call
test();

//invoke
function invoker(func) {
  func();
}
invoker(test);
