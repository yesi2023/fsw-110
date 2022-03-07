var box = document.querySelector(".red-box");
document.body.addEventListener("mousemove", function (event) {
  box.innerHTML = "X coordinate: " + event.x + " Y coordinate: " + event.y;
});
