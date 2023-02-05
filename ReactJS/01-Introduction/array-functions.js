//push map find filter some every includes

const users = ['Mehmet', 'Ahmet', 'Murat', 'Ayse'];

//push
// users.push('Kemal');
// users.push('Fatma');
// console.log(users);

//map
// users.map((item) => console.log(item));

const usersObj = [
  { name: 'Mehmet', age: 21 },
  { name: 'Ahmet', age: 22 },
  { name: 'Murat', age: 23 },
  { name: 'Ayse', age: 24 },
];
//find
// const result = users.find((item) => (item.name = 'Mehmet'));
// console.log(result);

//filter
// const filteredUsers = usersObj.filter((item) => item.age < 23);
// console.log(filteredUsers);

//some
// const someUsers = usersObj.some((item) => item.age < 23);
// console.log(someUsers);

//some
// const everyUsers = usersObj.every((item) => item.age < 30);
// console.log(everyUsers);

//includes
const isInclude = users.includes('Mehmet');
console.log(isInclude);
