const h1DOM = document.querySelector("h1");
console.log(h1DOM.attributes.id.value);

const ulDOM = document.querySelector("ul");
console.log(ulDOM.childElementCount);

// const deleteButtons = document.querySelectorAll(".delete-btn");
// console.log(deleteButtons);
// deleteButtons.forEach((btn) => {
//   btn.addEventListener("click", (e) => {
//     e.target.remove();
//     if (ulDOM.childElementCount === 0) {
//       ulDOM.innerHTML = "Gösterilecek veri bulunamadi!";
//     }
//   });
// });

const deleteButtons = ulDOM.children;
console.log(deleteButtons);
[...deleteButtons].forEach((btn) => {
  btn.addEventListener("click", (e) => {
    e.target.remove();
    if (ulDOM.childElementCount === 0) {
      ulDOM.innerHTML = "Gösterilecek veri bulunamadi!";
    }
  });
});

const testDOM = document.querySelector(".test");
console.log(testDOM.clientWidth);
console.log(testDOM.clientHeight);

console.log(ulDOM.firstElementChild);
console.log(ulDOM.lastElementChild);

console.log(document.querySelector(".title").nextElementSibling);
console.log(
  document.querySelector(".title").nextElementSibling.nextElementSibling
);
console.log(document.querySelector(".title").previousElementSibling);
console.log(
  document.querySelector(".title").previousElementSibling.previousElementSibling
);

const scrollContent = document.querySelector(".scroll-content");
console.log(scrollContent.clientHeight);
console.log(scrollContent.scrollHeight);

const scrollContent2 = document.querySelector(".scroll-content2");
console.log(scrollContent2.clientWidth);
console.log(scrollContent2.scrollWidth);

const scrollDownBtn = document.getElementById("scroll-down");
scrollDownBtn.addEventListener("click", () => {
  console.log(scrollContent.scrollTop);
  scrollContent.scrollTop += 50;
});

const scrollRightBtn = document.getElementById("scroll-right");
const scrollLeftBtn = document.getElementById("scroll-left");

scrollRightBtn.addEventListener("click", (e) => {
  scrollContent2.scrollLeft += 50;
  console.log(e.target.tagName);
});

scrollLeftBtn.addEventListener("click", (e) => {
  if (e.target.scrollLeft === 0) {
    scrollLeftBtn.setAttribute("disabled", "disabled");
  } else {
    scrollLeftBtn.removeAttribute("disabled");
  }
  scrollContent2.scrollLeft -= 50;
});

scrollContent2.addEventListener("scroll", (e) => {
  if (
    scrollContent2.scrollWidth - scrollContent2.clientWidth ===
    e.target.scrollLeft
  ) {
    scrollRightBtn.setAttribute("disabled", "disabled");
  } else {
    scrollRightBtn.removeAttribute("disabled");
  }
  console.log("scroll oldu", e.target.scrollLeft);
});

let div = document.getElementById("test-1");

let h1 = document.createElement("h1");
h1.textContent = "baslik";

let p = document.createElement("p");
p.textContent = "paragraf";

div.before(h1);
div.after(p);

//closest() Seçilen elemana en yakın belirtilen öğeyi döndürür.
//getBoundingClientRect() Seçilen öğenin boyutlarını ve pozisyon bilgilerini DOMRect objesi olarak döndürür.
//matched() Seçilen elemanın belirtilen css seçicisiyle eşleşip eşleşmediğini kontrol eder.
//setAttribute() Seçilen elemana belirtilen niteligi ekler.
//getAttribute() Seçilen elemana ait belirtilen niteligi dondurur.
//hasAttribute() Seçilen elemana ait belirlenen niteliğin olup olmadığını kontrol eder.
//hasAttributes() Seçilen elemana ait herhangi bir nitelik olup olmadığını kontrol eder.
//toggleAttribute() Seçilen elemana belirtilen nitelik varsa kaldırılmasını yoksa eklenmesini sağlar.
