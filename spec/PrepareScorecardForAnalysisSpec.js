describe('PrepareScorecardForAnalysis', function(){

  describe('No bonus frame', function(){
    var scorecard = "X|7/|9-|X|-8|8/|-6|X|X|9-||";
    var stringManipulation = new PrepareScorecardForAnalysis(scorecard);

    it('removes pipes from scorecard', function(){
      stringManipulation.prepare();
      expect(stringManipulation.rawScorecard).toEqual(["X","7","/","9","-","X","-","8","8","/","-","6","X","X","9","-"])
    })

    it("translates raw scorecard to numbers for analysis and stores in translatedScorecard", function(){
      expect(stringManipulation.translatedScorecard).toEqual([10,7,3,9,0,10,0,8,8,2,0,6,10,10,9,0])
    })
  })

  describe('One bonus ball', function (){

    var scorecard = "5/|5/|5/|5/|5/|5/|5/|5/|5/|5/||5";
    var stringManipulation = new PrepareScorecardForAnalysis(scorecard);

    it('take off bonus ball from scorecard and add to eleventhFrame attribute', function(){
      stringManipulation.prepare();
      expect(stringManipulation.eleventhFrame).toEqual(['5']);
    })

    it('translates eleventhFrame array of strings to numberes in translatedEleventhFrame attribute', function(){
      expect(stringManipulation.translatedEleventhFrame).toEqual([5]);
    })

    it("removes pipes from scorecard", function(){
      expect(stringManipulation.rawScorecard).toEqual(['5','/','5','/','5','/','5','/','5','/','5','/','5','/','5','/','5','/','5','/'])
    })

    it("translates raw scorecard to numbers for analysis and stores in translatedScorecard", function(){
      expect(stringManipulation.translatedScorecard).toEqual([5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5])
    })

  })

  describe('Two bonus balls', function (){

    var scorecard = "X|X|X|X|X|X|X|X|X|X||XX";
    var stringManipulation = new PrepareScorecardForAnalysis(scorecard);

    it('take off bonus balls from scorecard and add to bonus attribute', function(){
      stringManipulation.prepare();
      expect(stringManipulation.eleventhFrame).toEqual(["X","X"]);
    })

    it('translates eleventhFrame array of strings to numberes in translatedEleventhFrame attribute', function(){
      expect(stringManipulation.translatedEleventhFrame).toEqual([10,10]);
    })

    it("removes pipes from scorecard", function(){
      expect(stringManipulation.rawScorecard).toEqual(['X','X','X','X','X','X','X','X','X','X'])
    })

    it("translates raw scorecard to numbers for analysis and stores in translatedScorecard", function(){
      expect(stringManipulation.translatedScorecard).toEqual([10,10,10,10,10,10,10,10,10,10])
    })
  })

})
