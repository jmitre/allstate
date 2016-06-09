var Employee = require('./employee');

function Manager(){
  Employee.apply(this);
  this.reports = [];
}

Manager.prototype = Object.create(Employee.prototype);
Manager.prototype.constructor = Manager;

Manager.prototype.addReport = function(employee){
  this.reports.push(employee);
}


module.exports = Manager;
