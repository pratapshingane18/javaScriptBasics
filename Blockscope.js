/* Let and const work in the way most programming language works
var values get changed if it modifies in Block scope but let and const didnt
*/


// Global Scope
var a = 1;
let b = 2;
const c = 3;

// function test() {
//   var a = 4;
//   let b = 5;
//   const c = 6;
//   console.log('Function Scope: ', a, b, c);
// }

// test();

// if(true) {
//   // Block Scope
//   var a = 4;
//   let b = 5;
//   const c = 6;
//   console.log('If Scope: ', a, b, c);
// }

// for(let a = 0; a < 10; a++) {
//   console.log(`Loop: ${a}`);
// }
// Global Scope a remains same for let

for(var a = 0; a < 10; a++) {
    console.log(`Loop: ${a}`);
  }
  // Global Scope a remains same for let

console.log('Global Scope: ', a, b, c);