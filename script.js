function addTask() {
  var inputBox = document.getElementById("taskInput");
  var taskText = inputBox.value;

  if (taskText === "") {
    alert("Please enter a task");
    return;
  }

var li = document.createElement("li");
li.innerText = taskText + " ";

var deleteBtn = document.createElement("button");
deleteBtn.innerText = "Delete";

deleteBtn.onclick = function () {
  li.remove();
};

li.appendChild(deleteBtn);
li.onclick = function () {
  li.style.textDecoration = "line-through";
};

document.getElementById("taskList").appendChild(li);
  inputBox.value = "";
}
