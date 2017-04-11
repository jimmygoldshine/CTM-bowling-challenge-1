var ScorecardAnalysis = function(preparedArrayObject){

  this.scorecard = preparedArrayObject.scorecard;
  this.bonus = preparedArrayObject.bonus;
  this.translatedScorecard = [];
  this.translatedBonus = 0;
  this.score = 0;


  _strikes = function(){
    this.scorecard.includes("X")
  }

  _spares = function(){
    this.scorecard.includes("/")
  }

  _symbolsToNumbers = function(rawScorecard){
    var translatedOutput = rawScorecard.map(function(bowl, index){
      switch(bowl) {
        case "X": return 10
  		    break;
        case "-": return 0
  		    break;
        case "/": return (10 - parseInt(rawScorecard[index-1]));
          break;
        default: return parseInt(bowl)
      }
    })
    return translatedOutput;
  }

  _sumOfFramesWithoutSpecials = function(translatedScorecard){
    var sum = translatedScorecard.reduce(function(a,b){
      return a + b;
    })
    return sum;
  }
};

ScorecardAnalysis.prototype.getScore = function(){
  this.translatedScorecard = _symbolsToNumbers(this.scorecard);
  this.score = _sumOfFramesWithoutSpecials(this.translatedScorecard);
  if (_strikes) {
    for(i = 0; i < this.translatedScorecard.length - 1; i++) {
      if(this.translatedScorecard[i] === 10){
        if(i === this.translatedScorecard.length-2){
          this.score += (this.translatedScorecard[i+1])
        } else {
        this.score += (this.translatedScorecard[i+1] + this.translatedScorecard[i+2]);
        }
      }
    }
  }
  if (_spares) {
    for(i = 0; i < this.scorecard.length - 1; i++) {
      if(this.scorecard[i] === "/"){
        this.score += (this.translatedScorecard[i+1]);
      }
    }
  }
  return this.score + this.translatedBonus
};

ScorecardAnalysis.prototype.bonusValue = function(){
  var value = 0;
  var bonus = this.bonus
  this.translatedBonus = _symbolsToNumbers(this.bonus);
  if(this.translatedBonus.length < 2){
    value += this.translatedBonus[0];
  } else if (this.scorecard[this.scorecard.length-2] === "X"){
    value += ((this.translatedBonus[0] * 2) + this.translatedBonus[1]);
  } else {
    value += (_sumOfFramesWithoutSpecials(this.translatedBonus));
  }
  this.translatedBonus = value;
};
