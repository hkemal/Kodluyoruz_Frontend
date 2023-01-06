console.log("30 days of Javascript");
console.log(30);
console.log(["tayfun", "erbilen", "prototurk"]);
console.log({
  name: "tayfun",
  surname: "erbilen",
});

console.log("Ben %d yasindayim ve %d yilinda dogdum", 27, 1996);

console.log("%c30 Days Of JavaScript", "color:green"); // log output is green
console.log(
  "%c30 Days%c %cOf%c %cJavaScript%c",
  "color:green",
  "",
  "color:red",
  "",
  "color:blue"
);

console.log(
  "%cDur! %cNaber?",
  "font-size:50px;font-family:Arial;color:red;text-shadow:0 0 10px rgba(255,255,255,0.3)",
  "color:blue"
);
console.log("******************************");
console.warn("uyari mesaji"); //uyrarı mesajı sarı
console.error("sen ne yaptin gardaş?"); //hata mesajı kırmızı
const names1 = ["Tayfun", "Mert", "Gökhan"];
console.table(names1); //tablo olarak consola yazıyor
console.table({
  name: "tayfun",
  surname: "erbilen",
});

console.time("calculate 1m array"); //işlemin ne kadar sürdüğünü ekrana basabiliriz
new Array(10e5).fill("abc").map((value, index) => index);
console.timeEnd("calculate 1m array"); //işlemin bittiği yerde kullanırız
console.info(10); //info mesajı gösterir

let a = 5;
let b = 6;
console.assert(a > b, "a b den büyük değil"); //kontrol amaçlı conditionlu durumlarda kullanabiliriz
console.assert(a < b, "a b den küçük"); // condition doğru ise bir şey yazmıyor

const names = ["Asabeneh", "Brook", "David", "John"];
const countries = [
  ["Finland", "Helsinki"],
  ["Sweden", "Stockholm"],
  ["Norway", "Oslo"],
];
const user = {
  name: "Asabeneh",
  title: "Programmer",
  country: "Finland",
  city: "Helsinki",
  age: 250,
};
const users = [
  {
    name: "Asabeneh",
    title: "Programmer",
    country: "Finland",
    city: "Helsinki",
    age: 250,
  },
  {
    name: "Eyob",
    title: "Teacher",
    country: "Sweden",
    city: "London",
    age: 25,
  },
  {
    name: "Asab",
    title: "Instructor",
    country: "Norway",
    city: "Oslo",
    age: 22,
  },
  {
    name: "Matias",
    title: "Developer",
    country: "Denmark",
    city: "Copenhagen",
    age: 28,
  },
];

console.group("Names"); //log u gruplayabiliyoruz
console.log(names);
console.log("bu mesaj gruba ait");
console.groupEnd();

console.group("Countries");
console.log(countries);
console.groupEnd();

console.group("Users");
console.log(user);
console.log(users);
console.groupEnd();

const test = () => {
  console.count("test called"); //metodun kaç defa çağrıldığını gösterir
};
test();
test();

//console.clear(); //console u temizler
