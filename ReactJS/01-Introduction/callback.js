const axios = require('axios');
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

// import fetch from 'node-fetch';

// async function getData() {
//   try {
//     const data = await fetch('https://jsonplaceholder.typicode.com/users');
//     console.log(data);
//   } catch (err) {
//     console.log(err);
//   }
// }

// getData();

// console.log('Merhaba');
// (async () => {
//   const { data: users } = await axios(
//     'https://jsonplaceholder.typicode.com/users'
//   );

//   const { data: post1 } = await axios(
//     'https://jsonplaceholder.typicode.com/posts/1'
//   );

//   const { data: post2 } = await axios(
//     'https://jsonplaceholder.typicode.com/posts/2'
//   );

//   console.log('users', users);
//   console.log('***********');
//   console.log('users', post1);
//   console.log('***********');
//   console.log('users', post2);
// })();

const getUsers = (number) => {
  return new Promise(async (resolve, reject) => {
    const { data } = await axios('https://jsonplaceholder.typicode.com/users');
    resolve(data);
  });
};

const getPost = (post_id) => {
  return new Promise(async (resolve, reject) => {
    const { data } = await axios(
      'https://jsonplaceholder.typicode.com/posts/' + post_id
    );
    resolve(data);
  });
};

// (async () => {
//   try {
//     const users = await getUsers();
//     const post1 = await getPost(1);
//     const post2 = await getPost(2);

//     console.log(users);
//     console.log(post1);
//     console.log(post2);
//   } catch (error) {
//     console.log(error);
//   }
// })();

Promise.all([getUsers(), getPost(1), getPost(2)])
  .then(console.log)
  .catch(console.log);
