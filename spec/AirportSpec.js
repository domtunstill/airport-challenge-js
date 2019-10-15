describe ('Airport', function() {

    var airport
    var plane
    var weather

    beforeEach(function() {
        plane = jasmine.createSpy('Plane');
        weather = jasmine.createSpyObj('Weather', ['isStormy']);
        airport = new Airport(weather);
      });

    it('starts with an empty airport', function() {
        expect(airport.hanger.length).toBe(0);
    });

    it('it lands a plane in the airport', function() {
        weather.isStormy.and.returnValue(false);
        airport.land(plane);
        expect(airport.hanger.length).toBe(1);
    });

    it('it prevents landing of a plane in the airport if weather is stormy', function() {
        weather.isStormy.and.returnValue(true);
        airport.land(plane);
        expect(airport.hanger.length).toBe(0);
    });

    it('it prevents landing of a plane in the airport if airport is full', function() {
        weather.isStormy.and.returnValue(false);
        var times = 20;
        while(times > 0){
        airport.land(plane);
        times --;
        };
        airport.land(plane);
        expect(airport.hanger.length).toBe(20);
    });

    it('a plane takes off from the airport', function() {
        weather.isStormy.and.returnValue(false);
        airport.land(plane);
        weather.isStormy.and.returnValue(false);
        airport.takeOff(plane);
        expect(airport.hanger.length).toBe(0);
    });

    it('a plane does not take off from the airport if weather is stormy', function() {
        airport.land(plane);
        weather.isStormy.and.returnValue(true);
        expect(airport.takeOff(plane)).toBe(false);
    });

});
