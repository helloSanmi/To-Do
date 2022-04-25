var todo = document.getElementById("todo");
var button = document.getElementById("add");
var display = document.getElementById("display");
let array = [];

function add_todo() {
  // var newTodo = new todoCon(todo);
  array = [...array, todo.value]
  // array.push(newTodo.todo.value);
  display_todo();
}

function delete_todo(arr, index) {
  arr.splice(index, 1);
  display_todo();
}

function display_todo() {
  var input = document.createElement("li");
  var textnode = document.createTextNode(todo.value);
  input.appendChild(textnode);
  input.innerHTML += 
  `   <button onclick="this.parentNode.remove();">Delete</button><br>`;
  display.appendChild(input);
  
  console.log(array);
  todo.value = "";
}

function afterClick() {
    if (todo.value.length > 0) {
      add_todo();
    }
  }
  
  function afterEnter(event) {
    if (todo.value.length > 0 && event.which === 13) {
      add_todo();
    }
  }

button.addEventListener("click", afterClick);
todo.addEventListener("keypress", afterEnter);
