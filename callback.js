function welcomeMessage(name, greetHandler) {
  greetHandler(name);
}
// const names = ["Tom Hanks", "Tom Brady", "Tom Cruise"];
// const myObj = { name: "Tom Chinku", age: 11 };
function greetMorning(name) {
  console.log("Good morning", name);
}
function greetAfternoon(name) {
  console.log("Good afternoon", name);
}
function greetEvening(name) {
  console.log("Good evening", name);
}
welcomeMessage("Tom Hanks", greetMorning);
welcomeMessage("Sakib Hanks", greetAfternoon);
welcomeMessage("Bappa Raj", greetEvening);

// একটি ফাংশনকে যদি প্যারামিটার হিসাবে পাঠানো হয় এবং যেখানে পাঠানো হয়েছে সেই ফাংশনের ভিতরে যদি সেই প্যারামিটারকে ফাংশন হিসাবে কল করা হয় তবে তাকে callback function বলে।

// sample 01
function handleClick() {
  console.log("button is clicked");
}

document.getElementById("my-btn").addEventListener("click", handleClick);

// sample 01 various
document.getElementById("btn").addEventListener("click", function () {
  console.log("button is clicked");
});
