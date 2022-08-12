/*
var counterContainer = document.querySelector(".website-counter");
*/

var counterContainer15 = document.querySelector(".website-counter15");

var resetButton = document.querySelector("#reset15");
var visitCount15 = localStorage.getItem("page_view15");

// Check if page_view entry is present
if (visitCount15) {
  visitCount15 = Number(visitCount15) + 1;
  localStorage.setItem("page_view15", visitCount15);
} else {
  visitCount15 = 0;
  localStorage.setItem("page_view15", 0);
}
counterContainer15.innerHTML = visitCount15;

// Adding onClick event listener
resetButton.addEventListener("click", () => {
  visitCount15 = 0;
  localStorage.setItem("page_view15", 0);
  counterContainer15.innerHTML = visitCount15;
});

