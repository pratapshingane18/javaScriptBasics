let val;

// Number to String
val =5;
val = String(5);
val = String(4+4);

// Bool to String
val = String(true);

// Date to String
val = String(new Date);

// Array
val = String([1,2,3,4]);

// toString Method
val = (5).toString();
val.charAt(true).toString();

//String to number
val =Number('5');

// Bool to number
val = Number(true);
val = Number(false);
// val = Number(NULL);
val =Number('hello');
val = Number([1,2,3]);

// ParseInt

val = parseInt('100.43');
val = parseFloat('123.34');


const val1 = String(5);
const val2 = 4;
const sum = val1 + val2;

console.log(sum);
console.log(typeof sum);




//Output
// console.log(val);
// console.log(typeof val);
// console.log(val.length);
// console.log(val.toFixed(2));