var wordCount = require('./wordCount')
var fs = require('fs')

fs.readFile('./data/mit_license.txt','utf-8',function (err, data){
  if (err) throw err;
  console.log(wordCount(data))
})
