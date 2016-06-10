module.exports = function(string){
  var stringArray = string.split('\n');
  var lengthArray = stringArray.map(function(stringLine){
    return stringLine.length
  });
  var sum = lengthArray.reduce(function(prev, curr){
    return prev + curr;
  });
  return "Average number of characters per line: " + (sum / lengthArray.length);
}
