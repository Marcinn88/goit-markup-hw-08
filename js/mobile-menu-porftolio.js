const menuOverlay = document.querySelector(".mobile-menu-portfolio");
const closeMenuButton = document.querySelector(".toggle-menu-portfolio");
const openMenuBtn = document.querySelector(".header__mobile-menu-portfolio");

openMenuBtn.addEventListener("click", (e) => {
  menuOverlay.classList.remove("d-none-portfolio");
});

closeMenuButton.addEventListener("click", (e) => {
  menuOverlay.classList.add("d-none-portfolio");
});
