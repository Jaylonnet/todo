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
    const newProject = project(title, projectManager.generateProjectIdentifier);
    projectManager.addProject(newProject);
    displayProjectOnPage(newProject, newProject.getProjectIdentifier);
    addListenerToProjectHeading(newProject.getProjectIdentifier);
};

function addListenerToProjectHeading(datasetId) {
    const projectHeading = document.querySelector(`h3[data-project-identifier="${datasetId}"]`);
    projectHeading.addEventListener('click', (e) => {

    });
}