import { task, project, projectManager } from "./toDo.js";
import { storageManager } from "./storage.js";
import { displayProjectOnPage, displayTaskOnPage, hideProjectTasks, showProjectTasks } from "./dom.js";
import './style.css';


let selectedProject = 1;

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
        hideProjectTasks();
        const projectTitle = projectManager.getProjectList.find(proj => proj.getProjectId === parseInt(selectedProject)).title
        showProjectTasks(selectedProject, projectTitle);
    });
}

const createTaskBtn = document.querySelector('#createTaskBtn');
createTaskBtn.addEventListener('click', () => {
    const form = document.forms.createTaskForm;
    const project = projectManager.getProjectList.find(proj => proj.getProjectId === parseInt(selectedProject))
    createNewTask(form, project);
});

function createNewTask(form, project) {
    const formData = [form.taskTitle.value, form.taskDueDate.value, form.taskPriority.value];
    const newTask = task(...formData, project.generateTaskId);
    project.addTask(newTask);
    displayTaskOnPage(newTask, newTask.getTaskId, project.getProjectId);
}