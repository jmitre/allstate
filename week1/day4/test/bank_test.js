var expect = require('chai').expect;
var bank = require('../bank');

describe('#addToChecking', function(){
  it('does not change checkingBalance when a negative value is added', function(){
    var dollarAmount = -20;
    bank.addToChecking(dollarAmount);

    expect(bank.checkingBalance).to.equal(10);
  })
  it('does not change checkingBalance when a negative value is added', function(){
    var dollarAmount = 10;
    var shouldBe = bank.checkingBalance + dollarAmount;
    bank.addToChecking(dollarAmount);

    expect(bank.checkingBalance).to.equal(shouldBe);
  })
  it('does not allow desposits greater than the deposit limit', function(){
    var checkingBalance = bank.checkingBalance;
    var depositAmount = 250;

    bank.addToChecking(depositAmount);

    expect(bank.checkingBalance).to.equal(checkingBalance);
  })
})
