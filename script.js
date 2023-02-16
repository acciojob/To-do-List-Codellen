//your code here
var toDoList = document.getElementById("newTodoInput");
var btn = document.getElementById("addTodoBtn");
var orderList = document.getElementById('todoList');
function addFunction(){
	if(toDoList.value){
	var list = document.createElement('li');
	list.textContent=toDoList.value;
	orderList.appendChild(list);
	toDoList.value="";
}
}

btn.addEventListener('click',addFunction)
