const elements = document.querySelectorAll(".step-box div");
const stepBox = document.querySelector(".step-box");
const prevBtn = document.querySelector(".btn-box button:first-child");
const nextBtn = document.querySelector(".btn-box button:nth-child(2)");

let counter = 0;

prevBtn.addEventListener("click", (e) => handleClick(e, "prev"));
nextBtn.addEventListener("click", (e) => handleClick(e, "next"));

function handleClick(e, type) {
  console.log("click");
  if (type === "next" && counter === 0) {
    prevBtn.classList.remove("disabled");
    prevBtn.disabled = false;
  }
  if (type === "prev" && counter === 2) {
    prevBtn.classList.add("disabled");
    prevBtn.disabled = true;
  }

  if (type === "next" && counter === 4) {
    nextBtn.classList.add("disabled");
    nextBtn.setAttribute("disabled", true);
  }
  if (type === "prev" && counter === 6) {
    nextBtn.classList.remove("disabled");
    nextBtn.removeAttribute("disabled");
  }

  if (type === "next") {
    console.log(counter);
    elements[counter + 1].classList.add("highlight");
    elements[counter + 2].classList.add("highlight");
    counter += 2;
  }

  if (type === "prev") {
    elements[counter].classList.remove("highlight");
    elements[counter - 1].classList.remove("highlight");
    counter -= 2;
  }
}
