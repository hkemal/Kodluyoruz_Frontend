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
