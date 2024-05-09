const form = document.getElementById("add-task-form");
const taskList = document.getElementById("task-list");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const newTask = document.getElementById("new-task").value;
  const taskItem = document.createElement("li");
  taskItem.classList.add("task-item");
  taskItem.innerHTML = `
    <input type="checkbox" id="task-${taskList.children.length + 1}">
    <label for="task-${taskList.children.length + 1}">${newTask}</label>
  `;
  taskList.appendChild(taskItem);
  document.getElementById("new-task").value = "";
});

taskList.addEventListener("click", (e) => {
  if (e.target.type === "checkbox") {
    e.target.parentNode.classList.toggle("completed");
  }
});

//create delete button
//let xx = document.createElement("button");
//button.textContent = "delete";
//append delete button to body
//let kk = document.getElementById("add - task - form");
//adding event listener to delete button
//button.addEventListener("click", function () {
// this.parentElement.remove();
// kk.appendChild(xx);
