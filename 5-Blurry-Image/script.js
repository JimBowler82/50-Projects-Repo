const mainContainer = document.querySelector(".container");
const countContainer = document.querySelector(".count-container");
const countSpan = document.getElementById("count");

let count = 0;
let countBlur = 100;
let opacity = 1;

let intervalId = setInterval(() => {
  if (count <= 100) {
    countSpan.innerText = count;
    mainContainer.style.filter = `blur(${countBlur}px)`;
    countContainer.style.opacity = opacity;

    count++;
    countBlur--;
    opacity -= 0.01;
  } else {
    clearInterval(intervalId);
  }
}, 40);
