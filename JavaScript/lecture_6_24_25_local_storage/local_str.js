let user = {
  userName: "hakanyalcinkaya",
  isActive: true,
};
console.log(user);

localStorage.setItem("userInfo", JSON.stringify(user));
let userInfo = localStorage.getItem("userInfo");
userInfo = JSON.parse(userInfo);
console.log(userInfo);

let items = [1, 2, 3, user];
console.log(items);
localStorage.setItem("newItem", JSON.stringify(items));
let newItem = localStorage.getItem("newItem");
console.log(newItem);
