export function displayProjectOnPage(project, projectId) {
    const heading = document.createElement('h3');
    heading.textContent = project.title;
    heading.dataset.projectId = projectId;
    heading.id = "projectHeading";
    document.querySelector('#projects').append(heading);
    
    const taskContainer = document.createElement('div');
    taskContainer.classList.add('task-container');
    taskContainer.dataset.projectId = projectId;
    document.querySelector('#tasksContainer').append(taskContainer)
};

export function displayTaskOnPage(task, taskId, projectId) {
    const taskBox = document.createElement('div');
    taskBox.classList.add('task');
    taskBox.dataset.taskId = taskId;
    taskBox.dataset.projectId = projectId;
    const taskData = [task.title, task.description, task.dueDate, task.priority];
    for (let data of taskData) {
        const p = document.createElement('p')
        p.textContent = data;
        taskBox.append(p);
    };
    document.querySelector(`.task-container[data-project-id="${projectId}"]`).appendChild(taskBox);
};