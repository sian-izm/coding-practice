// FizzBuzz
function FizzBuzz() {
//    var this = {};
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
        return num;
    };
    this.increment = function () { 
        n++;
    };
//    return this;
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
        var num = this.getNumber();
        this.increment();
        return num;
    }
}


// newしないとprototypeが継承できないためspeakメソッドが使えない。
//var fizz_buzz = FizzBuzz();

var fizz_buzz = new FizzBuzz();
for ( var i = 1; i <= 16; i++ ){
    console.log(fizz_buzz.speak());
}

//exports.FizzBuzz = FizzBuzz;
