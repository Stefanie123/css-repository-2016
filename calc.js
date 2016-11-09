//Connects the calc.html to the calc.js in order for the calculator to work.
var num1Input = document.getElementById("num1Input");
var operationInput = document.getElementById("operationnput");
var num2Input = document.getElementById("num2Input");
var calculatenowButton = document.getElementById("calculatenowButton");
var answer = document.getElementById("answer");

//Makes the calculatenowButton work when clicked.
calculatenowButton.addEventListener("click", function() {
    
    // alert();
    
    var num1 = num1Input.value;
    var num2 = num2Input.value;
    var operation = operationInput.value;
    // alert(operationInput)
    // alert();

//Condition statements make different operations work and make actions happen.
    if (operation === "+") {
        answer.innerHTML = Number(num1) + Number(num2);
    }

    else if (operation === "-") {
        answer.innerHTML = Number(num1) - Number(num2);
    }

    else if (operation === "*") {
        answer.innerHTML = Number(num1) * Number(num2);
    }

    else if (operation === "/") {
        answer.innerHTML =  Number(num1) / Number(num2);
    }
    
    else if (operation === "%") {
        answer.innerHTML = Number(num1) % Number(num2);
    }
    
    else if (operation === "==") {
        answer.innerHTML =  Number(num1) === Number(num2);
    }
    
    if (operation === "true or false") {
        answer.innerHTML = "true";
    }
    
    if (operation === "true or false") {
        answer.innerHTML = "false";
    }
});