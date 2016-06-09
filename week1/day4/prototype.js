var myProto = {
  missingProp:"found it!"
};

var myObj = Object.create(myProto);

console.log(myObj.missingProp);//exists because missingProp is on prototype

var mySecondObj = Object.create(myProto);
