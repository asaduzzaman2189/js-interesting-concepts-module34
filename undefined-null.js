/*
1. variable value not assigned
2. function but didn't write return anything
3. just wrote return but didn't return anything
4. parameter that isn't passed
5. property that doesn't exist in an object
6. accessing array element out of range
7.accessing deleted array element
8. explicitly set value to undefined

*/

let first;
// console.log(first);

function second(x, y) {
  const sum = x + y;
  //return না দিলে undefined দেখাবে।
}
const result = second(2, 10);
// console.log(result);

function add(a, b) {
  const sum = a + b;

  if (b < 10) {
    return; //undefinde
  }
  const fun = a * b;
  return sum;
}

const fourth = add(2, 7);
// console.log(fourth);

function double(a, b) {
  const result = a * 2;
  //   console.log(b); //undefined
  return result;
}
double(81); //undefined cause second parameter not exist

const fifth = { name: "sogir", age: 15, location: "bandarbon" };
// console.log(fifth.phone);//undefined

const sixth = [54, 12, 41, 3];
// console.log(sixth[4]);

delete sixth[2];
// console.log(sixth[2]); //undefined

const seventh = undefined;
// console.log(seventh);

const myObj = { name: "samad", profession: null };
