import { task, project, projectManager } from "./toDo.js";
import { storageManager } from "./storageManager.js";

const storage = storageManager();
const projectMgr = projectManager();

const initProjects = function (){
    const items = storage.getProjects();

    if (items === null) {
        
    };
    
    const createDefaultProject = () => {
        const defaultTask = task('Task 1', 'Description', 'Priority', 'Due Date');
        const defaultProject = project('Project 1');
        defaultProject.addTask(defaultTask);
        return defaultProject;
    };
}();