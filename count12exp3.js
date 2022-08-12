/*
var counterContainer = document.querySelector(".website-counter");
*/

var counterContainer12 = document.querySelector(".website-counter12");

var resetButton = document.querySelector("#reset12");
var visitCount12 = localStorage.getItem("page_view12");

// Check if page_view entry is present
if (visitCount12) {
  visitCount12 = Number(visitCount12) + 1;
  localStorage.setItem("page_view12", visitCount12);
} else {
  visitCount12 = 0;
  localStorage.setItem("page_view12", 0);
}
counterContainer12.innerHTML = visitCount12;

// Adding onClick event listener
resetButton.addEventListener("click", () => {
  visitCount12 = 0;
  localStorage.setItem("page_view12", 0);
  counterContainer12.innerHTML = visitCount12;
});


