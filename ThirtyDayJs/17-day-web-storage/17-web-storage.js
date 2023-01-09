// There are five methods to work on local storage:
// setItem(), getItem(), removeItem(), clear(), key()

// localStorage - to display the localStorage object
// localStorage.clear() - to remove everything in the local storage
// localStorage.setItem() - to store data in the localStorage. It takes a key and a value parameters.
// localStorage.getItem() - to display data stored in the localStorage. It takes a key as a parameter.
// localStorage.removeItem() - to remove stored item form a localStorage. It takes key as a parameter.
// localStorage.key() - to display a data stored in a localStorage. It takes index as a parameter.

localStorage.setItem("name", "Tayfun");

console.log(localStorage.getItem("name"));

console.log(localStorage.key(0));

const names = ["ahmet", "mehmet", "hasan"];

localStorage.setItem("names", names);

const user = {
  name: "Tayfun",
  surname: "Erbilen",
};

localStorage.setItem("user", JSON.stringify(user));

console.log(localStorage.getItem("user"));

console.log(localStorage);

localStorage.removeItem("names");

console.log(localStorage);

localStorage.clear();

console.log(localStorage);

let basket = JSON.parse(localStorage.getItem("basket")) || [];
let products = [
  {
    id: 1,
    title: "MacBook Pro 2021",
    price: 40_000,
  },
  {
    id: 2,
    title: "Keychron K6",
    price: 100,
  },
  {
    id: 3,
    title: "NuPhy Halo65",
    price: 140,
  },
];

function saveToStorage() {
  localStorage.setItem("basket", JSON.stringify(basket));
}

function addBasket(productId) {
  const basketIndex = basket.findIndex((b) => b.productId === productId);
  if (basketIndex > -1) {
    basket[basketIndex] = {
      ...basket[basketIndex],
      amount: basket[basketIndex].amount + 1,
    };
  } else {
    basket.push({
      productId,
      amount: 1,
    });
  }
  saveToStorage();
}

function removeBasket(productId) {
  const item = basket.find((p) => p.productId === productId);
  if (item) {
    if (item.amount === 1) {
      basket = basket.filter((p) => p.productId !== productId);
    } else {
      basket = basket.map((i) => {
        if (i.productId === productId) {
          i.amount -= 1;
        }
        return i;
      });
    }
  }
  saveToStorage();
}

function totalPrice() {
  return basket.reduce((prev, basket) => {
    const product = products.find((p) => p.id === basket.productId);
    return (prev += product.price * basket.amount);
  }, 0);
}

addBasket(2);
addBasket(3);
console.log(basket);

removeBasket(3);
console.log(basket);
addBasket(3);
addBasket(1);
addBasket(1);

addBasket(1);
addBasket(1);
removeBasket(1);

console.log(localStorage);

console.log(totalPrice());
