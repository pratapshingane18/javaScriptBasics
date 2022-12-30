/*

Data Types:
    |- Primitive
    |- Referenced

    Primitive         |     Reference 

    String                  Arrays
    Number                  Objects Literal
    Boolean                 Functions
    Null                    Dates
    Undefined               Anything Else
    Symbols(ES6)


Same Variable Can hold multiple Data Type
*** JavaScript is Dynamically Typed Language i.e. we dont have to mention about the data type of the variable
unless other Statically typed languages like CPP, C#, Java

TypeSCript - Superset of Javascript + other features.

*/

// Primitive

//String
const names = 'lily';
console.log(typeof names);

//Number
const age = 24;
console.log(typeof age);

//Boolean
const hasKids = true;
console.log(typeof hasKids);

// NULL
const car = null;
console.log(typeof car);// It will return object but its NULL (bug in jS)

//Undefined
let test;
console.log(typeof test);

//Symbol
const sym= Symbol();
console.log(typeof sym);

//Reference type

//Array
const hobbies = ['Date','Trekk','Explore','Overthink'];
console.log(typeof hobbies);

// Object Literal
const address ={
    city:'amt',
    street:'Camp'
}

console.log(typeof address);

const today = new Date();
console.log(today);
console.log(typeof today);



