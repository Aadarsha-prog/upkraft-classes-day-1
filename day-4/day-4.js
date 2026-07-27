console.log("Day-4");

// Strings
let str1 = "Hello World"; // length 11
//.         012345678910
console.log(str1);
console.log(typeof str1);

// Indexing individual characters of a string
const thirdChar = str1[2];
console.log(thirdChar);

// Indexing invalid characters of a string
const invalidChar = str1[14];
console.log(invalidChar); // undefined

// Indexing with negative index
const negativeIndex = str1[-1];
console.log(negativeIndex); // undefined

// Indexing with at method
const withAtMethid = str1.at(4);
console.log(withAtMethid); // o

// Indexing with negative index using at method
// Indexing with negative index starts from the end of the string
const negativeIndexWithAtMethod = str1.at(-1);
console.log(negativeIndexWithAtMethod); //d

const negativeIndexWithAtMethod2 = str1.at(-4);
console.log(negativeIndexWithAtMethod2); //o

// Composing strings
const withQuotes = "Hello";
const withBackticks = `Hello`;

// Injecting variables inside string: Formatted Strings
const ageValue = 20;
const userAgeString = `My age is: ${ageValue}`;
console.log(userAgeString);

// Concatenation of strings
const strA = "Hello";
const strB = "World";
const numA = 10;
// Not recommended way: Using + operator
const concatenatedStringWithPlusSymbol = strA + strB + numA;

// Recomended Way: Using Template Literals
const concatenatedStringWithTemplateLiteral = `${strA}${strB}${numA}`;
console.log(concatenatedStringWithPlusSymbol);
console.log(concatenatedStringWithTemplateLiteral);

const x = strB - numA;
console.log(x); //NaN
// NaN -> not a number
const nanType = typeof NaN;
console.log(nanType);
const isXNaNIncorrect = x === NaN;
console.log(x, NaN);
console.log(isXNaNIncorrect);
const isXNanCorrect = Number.isNaN(x);
console.log(isXNanCorrect);

// String to Number conversion
const str100 = "100";
const numeric100withParseInt = parseInt(str100);
console.log(str100, numeric100withParseInt, typeof numeric100withParseInt);

const str200 = "200";
const numeric200WithNumberConstructor = Number(str200);
console.log(
  str200,
  numeric200WithNumberConstructor,
  typeof numeric200WithNumberConstructor,
);

const strWithParseInt = "100abc";
const numericWithParseInt = parseInt(strWithParseInt);
console.log(strWithParseInt, numericWithParseInt, typeof numericWithParseInt);

const strWithNumberCons = "100abc";
const numericWithNumberCons = Number(strWithNumberCons);
console.log(
  strWithNumberCons,
  numericWithNumberCons,
  typeof numericWithNumberCons,
  Number.isNaN(numericWithNumberCons),
);

const floatStr = "100.45aaaa";
const numericFloatWithParseInt = parseFloat(floatStr);
console.log(
  floatStr,
  numericFloatWithParseInt,
  typeof numericFloatWithParseInt,
);

const withNumberConstructor = Number(floatStr);
console.log(floatStr, withNumberConstructor, typeof withNumberConstructor);

// ------ Booleans -----

const boolTrue = true;
const boolFalse = false;

// Truthy
const strWithAtleast1Char = "abcd";
const isStr1Truthy = Boolean(strWithAtleast1Char);
console.log(strWithAtleast1Char, isStr1Truthy);

// Falsy
const strWithAt0Chars = "";
const isStr2Truthy = Boolean(strWithAt0Chars);
console.log(strWithAt0Chars, isStr2Truthy);

// Truthy and falsy values are not recommended to be used.
// Try to alwasys compare with boolean values
