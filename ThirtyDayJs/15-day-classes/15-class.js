class Person {
  constructor(firstname, lastname, age, country = "Turkey", city) {
    this.firstname = firstname;
    this.lastname = lastname;
    this.age = age;
    this.country = country;
    this.city = city;
    this.skills = [];
  }

  getFullName() {
    const fullName = this.firstname + " " + this.lastname;
    return fullName;
  }

  get getSkills() {
    return this.skills;
  }

  set setSkills(skill) {
    this.skills.push(skill);
  }

  appendSkills(skill) {
    this.skills.push(skill);
  }

  getPersonInfo() {
    let fullName = this.getFullName();
    let skills =
      this.skills.length > 0 &&
      this.skills.slice(0, this.skills.length - 1).join(", ") +
        ` and ${this.skills[this.skills.length - 1]}`;
    let formattedSkills = skills ? `He knows ${skills}` : "";

    let info = `${fullName} is ${this.age}. He lives ${this.city}, ${this.country}. ${formattedSkills}`;
    return info;
  }

  static getTimestamp() {
    return +new Date();
  }
}

const person1 = new Person("John", "Doe", 25, "Turkey", "Adana");
const person2 = new Person("Jane", "Doe", 24, "Turkey", "Ankara");
const person3 = new Person("Bob", "Doe", 27, "Turkey", "Istanbul");

console.log(person1);
console.log(person2);
console.log(person3);

console.log(person3.getFullName());
console.log(person3.getSkills);

person3.setSkills = "Javascript";
person3.setSkills = "React";
person3.appendSkills("Html");
console.log(person3.getSkills);
console.log(person3.getPersonInfo());

console.log(Person.getTimestamp());

class Teacher extends Person {
  constructor(firstname, lastname, age, country, city, gender) {
    super(firstname, lastname, age, country, city, gender);
    this.gender = gender;
  }

  teach() {
    return "Matematik dersi ogretiliyor...";
  }

  get getGender() {
    return this.gender === 1 ? "Erkek" : "Kadin";
  }
}

class Student extends Person {
  learn() {
    return "Ders dinleniyor...";
  }
}

const teacher1 = new Teacher("John", "Erbilen", 27, "Turkey", "Eskisehir", 1);
const student1 = new Student("Jane", "Erbilen", 21, "Turkey", "Eskisehir");

console.log(teacher1.teach());
console.log(student1.learn());
