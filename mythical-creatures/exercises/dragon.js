class Dragon {
  constructor(name,  rider, color) {
    var foodCount = 0;
    this.name = name;
    this.rider = rider;
    this.color = color;
    this.hungry = true;
    this.eat = function() {
      foodCount++
      if (foodCount >= 3) {
        this.hungry = false
      }
    }
  }
}

module.exports = Dragon;