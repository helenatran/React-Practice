//Puzzle B - Instantiation and inheritance
function Person(name, age) {
    this.name = name;
    this.age = age;
}

//What does new do? ------------------------------------------------
// -- new instantiate a new object (with different values of attributes)
var a = Person('Alice', 22);
console.log(a); //undefined
//console.log(a.age); //doesn't work because a is undefined

var b = new Person('Bob', 33);
console.log(b); // Person {name: 'Bob', age: '33'}
console.log(b.age); //33

console.log(name); //Alice
console.log(age); //22

//What is a prototype? -----------------------------------------------
// -- set values for attributes which are undefined
b.address = 'PO Box 123';
console.log(b.address); //PO Box 123
console.log(b.phone); //undefined

Person.prototype.address = 'Nowhere';
Person.prototype.phone = '2222';

delete b.address;

console.log(b.address); //Nowhere
console.log(b.phone); //2222

//What is 'this'? ----------------------------------------------------
Person.prototype.getDetails = function () {
    return this.name + ' is at ' + this.address;
};

console.log(b.getDetails); // [Function]
console.log(b.getDetails()); //Bob is at Nowhere

var getDetails = b.getDetails; //take the details of the original object 'Person'
console.log(getDetails()); //Alice is at undefined
//------------------------------------
//var getDetails = b.getDetails();
//console.log(getDetails) //Bob is at Nowhere