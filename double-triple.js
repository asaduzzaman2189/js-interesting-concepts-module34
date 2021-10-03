const first = "0";
const second = false;
if (first == second) {
  console.log("condition is true");
} else {
  console.log("condition is false");
}

//more comparison
// const a = { name: "ali" };
// const b = { name: "ali" };

// object কে যখন চেক করা হয় == দিয়ে তখন এটি অবজেক্টের address এর সাথে তুলনা করে।

// primitive type গুলো == বা === দিয়ে চেক করা যাবে কিন্তু অবজেক্ট == দিয়ে চেক করা যাবে না, শুধু === দিয়ে চেক করতে হবে। কারন অবজেক্ট হচ্ছে non-primitive.

const a = [];
const b = [];
if (a === b) {
  console.log("both are same");
} else {
  console.log("they are not same");
}
