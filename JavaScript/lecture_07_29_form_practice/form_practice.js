let userFormDom = document.querySelector("#userForm");
userFormDom.addEventListener("submit", formHandler);
const alertDom = document.querySelector("#alert");

const alertFunction = (title, mesagge, className = "warning") => `
<div class="alert alert-${className} alert-dismissible fade show" role="alert">
  <strong>${title}</strong> ${mesagge}
  <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>
`;
function formHandler(event) {
  event.preventDefault(); //default işlemi engelledik
  const USER_NAME = document.querySelector("#username");
  const SCORE = document.querySelector("#score");
  if (USER_NAME.value && SCORE.value) {
    addItem(USER_NAME.value, SCORE.value);
    USER_NAME.value = "";
    SCORE.value = "";
  } else {
    alertDom.innerHTML = alertFunction(
      "Başlık Bilgisi",
      "Eksik Bilgi Girdiniz",
      "danger"
    );
  }
}

/* <li class="list-group-item d-flex justify-content-between align-items-center">
A list item
<span class="badge bg-primary rounded-pill">14</span>
</li> */

let userListDom = document.querySelector("#userList");
const addItem = (userName, score) => {
  let liDom = document.createElement("li");
  liDom.innerHTML = `
  ${userName}
  <span class="badge bg-primary rounded-pill">${score}</span>
  `;

  liDom.classList.add(
    "list-group-item",
    "d-flex",
    "justify-content-between",
    "align-items-center"
  );
  userListDom.append(liDom);
};
