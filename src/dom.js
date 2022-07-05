export function displayProjectOnPage(project, projectIdentifier) {
    const heading = document.createElement('h3');
    heading.textContent = project.title;
    heading.dataset.projectIdentifier = projectIdentifier;
    document.querySelector('#project-container').append(heading);
};

export function displayTaskOnPage(task, taskIdentifier, projectIdentifier) {

};