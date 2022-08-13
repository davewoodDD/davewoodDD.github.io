/* 
 08AUG22
 */


/*
var counterContainer = document.querySelector(".website-counter");
*/

var counterContainer3 = document.querySelector(".website-counter3");

var resetButton = document.querySelector("#reset3");
var visitCount3 = localStorage.getItem("page_view3");

// Check if page_view entry is present
if (visitCount3) {
  visitCount3 = Number(visitCount3) + 1;
  localStorage.setItem("page_view3", visitCount3);
} else {
  visitCount3 = 0;
  localStorage.setItem("page_view3", 0);
}
counterContainer3.innerHTML = visitCount3;

// Adding onClick event listener
resetButton.addEventListener("click", () => {
  visitCount3 = 0;
  localStorage.setItem("page_view3", 0);
  counterContainer3.innerHTML = visitCount3;
});
