

module.exports = function (string) {
  var wordArray = string.replace(/[.,\/#!$%\^&\*\n;:"{}=\-_`~()]/g,"").toLowerCase().split(' ');
  wordArray = wordArray.filter(function(item){return item !== ''})
  var wordObject = {}
  for(var i=0;i<wordArray.length;i++) {
    if (!wordObject[wordArray[i]]) {
      wordObject[wordArray[i]] = countWord(wordArray[i], wordArray);
    }
  }
  return wordObject;
}

function countWord (word, array) {
  var count = 0;
  for(var i =0;i<array.length;i++) {
    if (array[i] === word) count++
  }
  return count
}
