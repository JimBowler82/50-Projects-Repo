const contentBoxes = document.querySelectorAll(".content-box");
console.log(contentBoxes);

window.addEventListener("scroll", handleReveal);

handleReveal();

function handleReveal() {
  const bottom = window.innerHeight * 0.8;

  contentBoxes.forEach((box) => {
    const top = box.getBoundingClientRect().top;

    if (top < bottom) {
      box.classList.add("show");
    } else {
      box.classList.remove("show");
    }
  });
}
