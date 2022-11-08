let price = 100;
let tax = 0.18;
let priceTax = price * tax;
let total = price + priceTax;

console.log("Fiyat", price);
console.log("Kdv Oranı", tax);
console.log("Kdv Tutarı", priceTax);
console.log("Toplam Fiyat", total);

let counter = 320;
console.log(++counter);
console.log(--counter);
console.log((counter *= 10));

console.log((2 + 3) * 10);

//mod alma %
console.log(17 % 2);
//üs alma **
console.log(2 ** 5);
//aşağı yuvarlama Math.floor
console.log(Math.floor(1.7));
//yukarı yuvarlama Math.ceil
console.log(Math.ceil(1.7));
//yakına yuvarlama Math.round
console.log(Math.round(1.7));

let stringNumber = "11";
console.log(stringNumber);

let newNumber = Number(stringNumber);
console.log(newNumber);
