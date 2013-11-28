class FizzBuzz
    constructor : ->   
        n = 1
        @isAbleToBeDevidedByThree = ->
            true if n % 3 is 0
        @isAbleToBeDevidedByFive = ->
            true if n % 5 is 0
        @getNumber = ->
            n.toString()
        @increment = ->
            n++

    speak : ->
        if @isAbleToBeDevidedByThree() &&  @isAbleToBeDevidedByFive()
            @increment()
            "FizzBuzz"
        else if @isAbleToBeDevidedByThree()
            @increment()
            "Fizz"
        else if  @isAbleToBeDevidedByFive()
            @increment()
            "Buzz"
        else
            num = @getNumber()
            @increment()
            num
            
#fizz_buzz = new FizzBuzz()
#for i in [1..16]
#    console.log(fizz_buzz.speak())    
