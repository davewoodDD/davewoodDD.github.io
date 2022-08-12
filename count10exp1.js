/*
var counterContainer = document.querySelector(".website-counter");
*/

var counterContainer10 = document.querySelector(".website-counter10");

var resetButton = document.querySelector("#reset10");
var visitCount10 = localStorage.getItem("page_view10");

// Check if page_view entry is present
if (visitCount10) {
  visitCount10 = Number(visitCount10) + 1;
  localStorage.setItem("page_view10", visitCount10);
} else {
  visitCount10 = 0;
  localStorage.setItem("page_view10", 0);
}
counterContainer10.innerHTML = visitCount10;

// Adding onClick event listener
resetButton.addEventListener("click", () => {
  visitCount10 = 0;
  localStorage.setItem("page_view10", 0);
  counterContainer10.innerHTML = visitCount10;
});
