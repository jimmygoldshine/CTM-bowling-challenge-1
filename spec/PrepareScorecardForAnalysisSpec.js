describe('PrepareScorecardForAnalysis', function(){

  describe('No bonus frame', function(){
    var scorecard = "X|7/|9-|X|-8|8/|-6|X|X|9-||";
    var stringManipulation = new PrepareScorecardForAnalysis(scorecard);

    it('each bowl is an element of an array, with pipes included', function(){
      stringManipulation.toArrayofChars();
      expect(stringManipulation.scorecard).toEqual(["X","|","7","/","|","9","-","|","X","|","-","8","|","8","/","|","-","6","|","X","|","X","|","9","-","|","|"]);
    })

    it('removes pipes from scorecard', function(){
      stringManipulation.removePipeElements();
      expect(stringManipulation.scorecard).toEqual(["X","7","/","9","-","X","-","8","8","/","-","6","X","X","9","-"])
    })
  })

  describe('One bonus ball', function (){

    var scorecard = "5/|5/|5/|5/|5/|5/|5/|5/|5/|5/||5";
    var stringManipulation = new PrepareScorecardForAnalysis(scorecard);

    it('take off bonus balls from scorecard and add to bonus attribute', function(){
      stringManipulation.bonusCheck();
      expect(stringManipulation.bonus).toEqual(["5"]);
    })

    it('each bowl is an element of an array, with pipes included', function(){
      stringManipulation.toArrayofChars();
      expect(stringManipulation.scorecard).toEqual([ '5', '/', '|', '5', '/', '|', '5', '/', '|', '5', '/', '|', '5', '/', '|', '5', '/', '|', '5', '/', '|', '5', '/', '|', '5', '/', '|', '5', '/']);
    })

    it("removes pipes from scorecard", function(){
      stringManipulation.removePipeElements();
      expect(stringManipulation.scorecard).toEqual(['5','/','5','/','5','/','5','/','5','/','5','/','5','/','5','/','5','/','5','/'])
    })

  })

  describe('Two bonus balls', function (){

    var scorecard = "X|X|X|X|X|X|X|X|X|X||XX";
    var stringManipulation = new PrepareScorecardForAnalysis(scorecard);

    it('take off bonus balls from scorecard and add to bonus attribute', function(){
      stringManipulation.bonusCheck();
      expect(stringManipulation.bonus).toEqual(["X","X"]);
    })

    it('each bowl is an element of an array, with pipes included', function(){
      stringManipulation.toArrayofChars();
      expect(stringManipulation.scorecard).toEqual([ 'X', '|', 'X', '|', 'X', '|', 'X', '|', 'X', '|', 'X', '|', 'X', '|', 'X', '|', 'X', '|', 'X']);
    })

    it("removes pipes from scorecard", function(){
      stringManipulation.removePipeElements();
      expect(stringManipulation.scorecard).toEqual(['X','X','X','X','X','X','X','X','X','X'])
    })
  })

})
