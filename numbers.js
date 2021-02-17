// 1. Minimum and maximum

// a. Lowest Number
// Print out the lowest number between -1 and 4.
console.log(Math.min(-1, 0, 1, 2, 3, 4));

// b. Highest Number
// Print out the highest number between -1 and 4.
console.log(Math.max(-1, 0, 1, 2, 3, 4));

// 2. Rounding
// a. Round up
// Round up each of the following numbers to the nearest integer: 3321.32321, 326.76, 76788.7, -9.78, 43.342.

// let roundUp = float1 => console.log(Math.ceil(float1));
// //Up(3321.32321, 326.76, 76788.7, -9.78, 43.342);

function roundUp(num) {
  let result = Math.ceil(num);
  console.log(result);
}
roundUp(3321.32321);
roundUp(326.76);
roundUp(76788.7);
roundUp(-9.78);
roundUp(43.342);

// b. Round down
// Round down each of the following numbers to the nearest integer: 3321.32321, 326.76, 76788.7, -9.78, 28.329.
// Strings and Numbers
//let roundDown = float2 => console.log(Math.floor(float2));
//Up(3321.32321, 326.76, 76788.7, -9.78, 43.342);

function roundDown(num) {
  let result = Math.floor(num);
  console.log(result);
}
roundDown(3321.32321);
roundDown(326.76);
roundDown(76788.7);
roundDown(-9.78);
roundDown(43.342);

// 1. Concatenation.
// Create two variables. One variable should contain a string value and the other should contain a number. Concatenate the string and the number.
// let introSentence = "Hi, my name is Nancy and I am";
// let age = 25;
// Expected Output:
// "Hi, my name is Nancy and I am 25"
// In this case, what is the + operator doing? Comment your answer in the js file.
let introSent = "Hi, my name is Nancy and I am";
let age = 25;
console.log(introSent + " " + age);
console.log(`${introSent} ${age}`);

//combining a string and a number, 25 is now a string

// 2. Converting
// Create a variable with the value of “1005”. Convert it to a number.
let str1 = "1005";
let num1 = parseInt(str1);
console.log(str1);
console.log(num1);
console.log(parseInt(str1));
// Create a variable with the value of “10.05". Convert it to a number.
let str2 = "10.05";
let num2 = parseFloat(str2);
console.log(str2);
console.log(num2);
console.log(parseFloat(str2));
