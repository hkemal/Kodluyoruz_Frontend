//getElementsByTagName
// let h2 = document.getElementsByTagName("h2");
// console.log(h2.title.innerHTML);

//getElementById
let title = document.getElementById("title");
title.innerHTML = "Değişen Bilgi";
console.log(title.innerHTML);

//querySelector
// let link = document.querySelector("ul#list>li>a");
let link = document.querySelector("#kodluyoruzLink");
link.innerHTML += " değişti";
link.style.color = "red";
link.classList.add = "btn";
console.log(link.innerHTML);
