/* 
 21jun22
 */


/*
var counterContainer = document.querySelector(".website-counter");
*/

var counterContainer2 = document.querySelector(".website-counter2");

var resetButton = document.querySelector("#reset2");
var visitCount2 = localStorage.getItem("page_view2");

// Check if page_view entry is present
if (visitCount2) {
  visitCount2 = Number(visitCount2) + 1;
  localStorage.setItem("page_view2", visitCount2);
} else {
  visitCount2 = 0;
  localStorage.setItem("page_view2", 0);
}
counterContainer2.innerHTML = visitCount2;

// Adding onClick event listener
resetButton.addEventListener("click", () => {
  visitCount2 = 0;
  localStorage.setItem("page_view2", 0);
  counterContainer2.innerHTML = visitCount2;
});

