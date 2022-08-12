/*
var counterContainer = document.querySelector(".website-counter");
*/

var counterContainer21 = document.querySelector(".website-counter21");

var resetButton = document.querySelector("#reset21");
var visitCount21 = localStorage.getItem("page_view21");

// Check if page_view entry is present
if (visitCount21) {
  visitCount21 = Number(visitCount21) + 1;
  localStorage.setItem("page_view21", visitCount21);
} else {
  visitCount21 = 0;
  localStorage.setItem("page_view21", 0);
}
counterContainer21.innerHTML = visitCount21;

// Adding onClick event listener
resetButton.addEventListener("click", () => {
  visitCount21 = 0;
  localStorage.setItem("page_view21", 0);
  counterContainer21.innerHTML = visitCount21;
});

