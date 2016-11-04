//Connects the calc.html to the calc.js in order for the calculator to work.
var num1Input = document.getElementById("numIinput");
var operationInput = document.getElementById("operationnput");
var num2Input = document.getElementById("num2Input");
var calculatenowButton = document.getElementById("calculatenowButton");
var answer = document.getElementById("answer");

calculatenowButton.addEventListener("click", function() {
    var num1 = num1Input.value;
    var num2 = num2Input.value;
    var operation = operationInput.value;

    if (operation === "+") {
        answer.innerHTML = (num1) + (num2);
    }

    else if (operation === "-") {
        answer.innerHTML = (num1) - (num2);
    }

    else if (operation === "*") {
        answer.innerHTML = (num1) * (num2);
    }

    else if (operation === "/") {
        answer.innerHTML =  (num1) / (num2);
    }