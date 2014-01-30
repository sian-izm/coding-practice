for i in [1..15]
    fizz = i % 3 == 0
    buzz = i % 5 == 0

    console.log i
    if fizz and buzz
        console.log 'fizzBuzz'
    if fizz
        console.log 'fizz'
    if buzz
        console.log 'buzz'