var ScorecardAnalysis = function(preparedArrayObject){

  this.rawScorecard = preparedArrayObject.rawScorecard;
  this.translatedScorecard = preparedArrayObject.translatedScorecard;
  this.rawEleventhFrame = preparedArrayObject.rawEleventhFrame;
  this.translatedEleventhFrame = preparedArrayObject.translatedEleventhFrame;
  this.score = 0;

  this.sumOfFramesWithoutSpecialsBonuses = function(translatedScorecard){
    var sum = translatedScorecard.reduce(function(a,b){
      return a + b;
    })
    return sum;
  }

  this.sumOfSpecialsBonuses = function(rawScorecard, translatedScorecard){
    var sum = 0;
    for(i = 0; i < rawScorecard.length - 1; i++){
      if(rawScorecard[i] === "X"){
        if(i === translatedScorecard.length-2){
          sum += (translatedScorecard[i+1])
        } else {
          sum += (translatedScorecard[i+1] + translatedScorecard[i+2]);
        }
      } else if (rawScorecard[i] === "/") {
        sum += (translatedScorecard[i+1]);
      }
    }
    return sum;
  }

  this.sumOfEleventhFrame = function(rawScorecard, translatedEleventhFrame){
    var value = 0;
    if(translatedEleventhFrame.length > 0){
      if(translatedEleventhFrame.length < 2){
        value += translatedEleventhFrame[0];
      } else if (rawScorecard[rawScorecard.length-2] === "X"){
        value += ((translatedEleventhFrame[0] * 2) + translatedEleventhFrame[1]);
      } else {
        value += (this.sumOfFramesWithoutSpecialsBonuses(translatedEleventhFrame));
      }
    }
    return value;
  };
};

ScorecardAnalysis.prototype.getScore = function(){
  this.score += this.sumOfFramesWithoutSpecialsBonuses(this.translatedScorecard);
  this.score += this.sumOfSpecialsBonuses(this.rawScorecard, this.translatedScorecard);
  this.score += this.sumOfEleventhFrame(this.rawScorecard, this.translatedEleventhFrame);
  return this.score;
};
