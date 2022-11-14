let counter = 0;

let counterDom = document.querySelector("#counter");
let increaseDom = document.querySelector("#increase");
let decreaseDom = document.querySelector("#decrease");

counterDom.innerHTML = counter;

increaseDom.addEventListener("click", clickEvent);
decreaseDom.addEventListener("click", clickEvent);

function clickEvent() {
  console.log(this.id);
  if (this.id === "increase") {
    ++counter;
  } else if (this.id === "decrease") {
    --counter;
  }
  counterDom.innerHTML = counter;
}
