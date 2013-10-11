// 3項演算子を利用した短縮系
function FizzBuzz( count ) {
    var OUTPUT_FIZZ = 'Fizz';
    var OUTPUT_BUZZ = 'Buzz';
    var regexp = /^[0-9]+$/;
    
    if ( regexp.test( count ) === false ) {
        alert( "整数を入力してください。" );
        return;
    }
    
    for ( var i = 0; i++< count;) {
        document.write( ( ( i % 3 ? "" : OUTPUT_FIZZ ) 
                        + ( i % 5 ? "" : OUTPUT_BUZZ ) 
                          || i ) + "<br>" );
    }
}
