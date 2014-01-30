// 3項演算子利用 ( 練習用 )
function FizzBuzz( count ) {
    var OUTPUT_FIZZ = 'Fizz';
    var OUTPUT_BUZZ = 'Buzz';
    var regexp = /^[0-9]+$/;
    var str;
         
    if ( !regexp.test( count ) ) {
        alert( "整数を入力してください。" );
        return;
    }
         
    for ( var i = 1; i <= count; i++ ) {
        str = i % 3 === 0 ? OUTPUT_FIZZ : "" ;
        
        str += i % 5 === 0 ? OUTPUT_BUZZ 
             : i % 3 === 0 ? "" 
             :              i;

        document.write( str + "<br>" );
    }
}