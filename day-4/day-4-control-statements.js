console.log("Control Statements in js");

// If statement
const x = 10;
// if (condition) {
// }

// The condition
// Can be true or false or truthy or falsy
// Always use true or false only. Try to avoid using truthy or falsy values in condition.
// It will make your code hard to read and understand

if (x > 5) {
  console.log("x is greater than 5");
} else {
  console.log("x is less than or equal to 5");
}

if (x < 20) {
  console.log("x is less than 20");
} else if (x < 30) {
  console.log("x is less than 30");
} else {
  console.log("x is greater than or equal to 30");
}

switch (x) {
  case 10:
    console.log("x is 10");
    break;
  case 20:
    console.log("x is 20");
    break;
  default:
    console.log("x is neither 10 nor 20");
}

if (x === 10) console.log("x is 10");
else if (x === 20) console.log("x is 20");
else console.log("x is neither 10 nor 20");

// === vs ==
// === is strict equality operator
// == is loose equality operator
// !=
// !==

const val1Str = "10";
const val2Num = 10;

const isEqualWithStrictEquality = val1Str === val2Num; // false
const isEqualWithLooseEquality = val1Str == val2Num; //  true
console.log({ isEqualWithStrictEquality, isEqualWithLooseEquality });
// Alwasys use strict equality operator (===) and strict inequality operator (!==) in your code. Never use loose equality operator (==) and loose inequality operator (!=) in your code. It will make your code hard to read and understand.

// Ternary operator
const isXGreaterThan5 =
  x > 5 ? "x is greater than 5" : "x is less than or equal to 5";
console.log(isXGreaterThan5);

// Loops
// // for loop
// for (let i = 0; i < 5; i++) {
//   console.log(i); // 0, 1, 2, 3, 4
// }

// // while loop
// let i = 0;
// while (i < 5) {
//   console.log(i); // 0, 1, 2, 3, 4
//   i++;
// }
// // do while loop
// do {
//   console.log(i); // 0, 1, 2, 3, 4
//   i++;
// } while (i < 5);

// Write a program that prints FOO BAR for numbers from 1 - 100
// If a number is divisible by 3, print FOO
// If a number is divisible by 5, print BAR
// If a number is divisible by both 3 and 5, print FOO BAR
// If a number is not divisible by 3 or 5, print the number itself

// 1 -> 1
// 2 -> 2
//3 -> FOO
//4 -> 4
//5 -> BAR
//6
//7
//8
//9
//10
//11
//12
//13
//14
//15 -> FOO BAR
// others..
//

const reminder = 6 % 3;
console.log({ reminder, isDivisibleBy3: reminder === 0 });

for (let i = 1; i <= 100; i++) {
  const isDivisibleBy3 = i % 3 === 0;
  const isDivisibleBy5 = i % 5 === 0;
  if (isDivisibleBy3 && isDivisibleBy5) {
    console.log("FOO BAR");
  } else if (isDivisibleBy3) {
    console.log("FOO");
  } else if (isDivisibleBy5) {
    console.log("BAR");
  } else {
    console.log(i);
  }
}

// Logical and operation: &&
// Logical OR Operation: ||

const num = 10;
const isDivisibleBy3 = num % 3 === 0;
const isDivisibleBy5 = num % 5 === 0;

if (isDivisibleBy3 && isDivisibleBy5) {
  console.log("BOTH");
} else if (isDivisibleBy3 || isDivisibleBy5) {
  console.log("ANy One");
}
