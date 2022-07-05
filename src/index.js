import { task, project, projectManager } from "./toDo.js";
import { storageManager } from "./storage.js";
import { displayProjectOnPage, displayTaskOnPage } from "./dom.js";


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
    const projectHeading = document.querySelector(`h3[data-project-id="${datasetId}"]`);
    projectHeading.addEventListener('click', (e) => {
        selectedProject = e.target.getAttribute("data-project-id");
    });
}

const createTaskBtn = document.querySelector('#createTaskBtn');
createTaskBtn.addEventListener('click', () => {
    const form = document.forms.createTaskForm;
    const project = projectManager.getProjectList.find(proj => proj.getProjectId === parseInt(selectedProject))
    createNewTask(form, project);
});

function createNewTask(form, project) {
    const formData = [form.taskTitle.value, form.taskDesc.value, form.taskDueDate.value, form.taskPriority];
    const newTask = task(...formData, project.generateTaskId);
    project.addTask(newTask);
    displayTaskOnPage(newTask, project.getProjectId);
}