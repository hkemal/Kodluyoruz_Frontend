let formDom = document.querySelector("#userForm");
formDom.addEventListener("submit", formSubmit);

function formSubmit() {
  event.preventDefault(); //default işlemi engelledik
  console.log("işlem gerçekleşti");
}
