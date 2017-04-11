describe("ScorecardAnalysis", function(){

  describe("No bonus frame, no specials", function(){

    var scorecardArray = {scorecard: ["5","0","5","0","5","0","5","0","5","0"]}
    var scorecardAnalysis = new ScorecardAnalysis(scorecardArray);

    it("adds up the correct scores", function(){
      expect(scorecardAnalysis.getScore()).toEqual(25)
    })
  })

  describe("No bonus frame, with strikes", function(){

    var scorecardArray = {scorecard: ["5","X","5","0","5","X","5","0","5","0"]}
    var scorecardAnalysis = new ScorecardAnalysis(scorecardArray);

    it("adds up the correct scores", function(){
      expect(scorecardAnalysis.getScore()).toEqual(55)
    })
  })

  describe("No bonus frame, with spares", function(){

    var scorecardArray = {scorecard: ["5","/","5","0","5","/","5","0","5","0"]}
    var scorecardAnalysis = new ScorecardAnalysis(scorecardArray);

    it("adds up the correct scores", function(){
      expect(scorecardAnalysis.getScore()).toEqual(45)
    })
  })

  describe("No bonus frame, spares and strikes", function(){

    var scorecardArray = {scorecard: ["X","7","/","9","-","X","-","8","8","/","-","6","X","X","9","-"]};
    var scorecardAnalysis = new ScorecardAnalysis(scorecardArray);

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

    it("adds up the correct scores", function(){
      expect(scorecardAnalysis.getScore()).toEqual(158)
    })
  })

  describe("Bonus frame: two bowls - Test1", function(){

    var scorecardArray = {scorecard: ["X","7","/","9","-","X","-","8","8","/","-","6","X","X","X"],
                          bonus: ["8","1"]
                          };
    var scorecardAnalysis = new ScorecardAnalysis(scorecardArray);

    it("converts bonus to numbers", function(){
      scorecardAnalysis.bonusValue();
      expect(scorecardAnalysis.translatedBonus).toEqual(17)
    })

    it("adds up the correct scores", function(){
      expect(scorecardAnalysis.getScore()).toEqual(167)
    })
  })

  describe("Bonus frame: two bowls - test2", function(){

    var scorecardArray = {scorecard: ["6","3","4","/","8","/","4","1","6","3","X","8","1","-","3","-","7","X"],
                          bonus: ["6","3"]
                          };
    var scorecardAnalysis = new ScorecardAnalysis(scorecardArray);

    it("converts bonus to numbers", function(){
      scorecardAnalysis.bonusValue();
      expect(scorecardAnalysis.translatedBonus).toEqual(9)
    })

    it("adds up the correct scores", function(){
      expect(scorecardAnalysis.getScore()).toEqual(112)
    })
  })
})
