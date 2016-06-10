var fs = require('fs');
var averageCharCount = require('./averageCharCount');

fs.readFile('./data/dev_talk.txt', 'utf-8', function(err, data){
  if(err) throw err;
  console.log(averageCharCount(data));
});
