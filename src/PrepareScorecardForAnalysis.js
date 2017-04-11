var PrepareScorecardForAnalysis = function(input){

  this.rawScorecard = input;
  this.translatedScorecard = [];
  this.rawEleventhFrame = [];
  this.translatedEleventhFrame = [];

  isElementAPipe = function(element){
    return element != "|";
  };

  symbolsToNumbers = function(rawScorecard){
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

  eleventhFrameCheck = function(rawScorecard, eleventhFrame){
    if(eleventhFrame) {
      eleventhFrame = gameArray[1];
      eleventhFrameArray.pop().split("");
    }
    rawScorecard = gameArray[0];
    return eleventhFrame;
  };

  toArrayOfChars = function(rawScorecard){
    var gameArray = rawScorecard.split("||");
    rawScorecard = gameArray[0];
    return rawScorecard.split("");
  };

  removePipeElements = function(rawScorecard){
    return rawScorecard.filter(isElementAPipe);
  }
};

PrepareScorecardForAnalysis.prototype.prepare = function(){
  var rawScorecard = this.rawScorecard;
  this.rawScorecard = removePipeElements(toArrayOfChars(this.rawScorecard));
  this.translatedScorecard = rawScorecard.split("||")[0];
  this.translatedScorecard = symbolsToNumbers(this.rawScorecard);
  this.eleventhFrame = rawScorecard.split("||").pop();
  this.eleventhFrame = this.eleventhFrame.split("");
  this.translatedEleventhFrame = symbolsToNumbers(this.eleventhFrame);
  return this
}
