// 3項演算子利用
function FizzBuzz() {
    var FIZZBUZZ_COUNT = document.fizzbuzz.count.value;
    const OUTPUT_FIZZ = 'Fizz';
    const OUTPUT_BUZZ = 'Buzz';
    var regexp = /^[0-9]+$/;
         
    if ( regexp.test( FIZZBUZZ_COUNT ) == false ) {
        alert( "整数を入力してください。" );
    }
         
    for ( i = 1; i <= FIZZBUZZ_COUNT; i++ ) {
        str = i % 3 == 0 ? OUTPUT_FIZZ : "" ;
        
        str += i % 5 == 0 ? OUTPUT_BUZZ 
            : i % 3 == 0 ? "" 
            :              i;

        document.write(str + "<br>");
    }
}
