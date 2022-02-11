//1. Create an HTML page from scratch and link a JS file to it.
//2. Create an H1 tag with the text “Hello World”, and append it to the DOM (test and make sure it is showing up on the website).
//3. Create a for-loop, repeat this process 10 times so that 10 H1’s with the text “Hello World” show up when the website is visited.

var h1 = document.createElement("h1")

for (let i = 0; i < 10; i++) {
    var repeat = document.createElement("h1");
    repeat.textContent = "Hello World!";
    document.body.append(repeat)
    repeat.style.color = 'grey' 
}

//4. Add some style to the h1's step 3. "I added different colors"

var span = document.getElementsByTagName("h1")[1];
span.style.color = "brown";

var span = document.getElementsByTagName("h1")[3];
span.style.color = "blue";

var span = document.getElementsByTagName("h1")[5];
span.style.color = "black";

var span = document.getElementsByTagName("h1")[7];
span.style.color = "pink";

var span = document.getElementsByTagName("h1")[9];
span.style.color = "purple";


//5. Create a new array using the below names given. "see bvelow,"

var names = [
    "Steve",
    "Larry",
    "Joe",
    "Shirley",
    "Steph",
    "Nate",
    "Rick",
    "Emily"

];
 
//6. Create a for loop that iterates through the array in Step 5 and displays it on the page.

for (var i = 0; i < names.length; i++) {
    document.write("<li>" + names[i] + "</li>"); 
}
