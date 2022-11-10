let lastChild = document.querySelector("ul#list>li:last-child");
lastChild.innerHTML = "son öge değişti.";

let firstChild = document.querySelector("ul#list>li:first-child");
firstChild.innerHTML = "ilk öge değişti.";

let ulDOM = document.querySelector("ul#list");
let liDOM = document.createElement("li");
liDOM.innerHTML = "Kendi oluşturduğumuz Öge";

//ulDOM.append(liDOM); //en sona ekliyor
ulDOM.prepend(liDOM);
