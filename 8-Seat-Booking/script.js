// DOM references
const container = document.querySelector(".container");
const seats = document.querySelectorAll(".row .seat:not(.occupied)");
const count = document.getElementById("count");
const total = document.getElementById("total");
const movieSelect = document.getElementById("movie");

const ticketPrice = Number(movieSelect.value);

// Event listeners
container.addEventListener("click", (e) => {
  if (
    e.target.classList.contains("seat") &&
    !e.target.classList.contains("occupied")
  ) {
    e.target.classList.toggle("selected");

    updateSelectedCount();
  }
});

movieSelect.addEventListener("change", () => {
  updateSelectedCount();
});

/*
 * Functions
 */

// Update total and count
function updateSelectedCount() {
  const selectedSeats = document.querySelectorAll(".row .seat.selected ")
    .length;
  count.innerText = selectedSeats;
  total.innerText = selectedSeats * movieSelect.value;
}
