// statement
console.log("This is a statement");

// for loop statement

/**
 * jelo
 * this
 * is
 * multi
 * line
 * comment
 */
for (let i = 0; i < 5; i++) {
  console.log(i);
}

// If statment
if (5 > 10) {
  console.log("5 is greater than 10");
}

// arithemtic expression
let x = 4 + 5 - 5 * 19 + 40;

// Boolean Expression
let y = 5 < 10;

// Left shift Expression
let z = 5 << 5;

// Right shift Expression
let a = 5 >> 5;

// Ternary Expression
let b = 5 > 10 ? "Yes" : "No";

// variables in js
// with var
// with let
// with const

var name = "Suparth";

let age = 26;
// const isStudent = false;

//

age = 56;

// Primitive Data types
// number
// string
// boolean

console.log(typeof name);
console.log(typeof age);

// null
// undefined

let nullVariable = null;

// Variable declared, but not initialized: it is undefined
let undefinedVariable;

// Variable decialred and initialized with undefined value
let undefinedVariable2 = undefined;

console.log({
  nullVariable,
  undefinedVariable,
  undefinedVariable2,
});

// Complex data types
// Arrays
// Objects

let isStudent;

const user = {
  age: 12,
};

if (user.age < 18) {
  isStudent = true;
} else {
  isStudent = false;
}

console.log({
  user,
});
