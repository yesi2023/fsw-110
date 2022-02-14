// In the JS file, create a list of 5 H2 elements on the DOM 
//using a for loop (Hint: this was covered in the previous assignment). 
//Give them whatever text you would like.

for ( i = 0; i < 5; i++) {
    var styling = document.createElement("h2");
    styling.innerHTML = "styles and classes Using JS";
    
    styling.style.fontSize = '20px';                    
    styling.style.fontWeight = 'lighter';
    styling.style.fontFamily = 'sans-serif';
    styling.style.color = 'cornflowerblue';
    styling.classList.add("border");
    document.body.appendChild(styling);
}
             



