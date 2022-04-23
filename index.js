var todo = document.getElementById("todo");
var button = document.getElementById("add");
var display = document.getElementById("display");

function addTodo() {
  if (todo.value !== "") {
    var input = document.createElement("li");
    var textnode = document.createTextNode(todo.value);
    input.appendChild(textnode);
    input.innerHTML +=
      ' <button onclick="this.parentNode.remove()">Done</button>';
    display.appendChild(input);
    todo.value = "";
  }
}

button.addEventListener("click", addTodo);
