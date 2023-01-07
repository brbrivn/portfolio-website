var button = document.getElementById("enter");
var input = document.getElementById("user-input");
var ul = document.querySelector("ul");

function inputLength() {
    return input.value.length;
}

function createListElement ()

button.addEventListener("click", function() {
    if (input.length > 0) {
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li);
    input.value = "";
    };
    
});

button.addEventListener("keypress", function(event) {
    if (input.value.length > 0 && event.keyCode === 13) {
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li);
    input.value = "";
    };
    
});