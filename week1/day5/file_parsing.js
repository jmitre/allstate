var fs = require("fs");

function returnLogDates(data){
  var dataArray = data.split('\n');
  var uniqueDateString = '';
  var filteredLog =  dataArray.filter(function(logLine){
    logLine = logLine.substring(4,14)
    //console.log(logLine)
    if(uniqueDateString === logLine){
      return false;
    }
    else{
      uniqueDateString = logLine;
      return true;
    }
  })
  var dateString = filteredLog.map(function(logLine){
      var logDate = logLine.substring(4,14);
      return logDate;
    }).join('\n');
    //console.log(dateString)
    return dateString;
}

function forEachDate (data){
  var uniqueDateArray = returnLogDates(data).split('\n');
  var dateArray = data.split('\n').map(function(logLine){
    var logDate = logLine.substring(4,14);
    return logDate;
  })
  for (var i = 0; i < uniqueDateArray.length;i++) {
    var sum = countDateInstances(uniqueDateArray[i], dateArray)
    uniqueDateArray[i] += ": " + sum;
  }
  return uniqueDateArray.join('\n')
}

function showLogTypeCount(data){
  var uniqueDateArray = returnLogDates(data).split('\n');
  var dateArray = data.split('\n');

  var type = 'D'
  var debug = dateArray.filter(checkLogType);

  type = 'I'
  var info = dateArray.filter(checkLogType);

  type = 'W'
  var warn = dateArray.filter(checkLogType);

  var debugDate = debug.map(function(logLine){
    var logDate = logLine.substring(4,14);
    return logDate;
  })

  var infoDate = info.map(function(logLine){
    var logDate = logLine.substring(4,14);
    return logDate;
  })

  var warnDate = warn.map(function(logLine){
    var logDate = logLine.substring(4,14);
    return logDate;
  })

  var debugCount = 0;
  var infoCount = 0;
  var warnCount = 0;
  for(var i = 0; i < uniqueDateArray.length ; i++ ){
    debugCount = countDateInstances(uniqueDateArray[i], debugDate);
    infoCount = countDateInstances(uniqueDateArray[i], infoDate);
    warnCount = countDateInstances(uniqueDateArray[i], warnDate);
    var date =  uniqueDateArray[i];
    uniqueDateArray[i] += ": DEBUG: "+ debugCount + "\n";
    uniqueDateArray[i] += date + ": INFO: "+ infoCount + "\n";
    uniqueDateArray[i] += date + ": WARN: "+ warnCount;
  }

return uniqueDateArray.join("\n");

  function checkLogType(logItem){
    return logItem.charAt(0) === type;
  }
}



function countDateInstances (date, dateArray) {
  var i = 0;
  var sum = 0;
  while (i<dateArray.length) {
    if (dateArray[i] === date) {
      sum++
    }
    i++
  }
  return sum;
}

function mapToDate(log){
  var logDate = logLine.substring(4,14);
  return logDate;
}

module.exports = {
  returnLogDates: returnLogDates,
  forEachDate: forEachDate,
  showLogTypeCount: showLogTypeCount
}
