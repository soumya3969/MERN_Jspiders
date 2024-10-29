let taskForm = document.getElementById('task-form');
let taskInput = document.getElementById('task-input');
let taskList = document.getElementById('task-list');

// Load tasks from localStorage or initialize empty list
let savedTask = localStorage.getItem('tasks') ? JSON.parse(localStorage.getItem('tasks')) : [];

// Add event listener for form submission
taskForm.addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent form from submitting normally

    // Get the value of the task input
    let task = taskInput.value.trim();

    // Check if task is not empty
    if (task) {
        // Add new task to the task list
        savedTask.unshift(task);

        // Save updated task list to localStorage
        localStorage.setItem('tasks', JSON.stringify(savedTask));

        // Clear the input field
        taskInput.value = '';

        // Re-display the updated list of tasks
        displayTasks();
    }
});

// Display tasks in the UI
function displayTasks() {
    // Clear the current list to avoid duplicating tasks
    taskList.innerHTML = '';

    // Loop through task list and add each task as a new list item
    savedTask.forEach((task, index) => {
        let listItem = document.createElement('li');
        listItem.className = 'list-group-item list-group-item-secondary mb-2 d-flex justify-content-between align-items-center';
        
        // Create task text span
        let taskText = document.createElement('span');
        taskText.textContent = task;

        // Create delete icon
        let deleteIcon = document.createElement('i');
        deleteIcon.className = 'fa-solid fa-trash float-end border border-dark p-2 border-2 rounded rounded-circle';
        deleteIcon.style.cursor = 'pointer';
        deleteIcon.addEventListener('click', () => {
            removeTask(index);
        });

        // Append task text and delete icon to the list item
        listItem.appendChild(taskText);
        listItem.appendChild(deleteIcon);

        // Append the list item to the task list
        taskList.appendChild(listItem);
    });
}

// Remove task from list
function removeTask(index) {
    // Remove the task from task list array
    savedTask.splice(index, 1);

    // Update localStorage with the new task list
    localStorage.setItem('tasks', JSON.stringify(savedTask));

    // Re-display tasks
    displayTasks();
}

// Initial call to display tasks on page load
displayTasks();
