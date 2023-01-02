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

const numbers = [1, 3, 5, 7, 9];
let total = 0;
numbers.forEach((number) => (total += number));
numbers.forEach((number, index, arr) => {
  console.log(number);
  console.log(index);
  console.log(arr);
  console.log("***********");
});
//console.log(total);

const numbers2 = numbers.map((number) => number * 2);
console.log(numbers2);

let users = [
  {
    id: 1,
    name: "Tayfun",
    age: 29,
    gender: 1,
  },
  {
    id: 2,
    name: "Ahmet",
    age: 28,
    gender: 1,
  },
  {
    id: 3,
    name: "Mehmet",
    age: 27,
    gender: 1,
  },
  {
    id: 4,
    name: "Zerafet",
    age: 26,
    gender: 2,
  },
];

users = users.map((user) => {
  if (user.id === 2) {
    user.name = "Hakan";
  }
  return user;
});

console.log(users);

console.log(numbers.filter((number) => number > 3 && number < 9));

const woman = users.filter((user) => user.gender === 2);
console.log(woman);
const man = users.filter((user) => user.gender === 1 && user.age > 27);
console.log(man);

const total2 = numbers.reduce(
  (oldValue, currentValue) => oldValue + currentValue,
  0
);
console.log(total2);
console.log(users.every((user) => user.gender === 1));

console.log(users.some((user) => user.gender === 1));
console.log(users.some((user) => user.gender === 2));

console.log(numbers.find((number) => number > 3));
console.log(users.find((user) => user.id === 3));

console.log(users.findIndex((user) => user.id === 3));

console.log(users.sort((user) => user.id === 3));

const names = ["Tayfun", "Ahmet", "Mehmet"];
names.sort();
console.log(names);
names.sort((a, b) => a.localeCompare(b));
console.log(names);
names.sort((a, b) => b.localeCompare(a));
console.log(names);

const numberArr = [1, 11, 2, 21, 22, 23, 4, 5];
numberArr.sort((num1, num2) => num1 - num2);
console.log(numberArr);
numberArr.sort((num1, num2) => num2 - num1);
console.log(numberArr);

users.sort((a, b) => b.id - a.id);
console.log(users);
users.sort((a, b) => a.name.localeCompare(b.name));
console.log(users);
