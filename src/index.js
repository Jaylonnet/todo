import { task, project } from "./toDo.js";
import { storageManager } from "./storageManager.js";

const storage = storageManager();

const allProjects = [];

const initProjects = function (){
    
}();

function createDefaultProject() {
    const defaultTask = task('Task 1', 'Description', 'Priority', 'Due Date');
    const defaultProject = project('Project 1');
    defaultProject.addTask(defaultTask);
    return defaultProject;
};