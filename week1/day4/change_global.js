function changeGlobal(propName, value){
  this[propName] = value;
}

module.exports = changeGlobal;
