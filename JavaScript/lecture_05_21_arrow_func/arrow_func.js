const helloFuncV1 = (firstName) => console.log(`Merhaba ${firstName}`);
helloFuncV1("helloFuncV1");

const helloFuncV2 = (firstName, lastName) => {
  console.log(`Merhaba ${firstName} ${lastName}`);
};
helloFuncV2("helloFuncV2", "LastName");

const helloFuncV3 = (firstName, lastName) => {
  let info = `Merhaba ${firstName} ${lastName}`;
  console.log(info);
  return info;
};
helloFuncV3("helloFuncV3", "Other Info");
