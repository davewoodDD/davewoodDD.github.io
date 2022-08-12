/*
var counterContainer = document.querySelector(".website-counter");
*/

var counterContainer9 = document.querySelector(".website-counter9");

var resetButton = document.querySelector("#reset9");
var visitCount9 = localStorage.getItem("page_view9");

// Check if page_view entry is present
if (visitCount9) {
  visitCount9 = Number(visitCount9) + 1;
  localStorage.setItem("page_view9", visitCount9);
} else {
  visitCount9 = 0;
  localStorage.setItem("page_view9", 0);
}
counterContainer9.innerHTML = visitCount9;

// Adding onClick event listener
resetButton.addEventListener("click", () => {
  visitCount9 = 0;
  localStorage.setItem("page_view9", 0);
  counterContainer9.innerHTML = visitCount9;
});

