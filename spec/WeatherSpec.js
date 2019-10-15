describe ('Weather', function() {

    var weather

    beforeEach(function() {
        weather = new Weather();
      });

    it('returns true if weather is stormy', function() {
        spyOn(Math, 'random').and.returnValue(0.8);
        expect(weather.isStormy()).toBe(true);
    });

    it('returns false if weather is stormy', function() {
        spyOn(Math, 'random').and.returnValue(0.6);
        expect(weather.isStormy()).toBe(false);
    });

});
