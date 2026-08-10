"use strict";

// This keyword
// function someFunction() {
//   console.log(this);
// }

// const x = {
//   name: "abc",
//   getNameNormal: function () {
//     console.log(this);
//     console.log(this.name);
//   },
//   getNameArrow: () => {
//     console.log(this);
//     console.log(this.name);
//   },
//   someFunction,
// };

// // x.getNameNormal();
// // x.getNameArrow();
// // x.someFunction();

// // bind

// const fnReference = x.getNameNormal;

// console.log(fnReference);

// const y = fnReference
// console.log(y);

// // fnReference();
// y();

// function fnRunner(fn) {
//   fn();
// }

// const Person = {
//   name: "Suparth",
//   displayName: function () {
//     console.log(this.name);
//   },
// };

// const withoutBind = Person.displayName;
// const withBind = Person.displayName.bind(Person);

// console.log(withoutBind);
// console.log(withBind);

// fnRunner(withBind);

const Person = {
  name: "Suparth",
};

function displayName(age, address) {
  console.log(`${this.name}'s age is ${age} who live in ${address}`);
}

displayName.call(Person, 26, "kirtipur");
displayName.apply(Person, ["kirtipur", 25]);

Person.displayName = displayName.bind(Person, 26, "kirtipur");
Person.displayName();

// bind -> returns new function after binding context to this keyword
// call and apply -> direcly invokes the function by binding context to this keyword
