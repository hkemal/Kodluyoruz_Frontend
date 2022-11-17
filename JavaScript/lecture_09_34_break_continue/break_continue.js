// Break & Continue
// https://www.w3schools.com/js/js_break.asp

const LOREM_LIST = [
  "lorem",
  "ipsum",
  "dolor",
  "amet",
  "consectetur,",
  "adipisicing",
  "elit",
];

let counter = 0;

// for (; counter < 10; counter++) {
//   console.log(counter)
//   if (counter === 5) {break}
// }

// for (; counter < 10; counter++) {
//   if (counter === 5) {continue}
//   console.log(counter)
// }

const UL_DOM1 = document.querySelector("#userList1");
const UL_DOM2 = document.querySelector("#userList2");

for (let index = 0; index < LOREM_LIST.length; index++) {
  if (LOREM_LIST[index] === "dolor") {
    break;
  }
  let LI_DOM = document.createElement("li");
  LI_DOM.innerHTML = LOREM_LIST[index];
  UL_DOM1.appendChild(LI_DOM);
}

for (let index = 0; index < LOREM_LIST.length; index++) {
  if (LOREM_LIST[index] === "dolor") {
    continue;
  }
  let LI_DOM = document.createElement("li");
  LI_DOM.innerHTML = LOREM_LIST[index];
  UL_DOM2.appendChild(LI_DOM);
}
