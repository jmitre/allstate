function Taxi(){
  this.passengers = [];
  this.location = "Home Base";
  this.full = false;
}

Taxi.prototype.addPassenger = function(name){
  if(this.full === false){
    this.passengers.push(name);
  }
  if(this.passengers.length === 4) {
    this.full = true;
  }
}

Taxi.prototype.dropOffPassenger = function(name){
  var index = this.passengers.indexOf(name);
  this.passengers.splice(index, 1);
}

Taxi.prototype.drive = function(location){
  this.location = location;
}



module.exports = Taxi;
