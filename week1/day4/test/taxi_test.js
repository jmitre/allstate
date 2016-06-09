var expect = require("chai").expect;
var Taxi = require("../taxi");

describe("#Taxi", function(){
  describe("seats occupied", function(){
    it("can hold passengers", function(){
      var taxi = new Taxi();

      expect(taxi.passengers).to.deep.equal([]);
    });
    it("can pick up passengers", function(){
      var taxi = new Taxi();

      taxi.addPassenger("Jon");

      expect(taxi.passengers).to.deep.equal(["Jon"]);
    });
    it("cannot add more than 4 passengers at once", function(){
      var taxi = new Taxi();
      taxi.addPassenger("John");
      taxi.addPassenger("Jay");
      taxi.addPassenger("Jason");
      taxi.addPassenger("Jamie");
      taxi.addPassenger("James");

      expect(taxi.passengers).to.deep.equal(["John", "Jay", "Jason", "Jamie"]);
    });
    it("can drop off passengers", function(){
      var taxi = new Taxi();
      taxi.addPassenger("John");
      taxi.addPassenger("Jason");
      taxi.addPassenger("Jay");
      taxi.dropOffPassenger("John");

      expect(taxi.passengers).to.deep.equal(["Jason", "Jay"]);
    });
    it("Alerts customers when full", function(){
      var taxi = new Taxi();

      expect(taxi.full).to.equal(false);

      taxi.addPassenger("John");
      taxi.addPassenger("Jason");
      taxi.addPassenger("Jay");
      taxi.addPassenger("James");

      expect(taxi.full).to.equal(true);

      taxi.addPassenger("Jamie");

      expect(taxi.passengers).to.deep.equal(["John", "Jason", "Jay", "James"]);
    });
  });
  describe("location", function(){
    it("has location", function(){
      var taxi = new Taxi();

      expect(taxi.location).to.equal("Home Base");
    });
    it("changes location when it drives", function(){
      var taxi = new Taxi();
      taxi.drive("Broadway and 8th");

      expect(taxi.location).to.equal("Broadway and 8th")
    })
  });

});
