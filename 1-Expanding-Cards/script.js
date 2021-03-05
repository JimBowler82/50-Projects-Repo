const images = document.querySelectorAll(".image");

images.forEach((image) => {
  image.addEventListener("click", handleClick);
});

function handleClick(e) {
  if (e.target.classList.contains("selected")) return;

  images.forEach((image) => {
    if (image === e.target) {
      image.classList.add("selected");
    } else if (image.classList.contains("selected")) {
      image.classList.remove("selected");
    }
  });
}
