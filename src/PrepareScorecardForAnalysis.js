var PrepareScorecardForAnalysis = function(input){

  this.scorecard = input;
  this.bonus;

  _isElementAPipe = function(element){
    return element != "|";
  };

};

PrepareScorecardForAnalysis.prototype.bonusCheck = function(){
  var bonusArray = this.scorecard.split("||");
  if(bonusArray[1]) {
    this.bonus = bonusArray.pop();
    this.bonus = this.bonus.split("")
  }
  this.scorecard = bonusArray[0]
};

PrepareScorecardForAnalysis.prototype.toArrayofChars = function(){
  this.scorecard = this.scorecard.split("");
};

PrepareScorecardForAnalysis.prototype.removePipeElements = function(){
  this.scorecard = this.scorecard.filter(_isElementAPipe);
};
