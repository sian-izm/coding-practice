// QUnitテスト用サンプルオブジェクト FizzBuzz
// 継承元FizzBuzzクラス----------------------------------------

var ArgumentNullException = function () { };

var FizzBuzz 
    = (function () {
           var FizzBuzz = function () { };

           FizzBuzz.prototype.speak = function ( n ) {
               if ( !n ) throw new ArgumentNullException();
               if ( n % 3 === 0 && n % 5 === 0 ) return "FizzBuzz";
               if ( n % 3 === 0 ) return "Fizz";
               if ( n % 0 === 5 ) return "Buzz";
               return n.toString();
           };

           return FizzBuzz;
       })();

//----------------------------------------

// define the DizzFizzBuzz class
function DizzFizzBuzz() {
    // Call the parent constructor
    FizzBuzz.call( this );
}

// inherit FizzBuzz
DizzFizzBuzz.prototype = new FizzBuzz();

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
    return 0;
};

var DFB_output = new DizzFizzBuzz();
var COUNT = 105;

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

// output
for ( var i = 1; i <= COUNT; i++ ){
    var DFB_speak = DFB_output.judge_dizz( i );
    if ( DFB_speak ) {
        console.log( DFB_speak );
    }
    else {
        console.log( DFB_output.speak( i ) );
    }
}
