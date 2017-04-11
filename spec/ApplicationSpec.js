describe("Application", function(){

  beforeEach(function(){
    app = new Application()
  })

  it("returns correct score", function(){
    var input = "X|X|X|X|X|X|X|X|X|X||XX";
    expect(app.score(input)).toEqual(300);
  })

  it("returns correct score", function(){
    var input = "9-|9-|9-|9-|9-|9-|9-|9-|9-|9-||";
    expect(app.score(input)).toEqual(90);
  })

  it("returns correct score", function(){
    var input = "5/|5/|5/|5/|5/|5/|5/|5/|5/|5/||5";
    expect(app.score(input)).toEqual(150);
  })

  it("returns correct score", function(){
    var input = "X|7/|9-|X|-8|8/|-6|X|X|X||81";
    expect(app.score(input)).toEqual(167);
  })

})
