const Fname = 'Prats';
const Lname = 'There';
const age = 36;
const str = " hello My Name is Prat and I am a WeB developer Freelancer"
const tags = "web app flutter cloud Al Ml"
let val;

val = Fname + Lname;


// Concat:

val = Fname + ' ' + Lname;

// Append
val = 'WCE';
val += ' Sangi';

val = 'Hey I am ' + Fname;

//Escaping:

val = "that's my boy";
val = 'that\'s my boy';

//Length
val = Fname.length;

// concat
val = Fname.concat(' ',Lname);

// Changes case;
val = Fname.toUpperCase();
val = Lname.toLowerCase();

//indexOf()

val =Fname.indexOf('s');

//charAt()
val = Fname.charAt('2');

//Get last Char

val = Fname.charAt(Fname.length -1);

//Get substring;
val = Fname.substring(0,3);

// Slice
val = Fname.slice(0,3);

val = Fname.slice(0,-2);

// Split()
val = str.split(" ");
val =tags.split(" ");

// Replace
val = str.replace("Prat","Prats" );

// Include (if something is inside)
val = str.includes('foo');


console.log(val);