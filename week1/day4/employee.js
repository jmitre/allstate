function Employee(){
  this.title = '';
  this.manager = {};
}

Employee.prototype.setTitle = function(title){
  this.title = title;
}

Employee.prototype.reportsTo = function(manager){
  this.manager = manager;
  manager.addReport(this);
}

Employee.prototype.toString = function(){
  return 'Employee: ' + this.title + ', Reporting to: ' + this.manager.title;
}

module.exports = Employee;
