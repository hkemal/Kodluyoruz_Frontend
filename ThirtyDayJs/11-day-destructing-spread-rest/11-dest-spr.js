// Destructing -> Şeklini bozma
// Spread -> Dağılma
// Rest -> Talanın tamamı

const numbers = [10, 12, 14];

// Destructing
//const [number1, number2] = numbers;
const [number1, number2, number3] = [10, 12, 14];
//const [number1, , number3] = [10, 12, 14]; => 12 yi almak istemiyorsak bu şekilde kullanmamız
console.log(numbers[0]); //10
console.log(number1); //10

console.log(numbers[1]); //12
console.log(number2); //12

console.log(numbers[2]);

const fullStack = [
  ["HTML", "CSS", "JS", "React"],
  ["Node", "Express", "MongoDB"],
];
const [frontEnd, backEnd] = fullStack;
console.log(frontEnd);
console.log(backEnd);

const [[firstFrontEndTech, secondFrontEndTech], [firstBackEndTech]] = fullStack;
console.log(firstFrontEndTech);
console.log(secondFrontEndTech);
console.log(firstBackEndTech);

//rest(dizinin geri kalan elemanları) and spread(...)
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let [num1, num2, num3, ...rest] = nums;

console.log(num1, num2, num3);
console.log(rest);

const countries = [
  ["Finland", "Helsinki"],
  ["Sweden", "Stockholm"],
  ["Norway", "Oslo"],
  ["Turkey", "Ankara"],
];

for (let [country, city] of countries) {
  console.log(`Ülke: ${country} - Şehir: ${city}`);
}

//Destructuring Object(dışarı çıkartırken property'nin birebir ismi ile çıkartmamız lazım)
const user = {
  name: "Tayfun",
  surname: "Erbilen",
  age: 29,
  pet: {
    cats: ["Asil"],
    dogs: ["Monti"],
  },
  skills: ["php", "css", "js"],
  hobbies: ["reading"],
};

const { surname } = user;
console.log(surname);

const { name: isim } = user; //farklı isimde kullanmak istersek
console.log(isim);

const { adana = "ADANA" } = user; //Default değer atayabiliyoruz,değer yoksa bu default değer dönüyor
console.log(adana);

/////////////////////
//Object parameter without destructuring
function multiply([number1, number2]) {
  return number1 * number2;
}

const numberArr = [2, 3];
console.log(multiply(numberArr));

// function showUserInfo(user) {
//   return `Merhaba, ben ${user.name} ${user.surname}, ${user.age} yasindayim ve ${user.pet.cats.length} kedim ve ${user.pet.dogs.length} kopegim var.`;
// }
//Bunun yerine şu şekilde yazabiliriz
// const {
//   pets: { cats: kediler, dogs: kopekler },
// } = user;
function showUserInfo({
  name,
  surname,
  age,
  pet: { cats, dogs },
  skills: [skill1, ...otherSkills],
  ...others
}) {
  console.log(skill1);
  console.log(otherSkills);
  console.log(others);
  return `Merhaba, ben ${name} ${surname}, ${age} yasindayim ve ${cats.length} kedim ve ${dogs.length} kopegim var.`;
}

console.log(showUserInfo(user));

////////////////////////////////
//Spread operator to copy object
//Copy Array
const numberList = [1, 3, 5, 6, 7];
let copyNumberList = [...numberList];
console.log(copyNumberList);
//Copy Object
const copyUser = { ...user };
console.log(copyUser);
//Modifying during copy object
const copyUser1 = { ...user, name: "Ahmet" };
console.log(copyUser1);
//Spread ile dizinin başına ve sonuna eleman ekleme
console.log([0, ...numberList, 54]);
