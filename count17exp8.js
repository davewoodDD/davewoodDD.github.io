/*
var counterContainer = document.querySelector(".website-counter");
*/

var counterContainer17 = document.querySelector(".website-counter17");

var resetButton = document.querySelector("#reset17");
var visitCount17 = localStorage.getItem("page_view17");

// Check if page_view entry is present
if (visitCount17) {
  visitCount17 = Number(visitCount17) + 1;
  localStorage.setItem("page_view17", visitCount17);
} else {
  visitCount17 = 0;
  localStorage.setItem("page_view17", 0);
}
counterContainer17.innerHTML = visitCount17;

// Adding onClick event listener
resetButton.addEventListener("click", () => {
  visitCount17 = 0;
  localStorage.setItem("page_view17", 0);
  counterContainer17.innerHTML = visitCount17;
});


