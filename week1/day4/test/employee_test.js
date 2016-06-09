var expect = require('chai').expect;
var Employee = require('../employee');
var Manager = require('../manager');

describe('#Employee', function(){
  describe('title property', function(){
    it('has a title', function(){
      var employee = new Employee();

      expect(employee.title).to.equal('');
    });
    it("title can be changed", function(){
      var employee = new Employee();
      var title = "Developer";
      employee.setTitle(title);

      expect(employee.title).to.equal(title)
    });
  });
  it('reports to a manager', function(){
    var employee = new Employee();
    var manager = new Manager();

    employee.reportsTo(manager);

    expect(employee.manager).to.equal(manager);
    expect(manager.reports).to.deep.equal([employee]);
  })
  it('improves output', function(){
    var employee = new Employee();
    employee.setTitle('Software Engineer');
    var manager = new Manager();
    manager.setTitle('CTO');

    employee.reportsTo(manager);

    expect(employee.toString()).to.equal('Employee: '
                                         + employee.title
                                         + ', Reporting to: '
                                         + employee.manager.title);
  });
})

describe('#Manager', function(){
  it('is a type of employee', function(){
    var manager = new Manager();

    expect(Employee.prototype.isPrototypeOf(manager)).to.equal(true)
  });
  it("has a title", function(){
    var manager = new Manager();

    expect(manager.title).to.equal('');
  });
  it('has reports', function(){
    var manager = new Manager();

    expect(manager.reports).to.deep.equal([]);
  });
  it('can add members to their team', function(){
    var manager = new Manager();
    manager.setTitle("CTO")
    var employee1 = new Employee();
    employee1.setTitle("Software Developer");
    var employee2 = new Employee();
    employee2.setTitle("Project Manager")

    manager.addReport(employee1)
    manager.addReport(employee2)

    expect(manager.reports).to.deep.equal([employee1, employee2]);
  });
  it('improves output', function(){
    var employee = new Employee();
    employee.setTitle('Software Engineer');
    var manager = new Manager();
    manager.setTitle('CTO');

    employee.reportsTo(manager);

    expect(manager.toString()).to.equal('Manager: '
                                         + manager.title
                                         + ', Has reports: '
                                         + manager.reports);
  });
})
