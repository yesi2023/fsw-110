//Base Color See bBelow--->

var squareBox = document.getElementById("squareBox");
squareBox.style.backgroundColor = "white";
squareBox.textContent = "Welcome to my Square changing color Box"


//BLACK loading of the page See Below--->

window.onload = function () {
    document.getElementById("squareBox").style.backgroundColor = "black";
}

//Green when the mouse hovers over the square See Below--->

document.getElementById("squareBox").addEventListener("mouseover", function () {
    document.getElementById("squareBox").style.backgroundColor = "green";
});

//Yellow when the mouse button is held down over the square See Below--->

document.getElementById("squareBox").addEventListener("mousedown", function () {
    document.getElementById("squareBox").style.backgroundColor = "yellow";
});

//Blue when the mouse button is let go over the square See Below--->

document.getElementById("squareBox").addEventListener("mouseup", function () {
    document.getElementById("squareBox").style.backgroundColor = "blue";
});

//Red when the mouse is double clicked in the square See Below--->

document.getElementById("squareBox").addEventListener("dblclick", function () {
    document.getElementById("squareBox").style.backgroundColor = "red";
});

//Purple when the mouse scroll is used somewhere in the window (not just over the square). *Try adding more content to your page with JS if you can not scroll See Below--->

                const bodyElement = document.querySelector("div") 
                function scroll() {
                bodyElement.style.backgroundColor = "purple"
                }
                window.addEventListener("mousewheel", scroll)
                

//You should also be able to press the first letter of the colors (typing "r" on the keyboard for "red", for example) and have the box change to that color See Below--->

document.addEventListener('keydown', function (event) {
    if (event.key === 'r') {
        document.getElementById("squareBox").style.backgroundColor = "red"
    }

});

document.addEventListener('keydown', function (event) {
    if (event.key === 'b') {
        document.getElementById("squareBox").style.backgroundColor = "blue"
    }

});

document.addEventListener('keydown', function (event) {
    if (event.key === 'g') {
        document.getElementById("squareBox").style.backgroundColor = "green"
    }

});

document.addEventListener('keydown', function (event) {
    if (event.key === 'p') {
        document.getElementById("squareBox").style.backgroundColor = "purple"
    }

});

document.addEventListener('keydown', function (event) {
    if (event.key === 'y') {
        document.getElementById("squareBox").style.backgroundColor = "yellow"
    }

});




