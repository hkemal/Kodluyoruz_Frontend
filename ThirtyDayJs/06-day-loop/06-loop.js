for (let i = 5; i >= 0; i--) {
  console.log(i);
}

const countries = ["Finland", "Sweden", "Denmark", "Norway", "Iceland"];
const newArr = [];
for (let i = 0; i < countries.length; i++) {
  newArr.push(countries[i].toUpperCase());
}
console.log(newArr);

const numbers = [1, 2, 3, 4, 5];
let sum = 0;
for (let i = 0; i < numbers.length; i++) {
  sum = sum + numbers[i]; // can be shorten, sum += numbers[i]
}

console.log(sum);

const numbers1 = [1, 2, 3, 4, 5];
const newArr1 = [];
let sum1 = 0;
for (let i = 0; i < numbers1.length; i++) {
  newArr1.push(numbers1[i] ** 2);
}

console.log(newArr1);

const countries2 = ["Finland", "Sweden", "Norway", "Denmark", "Iceland"];
const newArr2 = [];
for (let i = 0; i < countries2.length; i++) {
  newArr2.push(countries2[i].toUpperCase());
}

console.log(newArr2);

let i = 0;
while (i <= 5) {
  console.log(i);
  i++;
}

let j = 0;
do {
  console.log(i);
  j++;
} while (j <= 5);

let names = ["Hasan", "Ahmet", "Mehmet", "Hüseyin"];
for (let name of names) {
  console.log(name);
}

//break döngüyü kırar
//continue o anki iterasyonu atlar
