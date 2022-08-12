/*
var counterContainer = document.querySelector(".website-counter");
*/

var counterContainer16 = document.querySelector(".website-counter16");

var resetButton = document.querySelector("#reset16");
var visitCount16 = localStorage.getItem("page_view16");

// Check if page_view entry is present
if (visitCount16) {
  visitCount16 = Number(visitCount16) + 1;
  localStorage.setItem("page_view16", visitCount16);
} else {
  visitCount16 = 0;
  localStorage.setItem("page_view16", 0);
}
counterContainer16.innerHTML = visitCount16;

// Adding onClick event listener
resetButton.addEventListener("click", () => {
  visitCount16 = 0;
  localStorage.setItem("page_view16", 0);
  counterContainer16.innerHTML = visitCount16;
});


