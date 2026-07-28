const array = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"];

// for (let i = 0; i < array.length; i++) {
//   console.log(array[i]);
// }

// Iterators
for (const value of array) {
  console.log(value);
}

// defining your own iterator
// Using symbol.iterator
const iterable = {
  [Symbol.iterator]() {
    // any code
    console.log("iterator called");
  },
};

iterable[Symbol.iterator]();

// Using yield and generator functions
function* generateNumberInSequence() {
  let i = 0;
  while (i < 3) {
    yield i++;
  }
}

dfjhdfks;

const x = generateNumberInSequence();
console.log("x", x);
console.log("1st", x.next());
console.log("2nd", x.next());
console.log("3rd", x.next());
console.log("4th", x.next());

// // iterating over the gen function
for (const value of x) {
  console.log(value);
}
