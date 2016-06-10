var expect = require('chai').expect
var averageCharCount = require('../averageCharCount')

describe('#averageCharCount', function(){
  it('returns the average number of characters per line of the document', function(){
    var string = "THIS this this\ncounts Counts COUNTS\nA LOT"
    expect(averageCharCount(string)).to.equal("Average number of characters per line: 13")
  })
})
