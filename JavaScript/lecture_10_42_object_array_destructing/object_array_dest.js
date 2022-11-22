let settings = {
  userName: "loremIpsum",
  password: "BadPassword",
  isActive: false,
  ip: "127.0.0.1",
  serverName: "kodluyoruz.org",
};

// let userName = settings.userName;
// console.log(userName);

//rename && destructing
let { userName: user, password, isActive, ip: serverIp, serverName } = settings;
console.log(user);
console.log(serverIp);

//bazı bilgilerin çıkarılması
let {
  userName: userName2,
  password: password2,
  isActive: isActive2,
  ...newSettings
} = settings;
console.log(newSettings);
console.log(userName2, password2, isActive2, newSettings);

//Hatalı
// let settings2 = settings;
// settings2.userName = "Degisen Bilgi";
// console.log("settings", settings);
// console.log("settings2", settings2);

let settings2 = { ...settings };
settings2.userName = "Degisen Bilgi";
console.log("settings", settings);
console.log("settings2", settings2);

let score = [100, 200, 300, 400];

let [score1, score2, ...otherScore] = score;
console.log(score1, score2, otherScore);

//array kopyalama
let copyOfScore = [...score];
console.log(copyOfScore);
