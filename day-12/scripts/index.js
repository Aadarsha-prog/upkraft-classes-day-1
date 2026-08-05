import * as str from "./utils/string.utils.js";

const name = "suparth";

const upperCaseName = str.uppercaseFirstLetter(name);
const lowerCaseName = str.lowercaseFirstLetter(name);

console.log("Uppercase Name:", upperCaseName); // Output: "Suparth"
console.log("Lowercase Name:", lowerCaseName); // Output: "suparth"

// Import and exporting in JS in ESM -> ES Modules
// 1. Default Export and default import
// 2. Named Export and named import
// 3. Named export and default import with *
