import axios from 'axios';

export default (user_id) => {
  return new Promise(async (resolve, reject) => {
    const { data: user } = await axios(
      `https://jsonplaceholder.typicode.com/users/${user_id}`
    );
    const { data: posts } = await axios(
      `https://jsonplaceholder.typicode.com/posts?userId=${user_id}`
    );
    let result = { ...user, ...posts };
    resolve(result);
  });
};
