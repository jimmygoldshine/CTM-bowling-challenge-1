var Bowling = function(){

};

Bowling.prototype.score = function(bowlingScorecard){
  var initialScorecard = new PrepareScorecardForAnalysis(bowlingScorecard);
  var preparedScorecard = initialScorecard.prepare();
  var analysis = new ScorecardAnalysis(preparedScorecard);
  var score = analysis.getScore();
  return score;
}
