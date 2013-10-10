function FizzBuzz() {
    var FIZZBUZZ_COUNT = document.fizzbuzz.count.value;
    const OUTPUT_FIZZ = 'Fizz';
    const OUTPUT_BUZZ = 'Buzz';
    var regexp = /^[0-9]+$/;
    
    if (regexp.test( FIZZBUZZ_COUNT ) == false) {
        alert("整数を入力してください。");
    }
    for ( i = 1; i <= FIZZBUZZ_COUNT; i++ ) {
        if ( i % 3 == 0 && i % 5 == 0 ){
            document.write( OUTPUT_FIZZ + OUTPUT_BUZZ + "<br>");
        }
        else if ( i % 3 == 0 ) {
            document.write( OUTPUT_FIZZ + "<br>");
        }
        else if ( i % 5 == 0 ) {
            document.write( OUTPUT_BUZZ + "<br>");
        }
        else {
            document.write( i + "<br>");
        }
    }
}
