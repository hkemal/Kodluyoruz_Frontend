let userName = prompt("Kullanici Bilginizi Yaziniz : ");
let info = document.querySelector("#info");

info.innerHTML = `${userName ? userName : "Kullanici Bilginiz Bulunamadi"}`;
