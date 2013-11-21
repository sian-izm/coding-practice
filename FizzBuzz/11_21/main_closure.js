// FizzBuzzの継承
var FizzBuzz = require('./FizzBuzz_closure').FizzBuzz;
//var FizzBuzz = require('./FizzBuzz_closure_2').FizzBuzz;

// DizzFizzBuzzの継承
//var DizzFizzBuzz = require('./DizzFizzBuzz_closure').DizzFizzBuzz;
//var DizzFizzBuzz = require('./DizzFizzBuzz_closure_2').DizzFizzBuzz;

var dfbOutput = new FizzBuzz();
// var dfbOutput = new DizzFizzBuzz();

/*
var COUNT = 15;
// output
for ( var i = 1; i <= COUNT; i++ ){
    console.log(dfbOutput.speak());
}
*/

// assert関数によるテスト----------------------------------------
function assert( message, expr ) {
    if ( !expr ) {
        throw new Error( message );
    }
    
    assert.count++;
    return true;
}

assert.count = 0;

try {
    assert("print 1", (dfbOutput.speak() === '1' ));
    assert("print 2", (dfbOutput.speak() === '2' ));
    assert("print Fizz", (dfbOutput.speak() === 'Fizz' ));
    assert("print 4", (dfbOutput.speak() === '4' ));
    assert("print Buzz", (dfbOutput.speak() === 'Buzz' ));
    assert("print 6", (dfbOutput.speak() === 'Fizz' ));
    var i = 0;
    while(i < 8){
        dfbOutput.speak();
        i++;
    }
    assert("print FizzBuzz", (dfbOutput.speak() === 'FizzBuzz' ));
}
catch (e) {
    console.log("Test faild: " + e.message);    
}

//----------------------------------------