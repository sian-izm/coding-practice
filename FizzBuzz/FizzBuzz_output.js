// FizzBuzz関数出力用スクリプト

function FizzBuzz_output( count ){
    var fizzBuzz = new FizzBuzz();
    
    console.log("hoge");
    for( var i = 1; i <= count; i++ ){
        document.write(fizzBuzz.speak( i ) + "<br>");
    }

}