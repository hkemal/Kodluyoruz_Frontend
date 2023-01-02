ad = "Tayfun";

let myName = "Tayfun";
let surname = "Erbilen";

function letsLearnScope() {
  console.log(myName, surname);
  if (true) {
    let myName = "Gökhan";
    let surname = "Kandemir";
    console.log(myName, surname);
  }
  console.log(myName, surname);
}
letsLearnScope();
console.log(myName, surname);
