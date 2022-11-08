// var ile değişken tanımlama
var serverNameVar = "api.kodluyoruz.com";
console.log(serverNameVar);

//let ile değişken tanımlama
let serverNameLet;
console.log(serverNameLet);

serverNameLet = "http://kodluyoruz.org";
console.log(serverNameLet);

//Hatalı kullanım
// console.log(fullname);

let fullname = "Hakan Yalçınkaya";
fullname = "Lorem Ipsum Dolor";
console.log(fullname);

//Birleştirme
fullname = fullname + " Yeni eklenen bilgi";
console.log(fullname);

fullname = "Sifirlandı";
fullname += " ve Yeni eklendi";
console.log(fullname);

//const ile değişkeni boş tanımlamya çalışmak
// const serverPassword;

//const ile değişkeni tanımlamak
const SERVER_PASSWORD = "asdfasfasd";
console.log(SERVER_PASSWORD);

//const ile değişkeni değiştirmeye çalışmak
// SERVER_PASSWORD += "sdfdasd"; hata verdi
// console.log(SERVER_PASSWORD);
