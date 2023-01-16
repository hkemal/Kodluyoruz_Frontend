const date = new Date();
console.log(date);

console.log(date.getFullYear());
console.log(date.getMonth());
console.log(date.getDay());
console.log(date.getHours());
console.log(date.getMinutes());
console.log(date.getSeconds());
console.log(date.getTime());

const allSeconds = Date.now();
console.log(allSeconds);

const timeInSeconds = new Date().getTime();
console.log(allSeconds == timeInSeconds);

let year = date.getFullYear(),
  month = date.getMonth(),
  day = date.getDay(),
  hour = date.getHours(),
  minutes = date.getMinutes(),
  second = date.getSeconds(),
  dayNumber = date.getDay();

let months = [
  "OCAK",
  "ŞUBAT",
  "MART",
  "NİSAN",
  "MAYIS",
  "HAZİRAN",
  "TEMMUZ",
  "AĞUSTOS",
  "EYLÜL",
  "EKİM",
  "KASIM",
  "ARALIK",
];

let days = [
  "PAZAR",
  "PAZARTESI",
  "SALI",
  "ÇARŞAMBA",
  "PERŞEMBE",
  "CUMA",
  "CUMARTESI",
];

let humanReadableDate = `${day} ${months[month]} ${year} ${days[day]} ${hour}:${minutes}:${second}`;
console.log(humanReadableDate);
