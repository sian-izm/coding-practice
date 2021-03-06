// Generated by CoffeeScript 1.6.3
(function() {
  var FizzBuzz, fizz_buzz;

  FizzBuzz = (function() {
    var n, privateMethod;

    n = 1;

    privateMethod = function() {
      return n % 3 === 0;
    };

    function FizzBuzz() {
      n = 1;
      this.isAbleToBeDevidedByThree = function() {
        return n % 3 === 0;
      };
      this.isAbleToBeDevidedByFive = function() {
        if (n % 5 === 0) {
          return true;
        }
      };
      this.getNumber = function() {
        return n.toString();
      };
      this.increment = function() {
        return n++;
      };
    }

    FizzBuzz.prototype.speak = function() {
      var num;
      if (this.isAbleToBeDevidedByThree() && this.isAbleToBeDevidedByFive()) {
        this.increment();
        return "FizzBuzz";
      } else if (this.isAbleToBeDevidedByThree()) {
        this.increment();
        return "Fizz";
      } else if (this.isAbleToBeDevidedByFive()) {
        this.increment();
        return "Buzz";
      } else {
        num = this.getNumber();
        this.increment();
        return num;
      }
    };

    return FizzBuzz;

  })();

  fizz_buzz = new FizzBuzz();

  console.log(fizz_buzz.isAbleToBeDevidedByThree());

}).call(this);
