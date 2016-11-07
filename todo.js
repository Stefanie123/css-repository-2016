//Connects todo.html to todo.js in order to work.
var textinput = document.getElementById("textinput");
var stylingdropdown = document.getElementById("stylingdropdown");
var typebutton = document.getElementById("typebutton");
var tasksdiv = document.getElementById("tasksdiv");

typebutton.addEventListener("click", function (action) {
  var task = "<br>" + textinput.value + "<br>";
  tasksdiv.innerHTML = tasksdiv.innerHTML + task;
});

tasksdiv.addEventListener("click", function(evt){
    var thing = 
});