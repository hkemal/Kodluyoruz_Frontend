let email = "hakanyalcinkaya@gmail.com";
let firstName = "Hakan";
let lastName = "Yalcinkaya";

console.log(email.length);
console.log(firstName[0]);
console.log(firstName.charAt(0));

firstName = firstName.toUpperCase();
console.log(firstName);
console.log(firstName.toLocaleLowerCase());

console.log(email.search("@"));
console.log(email[15]);

email.search("olmayan"); //-1

let DOMAIN = email.slice(email.search("@") + 1);
console.log(DOMAIN);
console.log(DOMAIN.slice(0, DOMAIN.indexOf(".")));

email = email.replace("gmail.com", "kodluyoruz.org");
console.log(email);

email.includes("asdfa"); //false
email.includes("@"); //true

email.endsWith("kodluyoruz.org"); //true
console.log(email.endsWith("kodluyoruz.org"));

let fullName = `${firstName[0].toUpperCase()}${firstName
  .toLowerCase()
  .slice(1)} ${lastName[0].toUpperCase()}${lastName.toLowerCase().slice(1)}`;
console.log(fullName);
