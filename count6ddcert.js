/*
var counterContainer = document.querySelector(".website-counter");
*/

var counterContainer6 = document.querySelector(".website-counter6");

var resetButton = document.querySelector("#reset6");
var visitCount6 = localStorage.getItem("page_view6");

// Check if page_view entry is present
if (visitCount6) {
  visitCount6 = Number(visitCount6) + 1;
  localStorage.setItem("page_view6", visitCount6);
} else {
  visitCount6 = 0;
  localStorage.setItem("page_view6", 0);
}
counterContainer6.innerHTML = visitCount6;

// Adding onClick event listener
resetButton.addEventListener("click", () => {
  visitCount6 = 0;
  localStorage.setItem("page_view6", 0);
  counterContainer6.innerHTML = visitCount6;
});

