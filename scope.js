//local scope/ local variable যা ফাংশনের ভিতরে ডিক্লেয়ার করা হয়।
/* 
function add(first, second) {
  const result = first + second;
  console.log(result);
  return result;
}
const sum = add(11, 35);

 */
//global scope/ global variable যা ফাংশনের বাহিরে ডিক্লেয়ার করা হয়।
/* 
const favNum = 27;

function add(first, second) {
  const result = first + second;
  console.log(result);
  console.log(favNum);
  return result;
}
const sum = add(11, 35);

 */
// global scope local scope এ ব্যবহার করা যায় কিন্তু local scope সব জায়গায় ব্যবহার করা যায় না।

// block scope- সাধারনত second bracket এর মাঝে যা ডিক্লেয়ার করা হয় তা অন্য কোথাও কাজ করে না যা block scope। কিন্তু secong bracket এর ভিতরে যদি var ব্যবহার করা হয় তাহলে তা আর block scope থাকে না।

function add(first, second) {
  // console.log(mood); //var mood = "happy"; ব্যবহার করে উপরে ডিক্লেয়ার করলে hoisting করে এর মান undefined দেখায়, এর মান দেখাবে না। এজন্য var ব্যবহার করব না।
  const result = first + second;
  if (result > 9) {
    let mood = "happy";
    mood = "cranky";
  }
  // console.log(mood);
  return result;
}
const sum = add(11, 35);
// console.log(mood);

// variable declare করার আগে let বা const ব্যবহার না করলে তা implicit global হয়ে যায় যাকে global leaking বলে এবং যেকোনো জায়গা থেকে output দেখতে চাইলে তা দেখা যায় আর এজন্য এটি ব্যবহার করা উচিত নয়।

for (let i = 0; i < 10; i++) {}
// console.log(i); // এখানে var i দিয়ে declare করলে তা for loop এর বাহিরেও কাজ করবে কিন্তু let i দিয়ে declare করলে for loop এর বাহিরে কাজ করবে না।
