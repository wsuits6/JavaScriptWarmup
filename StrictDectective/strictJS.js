// Use strict act like a detetive that yells at you when you dont follow correct JS code rules  like;
// Not Dclaring variables
//====================

//strict statement
"use strict"

//have to declare X as a const varible because of use strict statment
const x = 10; // ==> Declared
console.log(x);

function test() {
  const y = 20; // ==> Declared
}
test();
console.log(y);
