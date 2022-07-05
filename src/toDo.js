export const task = (title, description, dueDate, priority) => {

    return {
        set title(value) {title = value},
        get title() {return title},

        set description(value) {description = value},
        get description() {return description},

        set dueDate(value) {dueDate = value},
        get dueDate() {return dueDate},

        set priority(value) {priority = value},
        get priority() {return priority},
    };
};

export const project = (title, uniqueProjectIdentifier) => {
    const tasks = [];
    let uniqueTaskIdentifier = 0;

    const addTask = (task) => {tasks.push(task)};
    
    return {
        set title(value) {title = value},
        get title() {return title},
        get tasks() {return tasks},
        get getProjectIdentifier() {return uniqueProjectIdentifier},
        get generateTaskIdentifier() {
            uniqueTaskIdentifier++;
            return uniqueTaskIdentifier;
        },
        addTask,
    };
};

export const projectManager = function () {
    let uniqueProjectIdentifier = 0;
    const projectList = [];

    const addProject = (project) => {
        projectList.push(project);
    }

    return {
        get generateProjectIdentifier() {
            uniqueProjectIdentifier++;
            return uniqueProjectIdentifier;
        },
        get getProjectList() {
            return projectList;
        },
        addProject
    };
}();