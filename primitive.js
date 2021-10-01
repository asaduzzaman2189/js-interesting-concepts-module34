/* 
Data types 

Primitive data types- primitive হচ্ছে immutable(
অপরিবর্তনীয়). যা ডেটা পরিবররতন করে না। নতুন ভাবে ঐ ভেরিয়েবল এর নাম দিলেও তা আরেকটি মেমোরি স্পেস এ রাখে যদিও কম্পিউটারে তা আউটপুট দেখায় যে ঐ মানটা পরিবর্তন হয়েছে। যেগুলো single মান সেগুলোই primitive মান। 
1. number
2. string
3. boolean
4. undefined
5. null
7. symbol

Non-primitive data type
6. object
*/

//primitive
let a = "hello";
let b = a;
console.log(a, b);
a = "gello";
console.log(a, b);

// non primitive- x অথবা y যেকোনো একটা পরিবর্তন করলে দুটোই পরিবর্তন হয়।
const x = { job: "web developer" };
const y = x;
console.log(x, y);
// x.job = "front end developer";
y.job = "front end developer";
console.log(x, y);
