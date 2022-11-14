let firstName = "Lorem";

function greetings(firstName = "", lastName = "") {
  console.log(`Merhaba ${firstName}`);
  console.log(`Merhaba ${firstName} ${lastName}`);
}

console.log(firstName); //değişken
greetings(); //parametresiz
greetings("Kemal"); //parametreli

greetings("Parametre");

function greetings2(firstName = "", lastName = "") {
  let info = `Merhaba ${firstName} ${lastName}`;
  return info;
}

let greetings2Info = greetings2("Ad", "Soyad");

console.log(greetings2Info);

function domIdWriteInfo(id, info) {
  let domObject = document.querySelector(`#${id}`);
  domObject.innerHTML = info;
}

domIdWriteInfo("greeting", greetings2("Lorem", "Ipsum"));

let htmlInfo = `<span style="color:red">Color Red</span>`;
domIdWriteInfo("info", htmlInfo);
