console.log("day-5");

// Function Declaration
function fnName() {
  // your code
  console.log("function called");
}

// Function calling
fnName();

// ======== Arguments and parameters =========

function add10And20() {
  const x = 10;
  const y = 20;
  const z = x + y;
  console.log(z);
}

add10And20();

// In this case
// a and b are arguments
function add(a, b) {
  const c = a + b;
  console.log(c);
}

// 10 and 20 are paramaters
add(10, 20);

function multiply(a, b) {
  const c = a * b;
  return c;
}

let multipliedValue = multiply(10, 20);
console.log(multipliedValue);

// Arrow function
/*
const arrowFn = (...params) => {
    // code
};
*/

const someFnVar = function someFn() {
  console.log("*****some function******");
};

const arrowFn = () => {
  console.log("***8ARROW FN****");
};

const z = arrowFn;

const x = 10;

console.log("x", x);
console.log("someFnVar", someFnVar);
console.log("arrowFn", arrowFn);

// Function hoisting
// Function declaration is hoisted
// Function expression is not hoisted

console.log("hoisting", hoistingFn());

function hoistingFn() {
  return "hoisting function called";
}

// Variable hoisting

// console.log(name, age);
// let age = 10;
// const name = "Suparth";

// // hoisting with var
// console.log("v", v);
// var v = 10;

// Different types of functions
// Normal functions:
function X() {
  console.log("Normal function");
}

// Arrow function
const Y = () => {
  console.log("Arrow function");
};

// Constructor function
function Person() {
  this.name = "Suparth";
  this.age = 12;

  this.getName = () => {
    return this.name;
  };
}

const p = new Person();
console.log("p", p.getName());

// scope
// 1. Global
// If a variable can be accessed from anywhere in code
// then it is said to have global scope

// 2. Block
// -> A resource defined between a block {...} can only
// be accessed within that block. Then this is said
// to have block scope

// 3. Function
// -> If a resource can only be accessed within a function,
// -> Then it is said to have function scope

let abc = 10;
function someFn() {
  console.log(abc);
}
