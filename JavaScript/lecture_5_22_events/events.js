let greeting = document.querySelector("#greeting");
// greeting.addEventListener("click", domClick);
greeting.addEventListener("mouseover", domClick);

function domClick() {
  console.log("Event tetiklendi.");
  this.style.color == "red"
    ? (this.style.color = "black")
    : (this.style.color = "red");
}
