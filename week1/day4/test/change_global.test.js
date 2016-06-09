var expect = require("chai").expect;
var changeGlobal = require("../change_global");
var canWeDestroyTheWorld = require("../can_we_destroy_the_world")

describe("#changeGlobal", function(){
  it("The global object is returned with a variable changed", function(){
    var value = 1;
    var propName = "v";
    changeGlobal(propName, value);

    expect(global[propName]).to.equal(value);
  });
  it("can we destroy the world", function(){
    canWeDestroyTheWorld();
    expect(Math.random()).to.equal(1);
    expect(Math.random()).to.equal(1);
  });
});
