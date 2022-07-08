export function displayProjectOnPage(project, projectId) {
    const heading = document.createElement('h3');
    heading.textContent = project.title;
    heading.dataset.projectId = projectId;
    heading.id = "projectHeading";
    document.querySelector('#projects').append(heading);
    
    const taskContainer = document.createElement('div');
    taskContainer.classList.add('task-container');
    taskContainer.dataset.projectId = projectId;
    document.querySelector('#tasks').append(taskContainer)
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

export function hideProjectTasks() {
    const allTasks = document.querySelectorAll('.task');
    allTasks.forEach(task => {
        task.style.display = 'none';
    })
};

export function showProjectTasks(projectId, projectTitle) {
    const projectTasks = document.querySelectorAll(`.task[data-project-id="${projectId}"]`)
    projectTasks.forEach(task => {
        task.style.display = 'block';
    });
    document.querySelector('#projectName').textContent = projectTitle
};