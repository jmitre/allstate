var expect = require('chai').expect;
var fileParsing = require('../file_parsing')

var testString = "D, [2014-05-10T14:48:19.093626 #85971] DEBUG -- : maximize proactive e-business\n\
I, [2014-05-10T14:48:19.093737 #85971]  INFO -- : benchmark vertical functionalities\n\
D, [2014-05-10T14:48:19.093772 #85971] DEBUG -- : monetize turn-key partnerships\n\
I, [2014-05-11T14:48:19.102577 #85971]  INFO -- : monetize integrated systems\n\
W, [2014-05-11T14:48:19.102602 #85971]  WARN -- : harness dynamic partnerships\n\
I, [2014-05-11T14:48:19.102626 #85971]  INFO -- : incubate distributed infomediaries\n\
I, [2014-05-12T14:48:19.110275 #85971]  INFO -- : envisioneer dot-com relationships\n\
D, [2014-05-12T14:48:19.110299 #85971] DEBUG -- : harness wireless convergence\n\
W, [2014-05-12T14:48:19.110324 #85971]  WARN -- : benchmark 24/365 ROI\n\
W, [2014-05-12T14:48:19.110349 #85971]  WARN -- : evolve user-centric mindshare\n\
I, [2014-05-12T14:48:19.110373 #85971]  INFO -- : empower virtual platforms"

describe('fileParsing', function(){
  describe('#returnLogDates', function() {
    it('can print solely the dates in the log', function(){
      var stringOutput = fileParsing.returnLogDates(testString)
      expect(stringOutput).to.equal('2014-05-10\n2014-05-11\n2014-05-12')
    })
  })
  describe('#forEachDate',function(){
    it('can print the number of log messages for each date.', function(){
      var stringOutput = fileParsing.forEachDate(testString);
      expect(stringOutput).to.equal('2014-05-10: 3\n2014-05-11: 3\n2014-05-12: 5')
    });
  });
  describe('#showLogTypeCount', function(){
    it('prints the count of logtype occurance for each date', function(){
      var stringOutput = fileParsing.showLogTypeCount(testString);
      expect(stringOutput).to.equal('2014-05-10: DEBUG: 2\n2014-05-10: INFO: 1\n2014-05-10: WARN: 0\n2014-05-11: DEBUG: 0\n2014-05-11: INFO: 2\n2014-05-11: WARN: 1\n2014-05-12: DEBUG: 1\n2014-05-12: INFO: 2\n2014-05-12: WARN: 2')
    })
  })
})
