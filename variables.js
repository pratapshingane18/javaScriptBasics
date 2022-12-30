// var, let, const

var names='Prats here';
console.log(names);

names = "Not prats";
console.log(names);

// Variable can Include lettes, numbers, _, $
// Cannot start with Number

// Multi Word Variables:
var firstName = 'Ras'; // Camel case - recommended Herefor regular Variable
var first_name = 'pratss'; // UnderScore
var FirstName = 'Harrry'; //pascal case - recommended in OOPs
var firstname;


//LET

let city = 'Paris';
console.log(city);
city = 'Sangli';
console.log(city);

// Const (cannot change once assigned)

const College = 'WCE';
console.log(College);

/* Cannot be done

College= 'COEP';
console.log('College');


*/

const person = {
    name:'prats',
    age:21

}
person.name='you';
person.age = 32;
console.table(person);

const numers = [1,2,3,4,5];
numers.push(6);

console.log(numers);
