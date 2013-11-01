var FizzBuzz = require('./FizzBuzz').FizzBuzz;

// define the DizzFizzBuzz class
function DizzFizzBuzz() {
    // Call the parent constructor
    FizzBuzz.call( this );
}

// inherit FizzBuzz
DizzFizzBuzz.prototype = new FizzBuzz();
DizzFizzBuzz.prototype.constructor = DizzFizzBuzz;

// add judge_dizz method
DizzFizzBuzz.prototype.judge_dizz = function ( n ) {
    // 3でも5でも7でも割り切れるときはDizzFizzBuzz
    if ( n % 3 === 0 && n % 5 === 0 && n % 7 === 0 ) return "DizzFizzBuzz";
    // 5でも7でも割り切れるときはDizzBuzz
    if ( n % 5 === 0 && n % 7 === 0 ) return "DizzBuzz";
    // 3でも7でも割り切れるときはDizzFizz
    if ( n % 3 === 0 && n % 7 === 0 ) return "DizzFizz";
    // 7で割り切れるときはDizz
    if ( n % 7 === 0 )  return "Dizz";
    // 上記いずれでも無い時は、0を返す.
    FizzBuzz.prototype.speak( n );
};

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
    assert("inherit FizzBuzz", DFB_output instanceof FizzBuzz);
    assert("inherit DizzFizzBuzz", DFB_output instanceof DizzFizzBuzz);
}
catch (e) {
    console.log("Test faild: " + e.message);    
}
//----------------------------------------
