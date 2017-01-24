//Connects todo.html to todo.js in order to work.
var textinput = document.getElementById("textinput");
var stylingdropdown = document.getElementById("stylingdropdown");
var typebutton = document.getElementById("typebutton");
var tasksdiv = document.getElementById("tasksdiv");
var taskselement = document.getElementById("taskselement");

//Makes the typebutton work when clicked.
typebutton.addEventListener("click", function (action) {
  var textcolor = stylingdropdown.value
  var task = "<br>  <div style='color:"+ textcolor +" '>" + textinput.value + "<br>";

  tasksdiv.innerHTML = tasksdiv.innerHTML + task;

  
  
  
});

//Makes the text erase or disappear when clicked.
tasksdiv.addEventListener("click", function(evt){
    var thing = evt.target;
    thing.parentNode.removeChild(thing);
});

//Gives option of changing color of text.
// var stylingdropdown = textinput;
// '<div style=color:color>' +tasksdiv+ "</div>";
// '<div style=color:color>'+tasksdiv+"</div>";
// taskselement.innerHTML=tasksdiv.innerHTML;