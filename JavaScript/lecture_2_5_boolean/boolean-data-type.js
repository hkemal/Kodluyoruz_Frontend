let isActive = false;
isActive = true;
console.log(isActive);

let userName;
let isUserName = Boolean(userName); //username var mı yok mu
console.log(isUserName);
console.log(Boolean("11"));

userName = "user";
//0,-0,null,false NaN, undefined,("")-> bunlarda false dönüyor
Boolean(0); //false
Boolean(-0); //false
Boolean(0.1); //true
Boolean(0 === 0); //true

Boolean(userName.length > 0); //true
