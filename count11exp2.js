/*
var counterContainer = document.querySelector(".website-counter");
*/

var counterContainer11 = document.querySelector(".website-counter11");

var resetButton = document.querySelector("#reset11");
var visitCount11 = localStorage.getItem("page_view11");

// Check if page_view entry is present
if (visitCount11) {
  visitCount11 = Number(visitCount11) + 1;
  localStorage.setItem("page_view11", visitCount11);
} else {
  visitCount11 = 0;
  localStorage.setItem("page_view11", 0);
}
counterContainer11.innerHTML = visitCount11;

// Adding onClick event listener
resetButton.addEventListener("click", () => {
  visitCount11 = 0;
  localStorage.setItem("page_view11", 0);
  counterContainer11.innerHTML = visitCount11;
});


