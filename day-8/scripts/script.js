const btnHamburger = document.querySelector("#btn-hamburger");
const sidebarNav = document.querySelector("#sidebar-nav");
const btnSidebarClose = document.querySelector("#btn-sidebar-close");

btnHamburger.addEventListener("click", () => {
  sidebarNav.classList.toggle("header__nav__sidebar__open");
});

sidebarNav.addEventListener("click", () => {
  sidebarNav.classList.remove("header__nav__sidebar__open");
});
