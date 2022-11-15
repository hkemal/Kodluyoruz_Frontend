let price = "100";
let user = "hakan";

console.log(price == 10);
console.log(price == 100);

console.log(price === 10);
console.log(price === 100);

console.log(user != "guest");

console.log(!!2);

let username = prompt("Kullanici Adinizi Giriniz");

if (username.length > 0) {
  console.log(`Kullanici bilginiz : ${username}`);
} else {
  console.log(`Bilgi yok`);
}
