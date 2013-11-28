class FizzBuzz
    constructor : ->
        n = 0
        speak = () ->
            n++
            return "FizzBuzz" if n % 3 is 0 && n % 5 is 0
            return "Fizz" if n % 3 is 0
            return "Buzz" if n % 5 is 0
            return n.toString()
        shout = () ->
            n++
            return "FIZZBUZZ" if n % 3 is 0 && n % 5 is 0
            return "FIZZ" if n % 3 is 0
            return "BUZZ" if n % 5 is 0
            return n.toString()
        return { speak : speak(), shout: shout() }

fizz_buzz = new FizzBuzz()
for i in [1..16]
    console.log(fizz_buzz.speak())
