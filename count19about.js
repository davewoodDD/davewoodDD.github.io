/*
var counterContainer = document.querySelector(".website-counter");
*/

var counterContainer19 = document.querySelector(".website-counter19");

var resetButton = document.querySelector("#reset19");
var visitCount19 = localStorage.getItem("page_view19");

// Check if page_view entry is present
if (visitCount19) {
  visitCount19 = Number(visitCount19) + 1;
  localStorage.setItem("page_view19", visitCount19);
} else {
  visitCount19 = 0;
  localStorage.setItem("page_view19", 0);
}
counterContainer19.innerHTML = visitCount19;

// Adding onClick event listener
resetButton.addEventListener("click", () => {
  visitCount19 = 0;
  localStorage.setItem("page_view19", 0);
  counterContainer19.innerHTML = visitCount19;
});


