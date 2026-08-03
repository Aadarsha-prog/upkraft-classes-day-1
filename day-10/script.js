const id1WithQuerySelector = document.querySelector("#id-1-selection");
const id1WithGetElementById = document.getElementById("id-1-selection");
const id2WithGetElementById = document.getElementById("id-2-selection");

const classWithQuerySelector = document.querySelector(".class-selection"); // first element
const classesWithQS = document.querySelectorAll(".class-selection"); // all elements

const classesWithGetElementByClassName =
  document.getElementsByClassName("class-selection"); // all elements

const selectionWithDataAttribute = document.querySelectorAll(
  "[data-attribute-name]",
);

const att1 = document.querySelectorAll(
  "[data-attribute-name=attribute-value-1]",
);

const sidebar = document.querySelector("[data-sidebar-open]");

const sidebarOpenBtn = document.querySelector("#btn-open-sidebar");
const sidebarCloseBtn = document.querySelector("#btn-close-sidebar");

sidebarOpenBtn.addEventListener("click", () => {
  sidebar.setAttribute("data-sidebar-open", "true");
});

sidebarCloseBtn.addEventListener("click", () => {
  sidebar.setAttribute("data-sidebar-open", "false");
});

id1WithGetElementById.innerHTML = "<h1>ID1</h1>";

console.log({
  //   id1WithQuerySelector,
  //   id1WithGetElementById,
  //   id2WithGetElementById,
  classWithQuerySelector,
  classesWithQS,
  classesWithGetElementByClassName,
  selectionWithDataAttribute,
  att1,
});
