// 3項演算子を利用した短縮系
function FizzBuzz() {
    var FIZZBUZZ_COUNT = document.fizzbuzz.count.value;
    const OUTPUT_FIZZ = 'Fizz';
    const OUTPUT_BUZZ = 'Buzz';
    var regexp = /^[0-9]+$/;
    
    if ( regexp.test( FIZZBUZZ_COUNT ) == false ) {
        alert( "整数を入力してください。" );
    }
    
    for ( i = 1; i++< FIZZBUZZ_COUNT;) {
        document.write( ( ( i % 3 ? "" : OUTPUT_FIZZ ) 
                          + ( i % 5 ? "" : OUTPUT_BUZZ ) 
                          || i ) + "<br>" );
    }
}
