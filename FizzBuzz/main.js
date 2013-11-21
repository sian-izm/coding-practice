var FizzBuzz = require('./FizzBuzz').FizzBuzz;
var DizzFizzBuzz = require('./DizzFizzBuzz').DizzFizzBuzz;


var dfbOutput = new DizzFizzBuzz();
var COUNT = 105;

// output
for ( var i = 1; i <= COUNT; i++ ){
    console.log(dfbOutput.speak(i));
}

// assert関数を使った継承の確認テスト----------------------------------------
function assert( message, expr ) {
    if ( !expr ) {
        throw new Error( message );
    }
    
    assert.count++;
    return true;
}

assert.count = 0;

try {
    assert("inherit FizzBuzz", dfbOutput instanceof FizzBuzz);
    assert("inherit DizzFizzBuzz", dfbOutput instanceof DizzFizzBuzz);
}
catch (e) {
    console.log("Test faild: " + e.message);    
}
//----------------------------------------