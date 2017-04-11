describe("ScorecardAnalysis", function(){

  describe("No bonus frame, no specials", function(){

    var scorecardArray = {scorecard: ["5","0","5","0","5","0","5","0","5","0"]}
    var scorecardAnalysis = new ScorecardAnalysis(scorecardArray);

    it("converts symbols to numbers", function(){
      scorecardAnalysis.symbolsToNumbers();
      expect(scorecardAnalysis.translatedScorecard).toEqual([5,0,5,0,5,0,5,0,5,0]);
    })

    it("adds up the correct scores", function(){
      expect(scorecardAnalysis.getScore()).toEqual(25)
    })
  })

  describe("No bonus frame, with strikes", function(){

    var scorecardArray = {scorecard: ["5","X","5","0","5","X","5","0","5","0"]}
    var scorecardAnalysis = new ScorecardAnalysis(scorecardArray);

    it("converts symbols to numbers", function(){
      scorecardAnalysis.symbolsToNumbers();
      expect(scorecardAnalysis.translatedScorecard).toEqual([5,10,5,0,5,10,5,0,5,0]);
    })

    it("adds up the correct scores", function(){
      expect(scorecardAnalysis.getScore()).toEqual(55)
    })
  })

  describe("No bonus frame, with spares", function(){

    var scorecardArray = {scorecard: ["5","/","5","0","5","/","5","0","5","0"]}
    var scorecardAnalysis = new ScorecardAnalysis(scorecardArray);

    it("converts symbols to numbers", function(){
      scorecardAnalysis.symbolsToNumbers();
      expect(scorecardAnalysis.translatedScorecard).toEqual([5,5,5,0,5,5,5,0,5,0]);
    })

    it("adds up the correct scores", function(){
      expect(scorecardAnalysis.getScore()).toEqual(45)
    })
  })

  describe("No bonus frame, spares and strikes", function(){

    var scorecardArray = {scorecard: ["X","7","/","9","-","X","-","8","8","/","-","6","X","X","9","-"]};
    var scorecardAnalysis = new ScorecardAnalysis(scorecardArray);

    it("converts symbols to numbers", function(){
      scorecardAnalysis.symbolsToNumbers();
      expect(scorecardAnalysis.translatedScorecard).toEqual([10,7,3,9,0,10,0,8,8,2,0,6,10,10,9,0])
    })

    it("adds up the correct scores", function(){
      expect(scorecardAnalysis.getScore()).toEqual(147)
    })
  })

  describe("Bonus frame: one bowl", function(){

    var scorecardArray = {scorecard: ["X","7","/","9","-","X","-","8","8","/","-","6","X","X","9","/"],
                          bonus: ["9"]
                          };
    var scorecardAnalysis = new ScorecardAnalysis(scorecardArray);

    it("converts bonus to numbers", function(){
      scorecardAnalysis.bonusValue();
      expect(scorecardAnalysis.translatedBonus).toEqual(9)
    })

    it("converts symbols to numbers", function(){
      scorecardAnalysis.symbolsToNumbers();
      expect(scorecardAnalysis.translatedScorecard).toEqual([10,7,3,9,0,10,0,8,8,2,0,6,10,10,9,1])
    })

    it("adds up the correct scores", function(){
      expect(scorecardAnalysis.getScore()).toEqual(158)
    })
  })

  describe("Bonus frame: two bowls", function(){

    var scorecardArray = {scorecard: ["X","7","/","9","-","X","-","8","8","/","-","6","X","X","X"],
                          bonus: ["8","1"]
                          };
    var scorecardAnalysis = new ScorecardAnalysis(scorecardArray);

    it("converts bonus to numbers", function(){
      scorecardAnalysis.bonusValue();
      expect(scorecardAnalysis.translatedBonus).toEqual(17)
    })

    it("converts symbols to numbers", function(){
      scorecardAnalysis.symbolsToNumbers();
      expect(scorecardAnalysis.translatedScorecard).toEqual([10,7,3,9,0,10,0,8,8,2,0,6,10,10,10])
    })

    it("adds up the correct scores", function(){
      expect(scorecardAnalysis.getScore()).toEqual(167)
    })
  })
})
