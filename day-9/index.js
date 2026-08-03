const btn = document.querySelector("button");
const body = document.querySelector("body");

btn.addEventListener("click", () => {
  document.body.classList.toggle("dark");

  const isDarkMode = body.classList.contains("dark");
  localStorage.setItem("theme", isDarkMode ? "dark" : "light");
});

// Loading the theme when page loads
const savedTheme = localStorage.getItem("theme");
console.log(savedTheme);

if (savedTheme === "dark") {
  body.classList.add("dark");
} else {
  body.classList.remove("dark");
}

sessionStorage.setItem("theme", savedTheme);
