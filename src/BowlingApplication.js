var finalScore = function(scorecard){
  game = new Bowling()
  score = game.score(scorecard);
  console.log(score)
}

finalScore("X|X|X|X|X|X|X|X|X|X||XX")
finalScore("9-|9-|9-|9-|9-|9-|9-|9-|9-|9-||")
finalScore("5/|5/|5/|5/|5/|5/|5/|5/|5/|5/||5")
finalScore("X|7/|9-|X|-8|8/|-6|X|X|X||81")
