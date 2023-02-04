// setTimeout(() => {
//   console.log("Merhaba");
// }, 5000);

// setInterval(() => {
//   console.log("Ben her saniye çalisacağim");
// }, 1000);
///////////////////////////////////////////////
// const sayHi = (callback) => {
//   callback();
// };

// sayHi(() => {
//   console.log("Hello");
// });
///////////////////////////////////////////////

// import fetch from 'node-fetch';

// fetch('https://jsonplaceholder.typicode.com/users')
//   .then((data) => data.json())
//   .then((users) => console.log(users))
//   .catch((err) => console.log(err));

// fetch('https://jsonplaceholder.typicode.com/posts')
//   .then((response) => response.json())
//   .then((responseJson) => {
//     console.log(responseJson);
//   });

import fetch from 'node-fetch';

async function getData() {
  try {
    const data = await fetch('https://jsonplaceholder.typicode.com/users');
    console.log(data);
  } catch (err) {
    console.log(err);
  }
}

getData();
