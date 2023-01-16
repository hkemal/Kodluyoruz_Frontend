for (let i = 1; i <= 10; i++) {
  let h1DOM = document.createElement("h1");
  h1DOM.className = "test";
  h1DOM.style.backgroundColor = randomColor();
  h1DOM.style.color = randomColor();
  h1DOM.innerHTML = " Bu <i>JS</i> ile eklendi " + i;
  document.body.appendChild(h1DOM);
}

//document.body => doğrudan body'ye ulaşmamızı sağlar

const allH1DOM = document.querySelectorAll("h1");
for (const h1 of allH1DOM) {
  h1.remove();
}

function randomColor() {
  var x = Math.floor(Math.random() * 256);
  var y = Math.floor(Math.random() * 256);
  var z = Math.floor(Math.random() * 256);
  var color = "rgb(" + x + "," + y + "," + z + ")";
  return color;
}
