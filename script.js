document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('task-input');
    const addTaskBtn = document.getElementById('add-task-btn');
    const taskList = document.getElementById('task-list');
    const clearCompletedBtn = document.getElementById('clear-completed-btn');

    function addTask() {
        const taskText = taskInput.value.trim();
        if (taskText !== '') {
            const taskItem = document.createElement('li');
            taskItem.textContent = taskText;

            taskItem.addEventListener('click', () => {
                taskItem.classList.toggle('completed');
            });

            taskList.appendChild(taskItem);
            taskInput.value = '';
        }
    }

    function clearCompletedTasks() {
        const completedTasks = document.querySelectorAll('li.completed');
        completedTasks.forEach(task => {
            task.remove();
        });
    }

    addTaskBtn.addEventListener('click', addTask);
    taskInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            addTask();
        }
    });
    clearCompletedBtn.addEventListener('click', clearCompletedTasks);
});
