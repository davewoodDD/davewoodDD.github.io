/*
var counterContainer = document.querySelector(".website-counter");
*/

var counterContainer5 = document.querySelector(".website-counter5");

var resetButton = document.querySelector("#reset5");
var visitCount5 = localStorage.getItem("page_view5");

// Check if page_view entry is present
if (visitCount5) {
  visitCount5 = Number(visitCount5) + 1;
  localStorage.setItem("page_view5", visitCount5);
} else {
  visitCount5 = 0;
  localStorage.setItem("page_view5", 0);
}
counterContainer5.innerHTML = visitCount5;

// Adding onClick event listener
resetButton.addEventListener("click", () => {
  visitCount5 = 0;
  localStorage.setItem("page_view5", 0);
  counterContainer5.innerHTML = visitCount5;
});
