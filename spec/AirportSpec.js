describe ('Airport', function() {

    var airport
    var plane

    beforeEach(function() {
        airport = new Airport();
        plane = new Plane();
      });

    it('starts with an empty airport', function() {
        expect(airport.hanger.length).toBe(0);
    });

    it('it lands a plane in the airport', function() {
        airport.land(plane)
        expect(airport.hanger.length).toBe(1);
    });

    it('a plane takes from the airport', function() {
        airport.land(plane)
        airport.takeOff()
        expect(airport.hanger.length).toBe(0);
    });

});
