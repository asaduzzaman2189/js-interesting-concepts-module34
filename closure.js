function stopWatch() {
  let counter = 0;
  return function () {
    counter++;
    return counter;
  };
}
const clock1 = stopWatch();
console.log(clock1());
console.log(clock1());
console.log(clock1());

//chrome browser console থেকে কপি -
function stopWatch() {
  let counter = 0;
  return function () {
    counter++;
    return counter;
  };
}
undefined;
let clock1 = stopWatch();
undefined;
clock1();
1;
clock1();
2;
clock1();
3;
let clock2 = stopWatch();
undefined;
clock2();
1;
clock2();
2;
clock2();
3;
clock1();
4;
clock2();
4;
clock2();
5;
clock2();
6;
clock1();
5;
