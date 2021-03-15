const searchIcon = document.querySelector(".search-icon");
const searchInput = document.querySelector("#search-input");

searchIcon.addEventListener("click", handleClick);

function handleClick() {
  searchInput.classList.toggle("open");
  searchInput.focus();
}
