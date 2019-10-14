function Airport() {
    this.hanger = []
};

Airport.prototype.land = function(plane) {
    this.hanger.push(plane);
  };

Airport.prototype.takeOff = function() {
    this.hanger.pop();
  };