class FizzBuzz
    n = 1
    privateMethod = ->
        n % 3 is 0
    constructor : ->   
        n = 1
        @isAbleToBeDevidedByThree = ->
            n % 3 is 0
        @isAbleToBeDevidedByFive = ->
            true if n % 5 is 0
        @getNumber = ->
            n.toString()
        @increment = ->
            n++

    speak : ->
        c = if @isAbleToBeDevidedByThree() and  @isAbleToBeDevidedByFive()
            #@increment()
            "FizzBuzz"
        else if @isAbleToBeDevidedByThree()
            #@increment()
            "Fizz"
        else if  @isAbleToBeDevidedByFive()
            #@increment()
            "Buzz"
        else
            @getNumber()
            #@increment()
            #num
        @increment()   
        c
fizz_buzz = new FizzBuzz()
console.log(fizz_buzz.isAbleToBeDevidedByThree())
#for i in [1..16]
#    console.log(fizz_buzz.speak())    
