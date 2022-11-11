let userName = prompt("Kullanici Adiniz : ");
let age = prompt("Yasiniz : ");
let info = document.querySelector("#info");

if (userName && age >= 18) {
  info.innerHTML = "Ehliyet alabilirsiniz.";
} else if (!userName) {
  info.innerHTML = "Kullanici adiniz yok.";
} else if (!(age >= 18)) {
  info.innerHTML = "Yaş bilginiz yok veya 18 yaşindan kucuksunuz.";
}
