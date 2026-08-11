const p = document.getElementById("some-text");
const copyBtn = document.getElementById("copy-btn");

copyBtn.addEventListener("click", () => {
  console.log(p.textContent);
  navigator.clipboard.writeText(p.textContent).then(() => {
    console.log("Text copied to clipboard:");
  });
});
