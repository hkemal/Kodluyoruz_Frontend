const buttonDOM = document.getElementById("btn-1");

// buttonDOM.addEventListener("event", function (e) {});
// buttonDOM.addEventListener("event", (e) => {});

buttonDOM.addEventListener("click", function (e) {
  console.log("Butona tikladin");
});

function clickHandle(e) {
  // console.log(e);
  console.log(e.getAttribute("id"));
  console.log("Butona mi tikladin gardaş");
}

buttonDOM.onclick = (e) => {
  console.log(e);
};

//click => tıklandığında(başına on getirerek taglar'a attibute olarak da atayabiliyoruz)
//dblclick => çift tıklandiğinda
//mouseenter => fare üzerine geldiğinde

// click - when the element clicked
// dblclick - when the element double clicked
// mouseenter - when the mouse point enter to the element
// mouseleave - when the mouse pointer leave the element
// mousemove - when the mouse pointer move on the element
// mouseover - when the mouse pointer move on the element
// mouseout -when the mouse pointer out from the element
// input -when value enter to input field
// change -when value change on input field
// blur -when the element is not focused
// keydown - when a key is down
// keyup - when a key is up
// keypress - when we press any key
// onload - when the browser has finished loading a page

const img = document.querySelector("img");
img.style.opacity = 0;
img.addEventListener("load", function () {
  console.log("gorsel yuklendi!");
  img.style.opacity = 1;
});

img.addEventListener("error", function (e) {
  e.target.src = "./no-image.png";
});

const input = document.getElementById("name");
input.addEventListener("input", (e) => {
  console.log("Bir şeyler yaziliyor", e.target.value);
});
input.addEventListener("blur", (e) => {
  if (e.target.value === "") {
    e.target.classList.add("error");
  }
});

const colorInput = document.getElementById("color-picker");
colorInput.addEventListener("input", (e) => {
  document.body.style.backgroundColor = e.target.value;
});

const genderSelect = document.getElementById("gender");
genderSelect.addEventListener("change", (e) => {
  console.log(e.target.value);
  // console.log([...e.target.selectedOptions].map((el) => el.value));
});

const saveRulesCheckbox = document.getElementById("save-rules");
const form = document.getElementById("form");

const saveButton = document.getElementById("save-btn");
saveButton.addEventListener("click", (e) => {
  console.log(input.value);
  console.log(colorInput.value);
  console.log(saveRulesCheckbox.checked);
  console.log(form.elements.stack.value);
});

document.body.addEventListener("keydown", (e) => {
  console.log(e.key, e.keyCode);
});
