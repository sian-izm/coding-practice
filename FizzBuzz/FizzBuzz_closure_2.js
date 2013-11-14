// FizzBuzz用クラス定義
function FizzBuzz() {
    var n = 0;
    this.isAbleToBeDevidedByThree = function ( ) {
        if ( n % 3 === 0 ) { 
	    n++;
	    return 1;
	}
    };
    this.isAbleToBeDevidedByFive = function ( ) {
        if ( n % 5 === 0 ) { 
	    n++;
	    return 1;
	}
    };
    this.getNumber = function () { 
	n++;
	return n.toString;
    }
}

FizzBuzz.prototype.speak = function () {
    if( this.isAbleToBeDevidedByThree() && 
        this.isAbleToBeDevidedByFive() ){
        return "FizzBuzz";
    }
    else {
        return this.getNumber();
    }
}

var fizz_buzz = new FizzBuzz(15);
console.log(fizz_buzz.speak());
console.log(fizz_buzz.speak());
console.log(fizz_buzz.speak());
console.log(fizz_buzz.speak());
console.log(fizz_buzz.speak());
console.log(fizz_buzz.speak());

//exports.FizzBuzz = FizzBuzz;
