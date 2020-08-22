//Puzzle D - Bonus Puzzle

//How do functions work? ------------------------
function callTwice(target) {
    target();
    target();
}
function sayHello() {
    console.log('Hello');
}
function callWith(a, b) {
    a(b);
}
console.log('first');
callWith(sayHello, callTwice);
//Hello
console.log('second');
callWith(callTwice, sayHello); //1 function which calls 2 functions
//Hello
//Hello 

//What is the scope of 'var'? -----------------------------------------
var x = 5;
console.log('first x is ' + x); //5
if (x == 5) {
    var x = 6;
    console.log('second x is ' + x); //6
}
console.log('third x is ' + x); //6

//What happens to variables in functions? ------------------------------
// -- with var, since i end up being equal to 4, then all array[i] = 4
// -- if change with let, we have 0,1,2,3
let array = [];
for (let i = 0; i < 4; i++) {
    array[i] = function () { return i; };
}
console.log(array[0]());
console.log(array[1]());
console.log(array[2]());
console.log(array[3]());

//More puzzles ------------------------------------------------
function addN(n) {
    return function (x) {
        return x + n;
    }
}

var values = [0, 1, 2, 3, 4, 5];
console.log(addN); //[Function: addN]
console.log(addN(10)); //[Function]
console.log(addN(10)(5)); //15
//map creates a new array with new elements after a function has been performed
console.log(values.map(addN(10))); //[10,11,12,13,14,15]
//super super advanced
console.log(values.map(addN).map(values.map.bind(values)));
// [[0,1,2,3,4,5]
// [1,2,3,4,5,6]
// [2,3,4,5,6,7]
// [3,4,5,6,7,8]
// [4,5,6,7,8,9]
// [5,6,7,8,9,10]]