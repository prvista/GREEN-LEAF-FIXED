const headerNav = document.querySelector(".header__nav");
const toggleMenu = document.querySelector(".toggle__menu");
const toggleMenuSide = document.querySelector(".toggle__menu--side");
const backDrop = document.querySelector(".backdrop");

toggleMenu.addEventListener("click", () => {
    headerNav.classList.toggle("open");
    toggleMenu.classList.toggle("open");
    toggleMenuSide.classList.toggle("open");
    backDrop.classList.toggle("open");
});

toggleMenuSide.addEventListener("click", () => {
    headerNav.classList.toggle("open");
    toggleMenu.classList.toggle("open");
    toggleMenuSide.classList.toggle("open");
    backDrop.classList.toggle("open");
});