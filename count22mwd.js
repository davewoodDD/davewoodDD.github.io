/*
var counterContainer = document.querySelector(".website-counter");
*/

var counterContainer22 = document.querySelector(".website-counter22");

var resetButton = document.querySelector("#reset22");
var visitCount22 = localStorage.getItem("page_view22");

// Check if page_view entry is present
if (visitCount22) {
  visitCount22 = Number(visitCount22) + 1;
  localStorage.setItem("page_view22", visitCount22);
} else {
  visitCount22 = 0;
  localStorage.setItem("page_view22", 0);
}
counterContainer22.innerHTML = visitCount22;

// Adding onClick event listener
resetButton.addEventListener("click", () => {
  visitCount22 = 0;
  localStorage.setItem("page_view22", 0);
  counterContainer22.innerHTML = visitCount22;
});


