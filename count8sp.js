/*
var counterContainer = document.querySelector(".website-counter");
*/

var counterContainer8 = document.querySelector(".website-counter8");

var resetButton = document.querySelector("#reset8");
var visitCount8 = localStorage.getItem("page_view8");

// Check if page_view entry is present
if (visitCount8) {
  visitCount8 = Number(visitCount8) + 1;
  localStorage.setItem("page_view8", visitCount8);
} else {
  visitCount8 = 0;
  localStorage.setItem("page_view8", 0);
}
counterContainer8.innerHTML = visitCount8;

// Adding onClick event listener
resetButton.addEventListener("click", () => {
  visitCount8 = 0;
  localStorage.setItem("page_view8", 0);
  counterContainer8.innerHTML = visitCount8;
});

