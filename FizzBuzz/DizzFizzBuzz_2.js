var DizzFizzBuzz = ( function() {
                         var DizzFizzBuzz = function () {
                             // Call the parent constructor
                             FizzBuzz.call( this );
                         }

                         // inherit FizzBuzz
                         DizzFizzBuzz.prototype = new FizzBuzz();
                         DizzFizzBuzz.prototype.constructor = DizzFizzBuzz;

                         // add judge_dizz method
                         DizzFizzBuzz.prototype.speak = function ( n ) {
                             // 3でも5でも7でも割り切れるときはDizzFizzBuzz
                             if ( n % 3 === 0 && n % 5 === 0 && n % 7 === 0 ) return "DizzFizzBuzz";
                             // 5でも7でも割り切れるときはDizzBuzz
                             if ( n % 5 === 0 && n % 7 === 0 ) return "DizzBuzz";
                             // 3でも7でも割り切れるときはDizzFizz
                             if ( n % 3 === 0 && n % 7 === 0 ) return "DizzFizz";
                             // 7で割り切れるときはDizz
                             if ( n % 7 === 0 )  return "Dizz";
                             // 上記いずれでも無い時は、0を返す.
                             return FizzBuzz.prototype.speak( n );
                         };
                         return DizzFizzBuzz;
                     })();

exports.DizzFizzBuzz = FizzBuzz;