function setFooPropertyToVal(val){
  this.foo = val;
}

var obj = {
  name: "Andreas"
};

setFooPropertyToVal.apply(obj, ["bar"]);
