console.log("Objects in js");
// in C:
// struct Person {string name; int age; string gender;}
// Person p("John", 20, "Male");

// same in js
// Definint object in js
// 0bFFGGAC
const Person1 = {
  name: "Jhon",
  age: 20,
  gender: "Male",
};
// in reality, person 1 stores memory address of the objec
// not the object itself

// 0bAAABBCC
const Person2 = {
  name: "Person2",
  age: 20,
  gender: "Male",
  "my home": "abcd",
};

// 0bFFGGAC     0bFFGGAC
const Person3 = Person1;

console.log(Person1, Person2, Person3);
const isSamePerson1and2 = Person1 === Person2; // 0bAAABBCC vs 0bFFGGAC
const isSamePerson1and3 = Person1 === Person3; // 0bFFGGAC vs 0bFFGGAC
console.log({ isSamePerson1and2 });
console.log({ isSamePerson1and3 });

// Accessing individual keys in object
const nameOfPerson1 = Person1.name;
// Strint things
const indexedVal = nameOfPerson1.at(2);
console.log(nameOfPerson1, typeof nameOfPerson1, indexedVal);

// Accessing with square brackets
const ageOfPErson1 = Person1["age"]; // Person1.age
console.log(ageOfPErson1, typeof ageOfPErson1);

Person1["address"] = "123 Main St";
console.log(Person1);

// Accessing keys with square brackets
Person2["my home"];
console.log(Person2, typeof Person2);

const nullVal = null;
console.log(nullVal, typeof nullVal);

const y = [1, 2, 3];
console.log(y, typeof y);

// Never ever do this in js, debugging will be a nightmare
Person1.__proto__ = Person2;
console.log(Person1);
