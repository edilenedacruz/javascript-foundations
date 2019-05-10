class Centaur {
  constructor(name, breed) {
    this.name = name;
    this.breed = breed;
    this.cranky = false;
    this.standing = true;
    this.runOrShootCount = 0;
    this.layingDown = false;
  }

  shoot() {
    if (!this.cranky) {
      this.runOrShootCount++;
    }

    if (this.runOrShootCount > 2) {
      this.cranky = true;
    }
    return this.cranky || this.layingDown ? 'NO!' : 'Twang!!!';
  }

  run() {
    this.runOrShootCount++;

    return this.cranky || this.layingDown ? 'NO!' : 'Clop clop clop clop!!!';
  }

  sleep() {
    this.cranky = false;
    this.runOrShootCount = 0;
    return this.layingDown ? 'ZZZZ' : 'NO!'; 
  }

  layDown() {
    this.standing = false;
    this.layingDown = true;
  }

  standUp() {
    this.standing = true;
    this.layingDown = false;
  }

  drinkPotion() {
    if (this.standing && this.cranky) {
      this.cranky = false;
    } else {
      this.cranky = true;
      return 'Not while I\'m laying down!'
    }
  }
}

module.exports = Centaur;