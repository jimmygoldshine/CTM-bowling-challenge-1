var ScorecardAnalysis = function(preparedArrayObject){

  this.scorecard = preparedArrayObject.scorecard;
  this.bonus = preparedArrayObject.bonus;
  this.translatedScorecard = [];
  this.translatedBonus = 0;


  _strikes = function(){
    this.scorecard.includes("X")
  }

  _spares = function(){
    this.scorecard.includes("/")
  }
};

ScorecardAnalysis.prototype.getScore = function(){
  var score;
  score = this.translatedScorecard.reduce(function(a,b){
    return a + b;
  })
  if (_strikes) {
    for(i = 0; i < this.translatedScorecard.length - 1; i++) {
      if(this.translatedScorecard[i] === 10){
        if(i === this.translatedScorecard.length-2){
          score += (this.translatedScorecard[i+1])
        } else {
        score += (this.translatedScorecard[i+1] + this.translatedScorecard[i+2]);
        }
      }
    }
  }
  if (_spares) {
    for(i = 0; i < this.scorecard.length - 1; i++) {
      if(this.scorecard[i] === "/"){
        score += (this.translatedScorecard[i+1]);
      }
    }
  }
  return score + this.translatedBonus
};

ScorecardAnalysis.prototype.bonusValue = function(){
  var value = 0;
  var bonus = this.bonus
  this.translatedBonus = bonus.map(function(bowl, index){
    switch(bowl) {
      case "X": return 10
		    break;
      case "-": return 0
		    break;
      case "/": return (10 - parseInt(bonus[index-1]));
        break;
      default: return parseInt(bowl)
    }
  })
  if(this.translatedBonus.length === 1){
    value += this.translatedBonus[0];
  } else {
    value += ((this.translatedBonus[0] * 2) + this.translatedBonus[1])
  }
  this.translatedBonus = value;
};

ScorecardAnalysis.prototype.symbolsToNumbers = function(){
  var array = this.scorecard
  this.translatedScorecard = array.map(function(bowl, index){
    switch(bowl) {
      case "X": return 10
		    break;
      case "-": return 0
		    break;
      case "/": return (10 - parseInt(array[index-1]));
        break;
      default: return parseInt(bowl)
    }
  })
};
