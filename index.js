var todo = document.getElementById("todo");
var button = document.getElementById("add");
var display = document.getElementById("display");
let array = [];

//function to take input and display output
function addTodo() {
    array = [...array, todo.value];
    var input = document.createElement("li");
    var textnode = document.createTextNode(array[array.length-1]);
    input.appendChild(textnode);
    input.innerHTML +=
    ' <button onclick="this.parentNode.remove">Done</button>';
    display.appendChild(input);
    console.log(array);
    todo.value = "";
}

//function for button click
function afterClick(){
  if (todo.value.length > 0) {
    addTodo();
  }
}

//function for Enter key
function afterEnter(event){
  if(todo.value.length > 0 && event.which === 13){
    addTodo();
  }
}

button.addEventListener("click", afterClick);
todo.addEventListener("keypress", afterEnter);
