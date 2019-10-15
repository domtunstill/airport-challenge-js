function Airport(weather = new Weather()) {
    this.hanger = [];
    this.weather = weather;
    capacity = 20;
};

Airport.prototype.land = function(plane) {
  if (this.weather.isStormy() === false && this.isFull() === false) {
    this.hanger.push(plane);}
    else { return false; }
  };

Airport.prototype.takeOff = function(plane) {
    if (this.weather.isStormy() === false) {
    var index = this.hanger.indexOf(plane);
    this.hanger.splice(index, 1);} 
    else { return false; }
  };

  Airport.prototype.isFull= function(plane) {
    if (this.hanger.length >= capacity) {
    return true; } 
    else { return false; }
  };