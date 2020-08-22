//Puzzle C - Truthiness and comparisons 

//What is truthy and falsy? ---------------------------------------
if (true)
    console.log('first'); //print
if (false)
    console.log('second');
if (0)
    console.log('third');
if (1)
    console.log('fourth'); //print
if (-1)
    console.log('fifth'); //print
if ('')
    console.log('sixth');
if ('hello')
    console.log('seventh'); //print
if ('0')
    console.log('eighth'); //print
if ([])
    console.log('ninth'); //print
if ({})
    console.log('tenth'); //print

//How do we compare values? --------------------------------------
if (22 == '22')
    console.log('eleventh'); //print
if (22 == 'robot')
    console.log('twelfth');
if ('22' == 'robot')
    console.log('thirteenth');

//Can we check truthiness with equality? ----------------------------
if (true == 'hello')
    console.log('fourteenth');
if (false == '0')
    console.log('fifteenth'); //print