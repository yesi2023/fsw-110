// make the box disapear when the user clicks it
const redBox = document.getElementsByClassName("red-box");
redBox[0].addEventListener("click", hideMe);
function hideMe() {
  redBox[0].style.display = "none";
}
