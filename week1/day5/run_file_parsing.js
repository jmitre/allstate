var fileParsing = require('./file_parsing')
var fs = require('fs')

fs.readFile('./data/production.log', 'utf-8', function(err, data){
  if (err) throw err;
  console.log(fileParsing.returnLogDates(data))
  console.log(fileParsing.forEachDate(data))
  console.log(fileParsing.showLogTypeCount(data))
})
