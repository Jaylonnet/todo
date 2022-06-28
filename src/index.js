import { task, project, projectManager } from "./toDo.js";
import { storageManager } from "./storageManager.js";

const storage = storageManager();
const projectMgr = projectManager();

const initProjects = function (){
    const items = storage.getProjects();

    const createDefaultProject = () => {
        const defaultTask = task('Task 1', 'Description', 'Priority', 'Due Date');
        const defaultProject = project('Project 1');
        defaultProject.addTask(defaultTask);
        return defaultProject;
    };

    if (items === null) {
        projectMgr.projects.push(createDefaultProject());
        storage.writeProjects(projectMgr.projects);
    };

    const recreatedProjects = [];
    const recreateBehaviour = function() {
        for (let proj of items) {
            const newProject = Object.assign(proj, project);
            recreatedProjects.push(newProject);
        };
    }();


    console.log(recreatedProjects)

}();