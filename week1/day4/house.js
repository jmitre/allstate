function House(color, numberOfWindows){
  this.color = color;
  this.numberOfWindows = numberOfWindows;
  this.paint = function(newColor){
    this.color = newColor;
  }
}

House.prototype.addWindows = function(additionalWindows){
  this.numberOfWindows += additionalWindows;
}

var myHouse = new House("gery", 0)
