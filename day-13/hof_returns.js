// function A() {
//   console.log("THIS IS A");

//   return function B() {
//     console.log("THIS IS B");
//     return function C(cb) {
//       console.log("THIS IS C");
//       cb();
//     };
//   };
// }

// const fnRefOfB = A();
// const fnRefOfC = fnRefOfB();
// fnRefOfC(() => {
//   console.log("THIS IS CALLBACK of C");
// });

function B() {
  console.log("B");
  return function C(cb) {
    console.log("C");
  };
}

function A() {
  console.log("A");

  //   return B;
  return B();
}

const bRef = A();
bRef();
