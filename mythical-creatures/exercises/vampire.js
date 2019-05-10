class Vampire {
  constructor(name, pet = 'bat') {
    this.name = name;
    this.pet = pet;
    this.thirsty = true;
    this.drink = function () {
      this.thirsty = false
    }
  }
}

module.exports = Vampire;