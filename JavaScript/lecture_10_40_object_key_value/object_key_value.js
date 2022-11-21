let laptop1 = {
  brand: "Apple",
  model: "Macbook",
  "2kg": 2,
  modelName: "Macbook Pro",
};

console.log(laptop1);
console.log(laptop1.brand);
console.log(laptop1.model);
console.log(laptop1["2kg"]);
console.log(laptop1.modelName);

laptop1.brand = "Mac";
laptop1["brand"] = "Mac";
console.log(laptop1);

laptop1.version = "10.15.7";
console.log(laptop1);

keys = Object.keys(laptop1);
console.log(keys);
console.log(Object.keys(laptop1));

keys.forEach((key) => {
  console.log(key);
  console.log(laptop1[key]);
  console.log("*********");
});

values = Object.values(laptop1);
values.forEach((value) => {
  console.log("value : ", value);
});
