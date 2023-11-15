import "./../scss/style.scss";

class Personer {
  namn;
  ålder;
  kön;

  constructor(namn, smak, bild) {
    this.namn = namn;
    this.ålder = ålder;
    this.kön = kön;
  }
}

const p = new Personer("Wilmer", "33", "Man");

const p2 = new Personer("Timmy", "31", "Man");

const p3 = new Personer("Ali", "23", "Man");

const p4 = new Personer("Wilmer", "26", "Kvinna");


