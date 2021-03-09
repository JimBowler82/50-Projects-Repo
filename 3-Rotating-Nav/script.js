const buttonDiv = document.querySelector(".button-div");
const main = document.querySelector(".main");
const sideNav = document.querySelector(".side-nav");

buttonDiv.addEventListener("click", () => {
  buttonDiv.classList.toggle("rotate-button");
  main.classList.toggle("rotate-main");
  sideNav.classList.toggle("nav-closed");
});
