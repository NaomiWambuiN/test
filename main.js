// Get the add button
const addButton = document.querySelector(".btn");

// Add an event listener to the add button
addButton.addEventListener("click", addTask);

// Function to add a new task
function addTask() {
  // Get the input field for the new task
  const taskInput = document.querySelector('input[type="text"]');

  // Get the value of the input field
  const taskValue = taskInput.value;

  // Create a new list item for the task
  const newTask = document.createElement("li");
  newTask.textContent = taskValue;

  // Create a checkbox for the task
  const checkBox = document.createElement("input");
  checkBox.type = "checkbox";

  // Add the checkbox to the list item
  newTask.appendChild(checkBox);

  // Add the list item to the tasks list
  const tasksList = document.querySelector("ol");
  tasksList.appendChild(newTask);

  // Clear the input field
  taskInput.value = "";
}

// Function to toggle the completed status of a task
function toggleCompleted(event) {
  const checkBox = event.target;
  const task = checkBox.parentNode;
  task.classList.toggle("completed");
}

// Add event listeners to the checkboxes
const checkBoxes = document.querySelectorAll('input[type="checkbox"]');
checkBoxes.forEach((checkBox) => {
  checkBox.addEventListener("click", toggleCompleted);
});
