let h1TagName = document.getElementsByTagName("h1");

[...h1TagName].forEach((element) => console.log(element.innerHTML));
console.log("****************");

let h1ClassName = document.getElementsByClassName("title-1");
console.log(h1ClassName);
console.log("****************");

const title = document.getElementById("title");
// title.style.color = "blue";
// title.style.backgroundColor = "yellow";
// title.title = "test baslik";
// title.className = "adana";
title.setAttribute("style", "color:blue; background-color:yellow");
title.setAttribute("title", "test baslik");
title.setAttribute("classList", "adana"); //eski class'ları eziyor
title.classList.add("adana"); //var olanın üstüne ekliyor
title.classList.remove("adana"); //class'ı kaldır
title.classList.toggle("adana"); //yoksa ekle varsa çıkart
title.textContent = "Yeni değer"; //düz yazı eklemek istersek
title.innerHTML = "Yeni değer <u>test</u>"; //html olarak eklemek istersek

console.log(title);
console.log("****************");

console.log(document.querySelector("#title"));
console.log("****************");

document.querySelectorAll(".title-1").forEach((item) => {
  console.log(item);
});
console.log("****************");

document.querySelectorAll("h1").forEach((item, index) => {
  if (index % 2 === 0) {
    item.style.color = "green";
    item.style.fontSize = "35px";
  } else {
    item.style.color = "yellow";
  }
});
