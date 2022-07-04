import { task, project, projectManager } from "./toDo.js";
import { storageManager } from "./storageManager.js";
import { DOMCreateProject } from "./dom.js";

const storageMgr = storageManager();
const projectMgr = projectManager();

const initProjects = function (){
    const items = storageMgr.getProjects();

    const createDefaultProject = () => {
        const defaultTask = task('Task 1', 'Description', 'Priority', 'Due Date');
        const defaultProject = project('Project 1');
        defaultProject.addTask(defaultTask);
        return defaultProject;
    };

    if (items === null) {
        projectMgr.projects.push(createDefaultProject());
        storageMgr.writeProjects(projectMgr.projects);
    };

    const recreateBehaviour = function() {
        for (let proj of items) {
            const newProject = project(proj.title);
            for (let oldTask of proj.tasks) {
                const newTask = task(oldTask.title, oldTask.description, oldTask.priority, oldTask.dueDate);
                newProject.addTask(newTask);
            };
            projectMgr.projects.push(newProject);
            DOMCreateProject(newProject,
                projectMgr.projects.indexOf(newProject),
                document.querySelector('#project-container'));
        };
    }();
}();