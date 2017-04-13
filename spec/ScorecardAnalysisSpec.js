describe("ScorecardAnalysis", function(){

  describe("No bonus frame, no specials", function(){

    var scorecardArray = {rawScorecard: ["5","0","5","0","5","0","5","0","5","0"],
                          translatedScorecard: [5,0,5,0,5,0,5,0,5,0],
                          rawEleventhFrame: [],
                          translatedEleventhFrame: []
                          }
    var scorecardAnalysis = new ScorecardAnalysis(scorecardArray);

    it("adds up the correct scores", function(){
      expect(scorecardAnalysis.getScore()).toEqual(25)
    })
  })

  describe("No bonus frame, with strikes", function(){

    var scorecardArray = {rawScorecard: ["5","X","5","0","5","X","5","0","5","0"],
                          translatedScorecard: [5,10,5,0,5,10,5,0,5,0],
                          rawEleventhFrame: [],
                          translatedEleventhFrame: []
                          }
    var scorecardAnalysis = new ScorecardAnalysis(scorecardArray);

    it("adds up the correct scores", function(){
      expect(scorecardAnalysis.getScore()).toEqual(55)
    })
  })

  describe("No bonus frame, with spares", function(){

    var scorecardArray = {rawScorecard: ["5","/","5","0","5","/","5","0","5","0"],
                          translatedScorecard: [5,5,5,0,5,5,5,0,5,0],
                          rawEleventhFrame: [],
                          translatedEleventhFrame: []
                          }
    var scorecardAnalysis = new ScorecardAnalysis(scorecardArray);

    it("adds up the correct scores", function(){
      expect(scorecardAnalysis.getScore()).toEqual(45)
    })
  })

  describe("No bonus frame, spares and strikes", function(){

    var scorecardArray = {rawScorecard: ["X","7","/","9","-","X","-","8","8","/","-","6","X","X","9","-"],
                          translatedScorecard: [10,7,3,9,0,10,0,8,8,2,0,6,10,10,9,0],
                          rawEleventhFrame: [],
                          translatedEleventhFrame: []
                          };
    var scorecardAnalysis = new ScorecardAnalysis(scorecardArray);

    it("adds up the correct scores", function(){
      expect(scorecardAnalysis.getScore()).toEqual(147)
    })
  })

  describe("Bonus frame: one bowl - Test1", function(){

    var scorecardArray = {rawScorecard: ["X","7","/","9","-","X","-","8","8","/","-","6","X","X","9","/"],
                          translatedScorecard: [10,7,3,9,0,10,0,8,8,2,0,6,10,10,9,1],
                          rawEleventhFrame: ["9"],
                          translatedEleventhFrame: [9]
                          };
    var scorecardAnalysis = new ScorecardAnalysis(scorecardArray);

    it("adds up the correct scores", function(){
      expect(scorecardAnalysis.getScore()).toEqual(158)
    })
  })

  describe("Bonus frame: one bowl - Test2", function(){

    var scorecardArray = {rawScorecard: ["1","2","3","4","5","4","6","3","8","/","9","/","X","X","9","/","9","/"],
                          translatedScorecard: [1,2,3,4,5,4,6,3,8,2,9,1,10,10,9,1,9,1],
                          rawEleventhFrame: ["X"],
                          translatedEleventhFrame: [10]
                          };
    var scorecardAnalysis = new ScorecardAnalysis(scorecardArray);

    it("adds up the correct scores", function(){
      expect(scorecardAnalysis.getScore()).toEqual(155)
    })
  })

  describe("Bonus frame: two bowls - Test1", function(){

    var scorecardArray = {rawScorecard: ["X","7","/","9","-","X","-","8","8","/","-","6","X","X","X"],
                          translatedScorecard: [10,7,3,9,0,10,0,8,8,2,0,6,10,10,10],
                          rawEleventhFrame: ["8","1"],
                          translatedEleventhFrame: [8,1]
                          };
    var scorecardAnalysis = new ScorecardAnalysis(scorecardArray);

    it("adds up the correct scores", function(){
      expect(scorecardAnalysis.getScore()).toEqual(167)
    })
  })

  describe("Bonus frame: two bowls - Test2", function(){

    var scorecardArray = {rawScorecard: ["6","3","4","/","8","/","4","1","6","3","X","8","1","-","3","-","7","X"],
                          translatedScorecard: [6,3,4,6,8,2,4,1,6,3,10,8,1,0,3,0,7,10],
                          rawEleventhFrame: ["6","3"],
                          translatedEleventhFrame: [6,3]
                          };
    var scorecardAnalysis = new ScorecardAnalysis(scorecardArray);

    it("adds up the correct scores", function(){
      expect(scorecardAnalysis.getScore()).toEqual(112)
    })
  })
})
