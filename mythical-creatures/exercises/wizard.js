class Wizard {
  constructor(wizard) {
    this.spellCount = 0;
    this.name = wizard.name;
    this.bearded = wizard.bearded === false ? wizard.bearded : true;
    this.isRested = true;
  }

  incantation(spell) {
    return spell.toUpperCase();
  }

  cast() {
    this.spellCount++
    if (this.spellCount < 3) {
      return 'MAGIC BULLET';
    } else {
      this.isRested = false;
      return 'I SHALL NOT CAST!';
    }
  }
}

module.exports = Wizard;