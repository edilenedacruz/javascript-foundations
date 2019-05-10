class Hobbit {
  constructor(name) {
    this.name = name;
    this.disposition = 'homebody';
    this.age = 0;
    this.adult = false;
    this.isShort = true;
    this.old = false;
    this.hasRing = this.name === 'Frodo';
  }

  celebrateBirthday() {
    this.age++;
    this.adult = true === this.age >= 33;
    this.old = true === this.age >= 101;
  }
}

module.exports = Hobbit;