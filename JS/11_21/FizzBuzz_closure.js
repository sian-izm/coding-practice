// FizzBuzz
function FizzBuzz() {
    var n = 0;
    
    function speak () {
        n++;
        if ( n % 3 === 0 && n % 5 === 0 ) return "FizzBuzz";
        if ( n % 3 === 0 ) return "Fizz";
        if ( n % 5 === 0 ) return "Buzz";
        return n.toString();
    }

    function shout () {
        n++;
        if ( n % 3 === 0 && n % 5 === 0 ) return "FIZZBUZZ";
        if ( n % 3 === 0 ) return "FIZZ";
        if ( n % 5 === 0 ) return "BUZZ";
        return n.toString();
    }


    return {
        speak : function () {
            return this.speak();
        },
        shout : function () {
            return this.shout();
        }
    };
}

var fizzbuzz = new FizzBuzz();
//var fizzbuzz = FizzBuzz();
console.log(fizzbuzz.speak);


exports.FizzBuzz = FizzBuzz;