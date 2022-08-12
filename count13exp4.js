/*
var counterContainer = document.querySelector(".website-counter");
*/

var counterContainer13 = document.querySelector(".website-counter13");

var resetButton = document.querySelector("#reset13");
var visitCount13 = localStorage.getItem("page_view13");

// Check if page_view entry is present
if (visitCount13) {
  visitCount13 = Number(visitCount13) + 1;
  localStorage.setItem("page_view13", visitCount13);
} else {
  visitCount13 = 0;
  localStorage.setItem("page_view13", 0);
}
counterContainer13.innerHTML = visitCount13;

// Adding onClick event listener
resetButton.addEventListener("click", () => {
  visitCount13 = 0;
  localStorage.setItem("page_view13", 0);
  counterContainer13.innerHTML = visitCount13;
});



