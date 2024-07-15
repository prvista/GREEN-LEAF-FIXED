const header = document.querySelector(".header");
const headerWrap = document.querySelector(".header__nav--desktop");
console.log.window;
window.addEventListener("scroll", () => {
  if (window.scrollY >= 250) {
    header.classList.add("open");
  } else {
    header.classList.remove("open");
  }
});

window.addEventListener("scroll", () => {
    if (window.scrollY >= 250) {
      headerWrap.classList.add("open");
    } else {
      headerWrap.classList.remove("open");
    }
  });