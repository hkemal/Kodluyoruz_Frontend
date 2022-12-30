const func = (number) => number ** 2;

function cube(cb, number) {
  return cb(number) * number;
}

//console.log(cube(func, 3));

const a = (s1) => {
  const b = (s2) => {
    const c = (s3) => {
      return s1 + s2 + s3;
    };
    return c;
  };
  return b;
};

//console.log(a(5)(10)(15));

const numbers = [1, 3, 5, 7, 9];
let total = 0;
numbers.forEach((number) => (total += number));
//console.log(total);

function sayHello() {
  console.log("Hello");
}
const interval = setInterval(sayHello, 1000);
//clearInterval

setTimeout(() => {
  clearInterval(interval);
  console.log("interval iptal edildi");
}, 5000);

function sayWorld() {
  console.log("World");
}
const timeout = setTimeout(sayWorld, 5000);
//clearTimeout

setTimeout(() => {
  clearTimeout(timeout);
  console.log("timeout işlemi iptal edildi");
}, 3000);
