const container = document.getElementById("root");

// const App = "<h1>Hello React</h1>";

// container.innerHTML = App;

// const input = document.getElementById("input");
// const submit = document.getElementById("submit");

// const preview = document.getElementById("preview");

// let inputValue = "";
// input.addEventListener("input", (e) => {
//   const value = e.target.value;
//   inputValue = value;
// });

// submit.addEventListener("click", (e) => {
//   console.log(inputValue);

//   preview.textContent = inputValue;
// });

const buttons = document.querySelectorAll("button");

// buttons.forEach((button) => {
//   button.addEventListener("click", (e) => {
//     const value = e.target.textContent;
//     console.log(value);
//   });
// });

const list = document.getElementById("ul");

list.addEventListener("click", (e) => {
  const closest = e.target.closest("button");
  console.log(closest.textContent);
});
