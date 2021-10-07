const a = "Alim";
const b = 23;
const c = true;
//null
//undefined

// primitive
// non-primitive or object

const nums = [23, 12, 56]; //javascript এ array একধরনের অবজেক্ট।
// console.log(typeof nums);
//Array.isArray(nums) //array চেক করার নিয়ম।

function triple(x, y, z) {
  x.age = 88888;
  //   y = 222;
  //   z = 333;
}
// console.log(typeof triple);
// console.log(triple.length); // length দিয়ে বুঝায় ফাংশনের কয়টি প্যারামিটার আছে।

const num1 = 3;
const num2 = 5;
const num3 = 7;
// triple(num1, num2, num3);
const myObj = { name: "Abdul kuddus", age: 17 };
triple(myObj);
console.log(myObj);//object সবসময় রেফারেন্স হিসেবে থাকে। তাই চেঞ্জ হয়। তাই এটাকে বলে pass by reference. এটা non-primitive. 
//আর primitive(সংখ্যা, স্ট্রিং ইত্যাদি) হচ্ছে pass by value. 

// console.log(num1, num2, num3);
// console.log(typeof null); //null একটি অবজেক্ট

// true-false.js দেখতে হবে। 