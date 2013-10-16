function FizzBuzz( count ) {
    var OUTPUT_FIZZ = 'Fizz';
    var OUTPUT_BUZZ = 'Buzz';
    var regexp = /^[0-9]+$/;
    
    if ( !regexp.test( count ) ) {
        alert("整数を入力してください。");
        return;
    }

    for ( var i = 1; i <= count; i++ ) {
        if ( i % 3 === 0 && i % 5 === 0 ){
            document.write( OUTPUT_FIZZ + OUTPUT_BUZZ );
        }
        else if ( i % 3 === 0 ) {
            document.write( OUTPUT_FIZZ );
        }
        else if ( i % 5 === 0 ) {
            document.write( OUTPUT_BUZZ );
        }
        else {
            document.write( i );
        }
        document.write( "<br>" );
    }
}
