function MyObject(name, message) {
  this.name = String(name);
  this.message = String(message);
}


MyObject.prototype.getName = function() {
  return this.name;
}

MyObject.prototype.getMessage = function() {
  return this.message;
}

//MyObject.prototype = {
//  getName: function() {
//    return this.name;
//  },
//  getMessage: function() {
//    return this.message;
//  }
//};

var obj = new MyObject('hoge', 'fuga');
console.log(obj);
console.log(obj.getName());

function FizzBuzz(n) { 
    this.n = n;
 }

FizzBuzz.prototype.speak = function() { 
    if(this.isAbleToBeDevidedByThree() && 
       this.isAbleToBeDevidedByFive()){
        return "FizzBuzz";
    }
}
