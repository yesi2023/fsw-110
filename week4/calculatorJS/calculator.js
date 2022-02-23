var addition = document.getElementById('add')

addition.addEventListener("click", function() {
    var h1 = document.getElementById('addTotal')
    var num1 = document.getElementById('num1').value
    var num2 = document.getElementById('num2').value
    h1.textContent = "The Total is " + (Number(num1) + Number(num2))
})

var subtraction = document.getElementById('subtract')

subtraction.addEventListener("click", function() {
    var h1 = document.getElementById('subTotal')
    var num1 = document.getElementById('num3').value
    var num2 = document.getElementById('num4').value
    h1.textContent = "The Total is " + (Number(num1) - Number(num2))
})

var multipli = document.getElementById('multiplication')

multipli.addEventListener("click", function() {
    var h1 = document.getElementById('mulTotal')
    var num1 = document.getElementById('num5').value
    var num2 = document.getElementById('num6').value
    h1.textContent = "The Total is " + (Number(num1) * Number(num2))
})

var division = document.getElementById('division')

division.addEventListener("click", function() {
    var h1 = document.getElementById('divTotal')
    var num1 = document.getElementById('num7').value
    var num2 = document.getElementById('num8').value
    h1.textContent = "The Total is " + (Number(num1) / Number(num2))
})