class Sphinx {
  constructor() {
    this.name = null;
    this.riddles = [];
    this.heroesEaten = 0;
  }

  collectRiddle(riddle) {
    this.riddles.push(riddle);
    if (this.riddles.length > 3) {
      this.riddles.shift(); 
    }
  }

  attemptAnswer(attempt) {
    // var correctCount = 0;
    // var totalRiddgles = this.riddles.length;
    for( var i = 0; i < this.riddles.length; i++) {
      if (this.riddles[i].answer == attempt) {
        this.riddles.splice(i);
        correctCount++;
        return  'That wasn\'t that hard, I bet you don\'t get the next one';
      }
      
    }
    this.heroesEaten++;
  }

}

module.exports = Sphinx;