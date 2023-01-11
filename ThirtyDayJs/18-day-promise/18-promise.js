/*
const test = (callback) => {
  setTimeout(() => {
    callback("hata oluştu", []);
  }, 2000);
};

const callback = (err, data) => {
  if (err) {
    console.log("hata", err);
  } else {
    console.log("data", data);
  }
};

test(callback);
*/

//Promise bize bir söz veriyor.
//Başarılı ise resolve çalışıyor.(then ile yakalıyoruz)
//Başarısız ise reject çalışıyor.(catch ile yakalıyoruz)
const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    callback("hata oluştu", []);
  }, 1500);
  resolve("işlem başarili");
  //reject("işlem başarisiz");
});

console.log(promise);

promise
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.warn(err);
  });

//////////////////////////
//Fetch API
//////////////////////////

const API_URL = "https://jsonplaceholder.typicode.com/posts";
fetch(API_URL)
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((err) => console.log(err));

//////////////////////////
//Async and Await
//////////////////////////

//Bir fonksiyonun başına Async koyarsak fonksiyon promise'e dönüşür
//await dersek response'u bekle demiş oluyoruz

async function getPosts() {
  try {
    const postResponse = await fetch(API_URL);
    const postData = await postResponse.json();
    console.log(postData);
  } catch (err) {
    console.log(err);
  }
}

getPosts();
