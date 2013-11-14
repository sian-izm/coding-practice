// FizzBuzz用クラス定義
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
            return speak();
        },
        shout : function () {
            return shout();
        }
    };
}

var fizz_buzz = FizzBuzz();
var fizz_buzz2 = FizzBuzz();

for ( var i = 1; i <= 15; i++ ) {
    console.log(fizz_buzz.speak());
}

for ( var i = 1; i <= 6; i++ ) {
    console.log(fizz_buzz2.shout());
}

exports.FizzBuzz = FizzBuzz;