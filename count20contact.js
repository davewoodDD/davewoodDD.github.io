/*
var counterContainer = document.querySelector(".website-counter");
*/

var counterContainer20 = document.querySelector(".website-counter20");

var resetButton = document.querySelector("#reset20");
var visitCount20 = localStorage.getItem("page_view20");

// Check if page_view entry is present
if (visitCount20) {
  visitCount20 = Number(visitCount20) + 1;
  localStorage.setItem("page_view20", visitCount20);
} else {
  visitCount20 = 0;
  localStorage.setItem("page_view20", 0);
}
counterContainer20.innerHTML = visitCount20;

// Adding onClick event listener
resetButton.addEventListener("click", () => {
  visitCount20 = 0;
  localStorage.setItem("page_view20", 0);
  counterContainer20.innerHTML = visitCount20;
});



