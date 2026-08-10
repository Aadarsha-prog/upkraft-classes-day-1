const root = document.getElementById("root");
const aboutBtn = document.getElementById("about-btn");
const historyBtn = document.getElementById("history-btn");
const backBtn = document.getElementById("back-btn");
const historyState = document.getElementById("history-state");

// history = ['about']

aboutBtn.addEventListener("click", () => {
  history.pushState({ page: "about" }, "About", "/day-14/about");
  root.innerHTML = "<h1>About Page</h1><p>This is the about page.</p>";
  console.log("Current state:", history.state);
});

historyBtn.addEventListener("click", () => {
  history.pushState({ page: "history" }, "History", "/day-14/history");
  root.innerHTML = "<h1>History Page</h1><p>This is the history page.</p>";

  console.log("Current state:", history.state);
});

backBtn.addEventListener("click", () => {
  history.back();
  console.log("Current state:", history.state);
});
