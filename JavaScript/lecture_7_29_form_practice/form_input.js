let formDom = document.querySelector("#userForm");
formDom.addEventListener("submit", formSubmit);

function formSubmit() {
  event.preventDefault(); //default işlemi engelledik
  console.log("işlem gerçekleşti");
  let scoreInputDom = document.querySelector("#score");
  console.log(scoreInputDom.value);
  localStorage.setItem("score", scoreInputDom.value);
}
