//SET
const names = new Set(["Tayfun", "Ahmet", "Mehmet"]);
console.log(names);
names.add("Kemal");
names.add("Kemal");
names.add("KEMAL");

for (let name of names) {
  console.log("Ad", name);
}

[...names].map((name) => console.log(name.charAt(0))); //set'te map ve filter'ı bu şekilde kullanabiliyoruz

console.log(names.size); //length ile değil size ile kaç eleman olduğunu veriyor.

console.log(names.has("Kemal")); //Bu eleman set'in içinde var mı

// names.clear();//set'in içeriğini siliyor
//array'deki duplice kayıtları tek değere düşürmek için kullanılabilir

//Union Sets
let a = [1, 2, 3, 4, 5];
let b = [4, 5, 6, 7];
let c = [...a, ...b];

let cSet = new Set(c);
console.log(cSet);
/////////////////////

//Intersection Of Sets
let aSet = new Set(a);
let bSet = new Set(b);
let intersectionSet = a.filter((num) => bSet.has(num));
console.log(intersectionSet);

//Difference Of Sets
let differenceSet = a.filter((num) => !bSet.has(num));
console.log(differenceSet);
console.log("******************");
//MAP
const map = new Map();
map.set("1", "str");
map.set(1, "num1");
map.set(true, "bool1");
map.set(false, "bool2");

console.log(map);
console.log(map.get(false));
console.log(map.get("1"));
console.log(map.size); //mapin kaç elemanlı olduğunu gösterir

const user1 = {
  userName: "Tayfun",
};

const user2 = {
  userName: "Ahmet",
};

const mapUser = new Map();
mapUser.set(user1, 10);
mapUser.set(user2, 20);

console.log(mapUser.get(user1));

// mapUser.set(user1, 10).set(user2, 20); //chaining
console.log(mapUser.keys());
console.log(mapUser.values());
console.log(mapUser.entries());

user1.userLastName = "Erbilen";
for (let u of mapUser.keys()) {
  console.log(u);
}

console.log("***************");
[...mapUser.values()].forEach((item) => console.log(item));
[...mapUser].forEach(([key, val]) =>
  console.log("key - ", key, "value - ", val)
);
console.log("***************");
const user1Map = Object.entries(user1); //Key value pair'leri dizi olarak verir
console.log(user1Map);
console.log(Object.fromEntries(user1Map.entries())); //Dizi olarak gelen key value pair'leri map yapar
