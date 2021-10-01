/*
Falsy:
false
0
empty string 
undefined
null
NaN
---------------------
Truthy:
true
any number (positive or negative truthy)
any string 
any string including single white-space, ' ', "0", 'false'
[] empty string
{} empty object
anything else that is not falsy will be truthy

*/

// const x = "0";
// if (x) {
//   console.log("variable is truthy");
// } else {
//   console.log("variable is falsy");
// }

// let x; // কোনো একটি ভেরিয়েবলকে ডিক্লেয়ার না করলে undefined দেখায়, আবার এই undefined হলো false.
// console.log("value of x", x);
// if (x) {
//   console.log("variable is truthy");
// } else {
//   console.log("variable is falsy");
// }

// let x = parseInt("hello");//NaN
// console.log("value of x", x);
// if (x) {
//   console.log("variable is truthy");
// } else {
//   console.log("variable is falsy");
// }

let x = {};
console.log("value of x", x);
if (x) {
  console.log("variable is truthy");
} else {
  console.log("variable is falsy");
}
