let fullname;
try {
  let firstName = "tayfun";
  let lastname = "erbilen";
  fullname = firstName + " " + lastname;
  // fullname = firstName + " " + surname;
  // throw "öylesine bir hata";
  throw new Error("bir hata var!");
} catch (error) {
  console.log("Bir cisim yaklaşiyor");
  console.log(error.name);
  console.log(error.message);
  console.table(error);
}
console.log(fullname);
console.log("********************");

let age = prompt("Kaç yaşindasin?");
try {
  if (age > 29) throw new Error("Yaşiniz büyük");
} catch {
  alert("Yaşiniz büyük");
}
