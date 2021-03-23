// DOM reference
const main = document.getElementsByTagName("main");
const ps5 = document.getElementById("ps5");
const xbox = document.getElementById("xbox");

// Event Listeners
ps5.addEventListener("mouseenter", () => {
  handleResize(ps5, xbox);
});

ps5.addEventListener("mouseleave", () => {
  resetResize();
});

xbox.addEventListener("mouseenter", () => {
  handleResize(xbox, ps5);
});

xbox.addEventListener("mouseleave", () => {
  resetResize();
});

// Function to change size of sections
// First Arg: section to increase (70%)
// Second Arg: section to reduce (30%)
function handleResize(section1, section2) {
  section1.style.width = "75%";
  section2.style.width = "25%";
}

// Function to set sections back to 50% width each.
function resetResize() {
  ps5.style.width = "50%";
  xbox.style.width = "50%";
}
