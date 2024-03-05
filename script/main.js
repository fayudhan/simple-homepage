const mobileMenuBtn = document.getElementById("mobile-menu-button");
const mobileMenuBtnClose = document.getElementById("mobile-menu-button-close");
const navbarMenu = document.getElementById("navbar-menu");

mobileMenuBtn.addEventListener("click", () => {
  navbarMenu.classList.remove("right-[-100%]");
  navbarMenu.classList.add("right-0");
});

mobileMenuBtnClose.addEventListener("click", () => {
  navbarMenu.classList.remove("right-0");
  navbarMenu.classList.add("right-[-100%]");
});
