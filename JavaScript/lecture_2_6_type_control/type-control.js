let price = 100;
let stringPrice = "11";
let hasPassword = true;

console.log("price", typeof price);

console.log("stringPrice", typeof stringPrice);

console.log("hasPassword", typeof hasPassword);

//string bilgileri int ve float'a dönüştürmek
let numberString = "200";
console.log(typeof numberString);
let number = parseInt(numberString);
console.log(number, typeof number);

let numberString1 = "1";
console.log(typeof numberString1);
let number1 = Number(numberString1);
console.log(number1, typeof number1);

let numberString2 = "1.4";
console.log(typeof numberString2);
let number2 = parseFloat(numberString2);
console.log(number2, typeof number2);

//number veriyi stringe çevirmek
let number3 = 45;
let number3String = number.toString();
console.log(typeof number3String);

console.log(typeof 42);
// beklenen output: "number"

console.log(typeof 'kodluyoruz');
//beklenen output: "string"

console.log(typeof true);
// beklenen output: "boolean"

console.log(typeof Variable);
// beklenen output: "undefined"

//isInteger( ) yöntemi, sayıların tam sayı olup olmadığını belirler.
Number.isInteger(123) //true
Number.isInteger(-123) //true
Number.isInteger(0.5) //false
//isFinite () yöntemi, bir değerin sonlu bir sayı olup olmadığını belirler.
Number.isFinite(0) //true
Number.isFinite('123') //false
Number.isFinite('Hello') //false
Number.isFinite(-Infinity) //false
Number.isFinite(0 / 0) //false
// Number.isNaN () yöntemi, bir değerin NaN (Not-A-Number) olup olmadığını belirler.

Number.isNaN(123) //false
Number.isNaN(0) //false
Number.isNaN('123') //false
Number.isNaN('Hello') //false
Number.isNaN('') //false
Number.isNaN(true) //false
Number.isNaN(undefined) //false
Number.isNaN('NaN') //false
Number.isNaN(NaN) //true

String(123) // “123”
ParseInt(“123”) // 12

If(3<5) // true
console.log(" "+123) // “123”
12/"6" // 2

String(123) // “123” explicit
123 + '' // “123”    implicit

String(123) // “123”
String(-12.3) // “-12.3”
String(null) // “null”
String(undefined) // “undefined”
String(true) // “true”
String(false) // “false”

String(Symbol('my symbol')) // 'Symbol(my symbol)'
'' + Symbol('my symbol') // TypeError is thrown

Boolean('') // false
Boolean(0) // false 
Boolean(-0) // false
Boolean(NaN) // false
Boolean(null) // false
Boolean(undefined) // false
Boolean(false) // false

// veya “||” operatörü ilk bulduğu true değeri döner
var a= 2 || s || 4 || 5; // 2
// eğer true dönecek değer bulamazsa en son buluğu false değeri döndürür
var b=0 || ”” || false || -0 || 0 // 0
var c= 0 ||  “”  ||  “ 123 ” || 4 ; // ”123” dolu string true dönecektir
// ve ”&&” operatörü ilk bulduğu false değeri döner.
var d=2 && 3 && 0 && 5 && 7; // 0
// eğer false dönecek değer bulamazsa en son buluğu true değeri döndürür
var e= 2 && 3 && 5 && 7 // 7

console.log(Boolean({})) // true
console.log(Boolean([])) // true
console.log(Boolean([1,2,3])) // true
console.log(Boolean({13:234})) //true

// Primitif tipler için:

// Eğer değer(input) primitif ise herhangi bir işlem yapma, dön.
// input.toString() metodunu çağır(Call). Eğer sonuç primitif ise dön.
// input.valueOf() metodunu çağır(Call). Eğer sonuç primitif ise dön.
// Ne input.toString() ne de input.valueOf() primitif sonuç vermiyorsa; TypeError fırlat.
// Referans tipler için:

// input.toString() metodunu çağır(Call). Eğer sonuç primitif ise dön.
// input.valueOf()metodunu çağır(Call). Eğer sonuç primitif ise dön.
// Ne input.toString() ne deinput.valueOf() primitif sonuç vermiyorsa; TypeError fırlat.
// NOT: == operatörünün (lose equality- zayıf eşitlik) farklı iki tipteki a ve b değişkenleri için pratikte nasıl farklı davrandığını, JavaScript Comparison Table ’de gösteren matristen görebilirsiniz.
