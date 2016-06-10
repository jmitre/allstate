var expect = require('chai').expect;
var wordCount = require('../wordCount');

describe('#wordCount', function(){
  it('Given a sentence, counts the occurence of each word', function(){
      var sentence = 'Permission is hereby granted, free of charge, to any person obtaining a copy\n\
      of this software and associated documentation files (the "Software"), to deal';
      var output = wordCount(sentence);

      expect(output).to.deep.equal({ permission: 1,
        is: 1, hereby: 1, granted: 1, free: 1, of: 2,
         charge: 1, to: 2, any: 1, person: 1, obtaining: 1,
          a: 1, copy: 1, this: 1, software: 2, and: 1,
           associated: 1, documentation: 1, files: 1, the: 1, deal: 1 })
  });
});
