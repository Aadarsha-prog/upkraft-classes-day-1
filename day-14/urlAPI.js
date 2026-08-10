console.log("URL API Example");

const url =
  "https://upkraft-course.suparth.com.np/courses/advanced-javascript?test=123&fruit=apple#/81";
console.log("URL:", url);

const urlInstance = new URL(url);

console.log("URL Instance:", urlInstance);

const searchParams = urlInstance.searchParams.values();

urlInstance.searchParams.forEach((value, key) => {
  console.log("Key:", key, "Value:", value);
});
