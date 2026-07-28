// Catching errors
console.log("Before error");
try {
  efjkfjklfjdksljfdskljfldks;
} catch (error) {
  console.log("ERROR CAUGHT", error);
}

console.log("After error");

// Throwing custom errors
// Why?
// Divide by zero
function divide(a, b) {
  if (b === 0) {
    return new Error("Divide by zero error");
  }

  return a / b;
}

const result = divide(10, 0);

if (result instanceof Error) {
  console.log("Error", result);
} else {
  const subtractedValue = result - 5;
  console.log("subtractedValue", subtractedValue);
}
