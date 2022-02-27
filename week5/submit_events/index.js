
function getdetails() {
    var fName = document.forms["data"]["firstname"].value;
    var lName = document.forms["data"]["lastname"].value;
    var email = document.forms["data"]["email"].value;
    var boxM = document.forms["data"]["message"].value;

    alert("Welcome My name is " + fName + " " + lName + ", " + "My email contact " + " " + " " + email + ". " + "URGENT!!! Please Read: " + " " + boxM );

    let btnClear = document.querySelector('button');
    btnClear.addEventListener('click', () => {
        inputs.forEach(input => input.value = ' ');
    })

}