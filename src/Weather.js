function Weather() {
};

Weather.prototype.isStormy = function() {
    var num
    num = Math.floor(Math.random() * 10 + 1);
    if (num > 7) { return true; }
    else { return false; }
  };