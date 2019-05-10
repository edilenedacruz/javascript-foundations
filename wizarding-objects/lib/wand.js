function Wand(type, size, core) {
  this.type = type;
  this.size = size;
  this.core = core;
  this.cast = (spell) => {
    return `Casting ${spell}!`;
  }
};

module.exports = Wand;