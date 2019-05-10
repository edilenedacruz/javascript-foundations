class Direwolf {
  constructor(name, home, size) {
    this.name = name;
    this.home = home || 'Beyond the Wall';
    this.size = size || 'Massive';
    this.starksToProtect = [];
    this.huntsWhiteWalkers = true;
  }

  protect(stark) {
    if (stark.location === this.home) {
      if (this.starksToProtect.length < 2) {
        stark.safe = true;
        this.starksToProtect.push(stark);
        this.huntsWhiteWalkers = false;
      } else if (this.starksToProtect == 2) {
        this.starksToProtect.shift().push(stark)
      }
    }
  }

  leave(stark) {
    stark.safe = false;
    this.starksToProtect.pop(stark);
  }
}

module.exports = Direwolf;