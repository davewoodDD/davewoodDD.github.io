/*
var counterContainer = document.querySelector(".website-counter");
*/

var counterContainer7 = document.querySelector(".website-counter7");

var resetButton = document.querySelector("#reset7");
var visitCount7 = localStorage.getItem("page_view7");

// Check if page_view entry is present
if (visitCount7) {
  visitCount7 = Number(visitCount7) + 1;
  localStorage.setItem("page_view7", visitCount7);
} else {
  visitCount7 = 0;
  localStorage.setItem("page_view7", 0);
}
counterContainer7.innerHTML = visitCount7;

// Adding onClick event listener
resetButton.addEventListener("click", () => {
  visitCount7 = 0;
  localStorage.setItem("page_view7", 0);
  counterContainer7.innerHTML = visitCount7;
});

