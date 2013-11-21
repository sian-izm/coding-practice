// FizzBuzz
function FizzBuzz() {
    var n = 1;
    this.isAbleToBeDevidedByThree = function () {
        if ( n % 3 === 0 ) { 
            return 1;
        }
    };
    this.isAbleToBeDevidedByFive = function () {
        if ( n % 5 === 0 ) { 
            return 1;
        }
    };
    this.getNumber = function () { 
        var num = n.toString();
        this.increment();
        return num;
    };
    this.increment = function () { 
        n++;
    };
}

FizzBuzz.prototype.speak = function () {
    if ( this.isAbleToBeDevidedByThree() && 
         this.isAbleToBeDevidedByFive() ){
        this.increment();
        return "FizzBuzz";
    }
    else if ( this.isAbleToBeDevidedByThree() ) { 
        this.increment();
        return "Fizz";
    }
    else if ( this.isAbleToBeDevidedByFive() ) { 
        this.increment();
	    return "Buzz";
    }
    else {
        return this.getNumber();
    }
}

//exports.FizzBuzz = FizzBuzz;
