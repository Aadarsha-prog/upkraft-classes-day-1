// "use strict";

// // A is a Higher order fn
// // Because it takes
// // a function in its argument
// // function A(fn) {
// //   console.log("A");
// //   fn();
// // }

// // function B() {
// //   console.log("B", this);
// // }

// // A(B);

// // Javascript is a programming language
// // That supports OOP
// // As well as Functional Programming
// // As well as a procedural programming

// // Example of HOF
// // Looping througn an array with custom logic

// function numberHandler(num, index) {
//   const multiplier = 3;
//   const result = num * multiplier;
//   console.log(index, num, "*", multiplier, "=", result);
// }

// function strHandler(str) {
//   const newStr = `${str}-bc`;
//   console.log(newStr);
// }

// function objHandler(obj) {
//   const newObj = {
//     name: obj.name,
//     totalHours: obj.hours * 2,
//   };
//   console.log(newObj);
// }

// function loopOver(array, callbackFn) {
//   //   for (const item of array) {
//   //     callbackFn(item);
//   //   }
//   for (let i = 0; i < array.length; i++) {
//     callbackFn(array[i], i);
//   }
// }

// const arrayOfNumbers = [1, 2, 3, 4, 5];
// const arrayOfStrings = ["a", "b", "c", "d", "e"];
// const arrayOfObjects = [
//   { name: "abc", hours: 10 },
//   { name: "def", hours: 20 },
//   { name: "ghi", hours: 30 },
// ];

// const arrayOfCombinedParts = [true, 1, "abc,", { name: "ghi", hours: 30 }];

// loopOver(arrayOfNumbers, numberHandler);
// console.log("-----");
// loopOver(arrayOfStrings, strHandler);
// console.log("-----");
// loopOver(arrayOfObjects, objHandler);
// console.log("-----");
// loopOver(arrayOfCombinedParts, (item) => {
//   console.log(item);
// });
// //

// console.log("WITH FOREACH");
// arrayOfNumbers.forEach(numberHandler);

function asyncResolver(cb, ms) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(cb());
    }, ms);
  });
}

async function createUser(name, age) {
  const user = await asyncResolver(() => {
    console.log("Creating user", name, age);
    return {
      name,
      age,
    };
  }, 2000);

  return user;

  //   cb(user);

  // Notify some one
  // log the user inside the system
  // update our users cache
}

createUser("Suparth", 20).then((user) => {
  console.log("User has successfully logged in", user);
});

// createUser("Arbin", 20, (user) => {
//   console.log("User has successfully logged in", user);
// });

// createUser("Prabha", 20, (user) => {
//   console.log("The users cache has been updated", user);
// });
