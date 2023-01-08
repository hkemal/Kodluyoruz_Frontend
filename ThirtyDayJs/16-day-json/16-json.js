let sampleJSON = `[
  {
    "name": "John",
    "surname": "Doe"
  },
  {
    "name": "Jane",
    "surname": "Doe"
  },
  {
    "name": "Bob",
    "surname": "Marley"
  }
]
`;
try {
  console.log(typeof sampleJSON);
  //JSON => object
  let users = JSON.parse(sampleJSON, (key, value) => {
    return key === "name" ? value.toUpperCase() : value;
  });
  console.log(typeof users);
  console.log(users);
} catch (err) {
  console.log(err.message);
}

let categories = [
  { name: "css", count: 5 },
  { name: "javascript", count: 16 },
  { name: "html", count: 1 },
];

//object => JSON
let categoriesJSON = JSON.stringify(categories);
console.log(categoriesJSON);
//sadece countları al ve satır başından 4 karakter boşluk bırak
let countJSON = JSON.stringify(categories, ["count"], 4);
console.log(countJSON);
