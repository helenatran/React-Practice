//Puzzle A - Objects

//What is an object? --------------------------------------------
var object = new Object();
object.name = 'Alice';
object[0] = 'value1';
object['age'] = 22;

console.log(object['age']); //22
console.log(object.age); //22
console.log(object['name']); //Alice
//with and without quotes
console.log(object[0]); //value1
console.log(object['0']); //value1

console.log(Object.keys(object)); //['0','name','age]

//What is a dictionary? -------------------------------------------
var dict = {};
dict.name = 'Alice';
dict[0] = 'value1';
dict['age'] = 22;

console.log(dict['age']); //22
console.log(dict.age); //22
console.log(dict['name']); //Alice
//with and without quotes
console.log(dict[0]); //value1
console.log(dict['0']); //value1

console.log(Object.keys(dict)); //['0','name','age]

//What is an array? ------------------------------------------------
var array = [];
array.push('value1');

console.log(array); //['value1']
console.log(array.length); //1

array[5] = 'value2';
console.log(array); //['value1', <4 empty items>, 'value2']
console.log(array.length); //6

array['key2'] = 'value3';
console.log(array); //['value1', <4 empty items>, 'value2', key2:'value3']
console.log(array.length); //6