/*
var counterContainer = document.querySelector(".website-counter");
*/

var counterContainer14 = document.querySelector(".website-counter14");

var resetButton = document.querySelector("#reset14");
var visitCount14 = localStorage.getItem("page_view14");

// Check if page_view entry is present
if (visitCount14) {
  visitCount14 = Number(visitCount14) + 1;
  localStorage.setItem("page_view14", visitCount14);
} else {
  visitCount14 = 0;
  localStorage.setItem("page_view14", 0);
}
counterContainer14.innerHTML = visitCount14;

// Adding onClick event listener
resetButton.addEventListener("click", () => {
  visitCount14 = 0;
  localStorage.setItem("page_view14", 0);
  counterContainer14.innerHTML = visitCount14;
});

