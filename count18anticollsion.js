/*
var counterContainer = document.querySelector(".website-counter");
*/

var counterContainer18 = document.querySelector(".website-counter18");

var resetButton = document.querySelector("#reset18");
var visitCount18 = localStorage.getItem("page_view18");

// Check if page_view entry is present
if (visitCount18) {
  visitCount18 = Number(visitCount18) + 1;
  localStorage.setItem("page_view18", visitCount18);
} else {
  visitCount18 = 0;
  localStorage.setItem("page_view18", 0);
}
counterContainer18.innerHTML = visitCount18;

// Adding onClick event listener
resetButton.addEventListener("click", () => {
  visitCount18 = 0;
  localStorage.setItem("page_view18", 0);
  counterContainer18.innerHTML = visitCount18;
});


