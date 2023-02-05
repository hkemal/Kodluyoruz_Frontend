import getUserInfos from './hw1.js';
(async () => {
  let user1Infos = await getUserInfos(1);
  console.log(user1Infos);
})();
