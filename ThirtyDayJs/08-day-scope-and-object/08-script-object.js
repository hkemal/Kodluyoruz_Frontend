const person = {
  personName: "Jane",
  personSurname: "Doe",
  age: 29,
  isMarried: false,
  skills: ["HTML", "Javascript", "CSS", "PHP"],
  siblings: [
    {
      siblingName: "John",
      siblingSurname: "Doe",
    },
  ],
  "phone number": "121212",
  getFullName1: function () {
    return `${this.personName} ${this.personSurname}`;
  },
  getFullName2: () => `${person.personName} ${person.personSurname}`,
};

console.log(person);
console.log(person.personName);
console.log(person["phone number"]);
console.log(person.skills[0]);
console.log(person.siblings[0].siblingName);
console.log(person.getFullName1());
console.log(person.getFullName2());
person.personName = "Ahmet";
console.log(person.personName);
person.skills.push("React");
person.skills.push("Svelte");
person.title = "Developer";
person.country = "Turkey";

const formatter = new Intl.ListFormat("en", {
  style: "long",
  type: "conjunction",
});

person.getPersonInfo = function () {
  // let skillsWithoutLastOne = this.skills
  //   .splice(0, this.skills.length - 1)
  //   .join(", ");
  // let lastSkill = this.skills.at(-1);
  // let skillsJoining = `${skillsWithoutLastOne} and ${lastSkill}`;
  let skillsJoining = formatter.format(this.skills);
  let fullName = this.getFullName1();
  let statement = `${fullName} is a ${this.title}\nHe lives in ${this.country}\nHe teaches  ${skillsJoining} `;
  console.log(statement);
};

person.getPersonInfo();

let newPerson = { ...person }; //nesne kopyalama
// let newPerson = Object.assign({}, person);//nesne kopyalama
newPerson.personName = "Asabeneh";
console.log(person.getFullName1());
console.log(newPerson.getFullName1());

console.log(Object.keys(person)); //Key'leri döner
console.log(Object.values(person)); //Value'leri döner
console.log(Object.entries(person)); //Key-Value'leri array olarak döner
// let personEntries = [...Object.entries(person)];
// personEntries.forEach((item) => console.log(item));
for (let [key, val] of Object.entries(person)) {
  console.log(key, val);
}
console.log("*****************");
console.log(person.hasOwnProperty("personName")); //Obje bu key'e sahip mi diye bakar boolean değer döner
console.log(person.hasOwnProperty("personState"));

Object.freeze(person); //objede güncelleme yapmayı engeller
Object.seal(person); //objeye yeni bir şey ekleyemeyiz, silemeyiz ama olan değeri güncelleyebiliriz
