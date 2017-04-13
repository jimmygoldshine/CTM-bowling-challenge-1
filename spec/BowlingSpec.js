describe("Bowling", function(){

  beforeEach(function(){
    bowling = new Bowling()
  })

  it("returns correct score", function(){
    var scorecard = "X|X|X|X|X|X|X|X|X|X||XX";
    expect(bowling.score(scorecard)).toEqual(300);
  })

  it("returns correct score", function(){
    var scorecard = "9-|9-|9-|9-|9-|9-|9-|9-|9-|9-||";
    expect(bowling.score(scorecard)).toEqual(90);
  })

  it("returns correct score", function(){
    var scorecard = "5/|5/|5/|5/|5/|5/|5/|5/|5/|5/||5";
    expect(bowling.score(scorecard)).toEqual(150);
  })

  it("returns correct score", function(){
    var scorecard = "X|7/|9-|X|-8|8/|-6|X|X|X||81";
    expect(bowling.score(scorecard)).toEqual(167);
  })

})
