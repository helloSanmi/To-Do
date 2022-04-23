var todo = document.getElementById("todo");
var button = document.getElementById("add");
var display = document.getElementById("display");
let array = [];

function addTodo() {
  array = [...array, todo.value];
  if (array.length > 0) {
    var input = document.createElement("li");
    var textnode = document.createTextNode(array);
    input.appendChild(textnode);
    input.innerHTML +=
      ' <button onclick="this.parentNode.remove()">Done</button>';
    display.appendChild(input);
    todo.value = "";
  }
}

button.addEventListener("click", addTodo);
