fetch("settings.json")
  .then((response) => {
    return response.json();
  })
  .then((responseJson) => {
    console.log(responseJson);
  });

let userListDom = document.querySelector("#userList");
fetch("https://jsonplaceholder.typicode.com/posts")
  .then((response) => response.json())
  .then((responseJson) => {
    responseJson.forEach((item) => {
      let liDom = document.createElement("li");
      liDom.innerHTML = item.title;
      userListDom.appendChild(liDom);
    });
  });

//   💭 POST isteği ile verimizi servera gönderelim
let payload = {
  title: "Blog Title",
  body: "lorem ipsum",
  userId: 1,
};
fetch("https://jsonplaceholder.typicode.com/posts", {
  method: "POST",
  body: JSON.stringify(payload),
  headers: { "Content-type": "application/json; charset=UTF-8" },
})
  .then((response) => response.json())
  .then((json) => console.log(json))
  .catch((err) => console.log(err));
