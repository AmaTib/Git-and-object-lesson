import "./../scss/style.scss";

class Personer {
  name;
  age;
  gender;

  constructor(name, age, gender) {
    this.name = name;
    this.age = age;
    this.gender = gender;
  }
}

const p = new Personer("Wilmer", "33", "Man");

const p2 = new Personer("Timmy", "31", "Man");

const p3 = new Personer("Ali", "23", "Man");

const p4 = new Personer("Wilmer", "26", "Kvinna");

const family = [p, p2, p3, p4];

console.log(family);