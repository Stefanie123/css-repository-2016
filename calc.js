//Connects the calc.html to the calc.js in order to work.
var num1Input = document.getElementById("numIinput");
var operationInput = document.getElementById("operationnput");
var num2Input = document.getElementById("num2Input");
var calculatenowButton = document.getElementById("calculatenowButton");
var answer = document.getElementById("answer");

calculatenowButton.addEventListener("click", function() {
    var num1 = varnum1Input.value;
    var num2 = varnum2Input.value;
    var answer = varanswer.value;

    if (operation.value-- - "+") {
        answer.innerHTML = (num1) + (num2)
    }

    else if (operation.value-- - "+") {
        answer.innerHTML = (num1) + (num2)
    }

    if (operation.value-- - "-") {
        answer.innerHTML = (num1) - (num2)
    }

    else if (operation.value-- - "-") {
        answer.innerHTML = (num1) - (num2)
    }

    if (operation.value-- - "*") {
        answer.innerHTML = (num1) * (num2)
    }

    else if (operation.value-- - "*") {
        answer.innerHTML = (num1) * (num2)
    }

    if (operation.value-- - "/") {
        answer.innerHTML =  (num1) / (num2)
    }

    else if (operation.value-- - "/") {
        answer.innerHTML =  (num1) / (num2)
    }

})