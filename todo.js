//Connects todo.html to todo.js in order to work.
var textinput = document.getElementById("textinput");
var stylingdropdown = document.getElementById("stylingdropdown");
var typebutton = document.getElementById("typebutton");
var tasksdiv = document.getElementById("tasksdiv");
var taskselement = document.getElementById("taskselement");

//Makes the typebutton work when clicked.
typebutton.addEventListener("click", function (action) {
  var task = "<br>" + textinput.value + "<br>";
  tasksdiv.innerHTML = tasksdiv.innerHTML + task;
});

//Makes the text get deleted or disappear when clicked.
tasksdiv.addEventListener("click", function(evt){
    var thing = evt.target;
    thing.parentNode.removeChild(thing);
});

//Gives option of changing color of text.
typebutton.addEventListener("click", function (action) {
  var color = userinput.value;
"<div style = color: color>" + task + "</div>";
"<div style = color" + color + task + "</div>";
tasksdiv.innerHTML += userinput.value;
});