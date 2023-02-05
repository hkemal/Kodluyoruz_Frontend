import axios from 'axios.js';

export default getUserInfos = (user_id) => {
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

(async () => {
  let user1Infos = await getUserInfos(1);
  console.log(user1Infos);
})();
