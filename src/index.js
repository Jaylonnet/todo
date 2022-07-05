import { task, project, projectManager } from "./toDo.js";
import { storageManager } from "./storage.js";
import { displayProjectOnPage } from "./dom.js";


let selectedProject = 0;

const createProjectBtn = document.querySelector('#createProjectBtn');
createProjectBtn.addEventListener('click', () => {
    const form = document.forms.createProjectForm;
    createNewProject(form.projectTitle.value);
});

function createNewProject(title) {
    const newProject = project(title, projectManager.generateProjectId);
    projectManager.addProject(newProject);
    displayProjectOnPage(newProject, newProject.getProjectId);
    addListenerToProjectHeading(newProject.getProjectId);
};

function addListenerToProjectHeading(datasetId) {
    const projectHeading = document.querySelector(`h3[data-project-Id="${datasetId}"]`);
    projectHeading.addEventListener('click', (e) => {
        selectedProject = e.target.getAttribute("data-project-Id");
    });
}