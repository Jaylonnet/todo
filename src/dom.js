export function displayProjectOnPage(project, projectId) {
    const heading = document.createElement('h3');
    heading.textContent = project.title;
    heading.dataset.projectId = projectId;
    heading.id = "projectHeading";
    document.querySelector('#project-container').append(heading);
    
    const taskContainer = document.createElement('div');
    taskContainer.classList.add('task-container');
    taskContainer.dataset.projectId = projectId;
    document.querySelector('#tasksContainer').append(taskContainer)
};

export function displayTaskOnPage(task, taskId, projectId) {

};