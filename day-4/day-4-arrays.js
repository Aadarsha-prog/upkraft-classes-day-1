console.log("Array");

// Defining array in js
const array1 = [1, 2, 3, 4, 5];
console.log(array1, typeof array1);

// Accessing individual elements of an array
const firstElement = array1[0];
console.log(firstElement); // 1

const lastElement = array1[array1.length - 1];
const lastElementWithAtMethod = array1.at(-1);
console.log(lastElement, lastElementWithAtMethod); // 5

// Accessing invalid index of an array
const invalidIndex = array1[10];
console.log(invalidIndex); // undefined

// Accessing with negative index using at method
const negativeIndexWithAtMethod = array1.at(-2);
console.log(negativeIndexWithAtMethod); // 4

// Accessing array like object key value
const arrayVal = array1["4"];
console.log(arrayVal, typeof arrayVal);

// In C:          0b1 0b2 0b3 0b4 0b5
// int array[5] = {1, 2, 3, 4, 5}; // <- this array is stored in stack memory
// To mimic dynamic array in c, we do MALLOC or ALLOC
// const array = [1, 2, 3, 4, 5]; // <- this "array" is stored in heap memory, and the variable "array" stores the memory address of the array in heap memory

// If we can dynamiclaly chane size of array, how?
// Push and pop

// Push: Adds an element to the end of the array
array1.push(6);
console.log(array1);

// Pop: Removes the last element of the array and returns it
const poppedElement = array1.pop();
console.log(poppedElement, array1);

// Shift: Removes the first element of the array and returns it
const shiftedElement = array1.shift();
console.log(shiftedElement, array1);

// Unshift: Adds an element to the beginning of the array
array1.unshift(0);
console.log(array1);

// Arrays are not of same type
const x = ["a", 1, true, null, { a: 123 }];

const y = x[5]();
