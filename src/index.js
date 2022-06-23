const toDoItem = (title, description, dueDate, priority) => {

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

const project = (title) => {
    const tasks = [];

    const addTask = (task) => {tasks.push(task)};

    const removeTask = (index) => {tasks.splice(index, 1)};
    
    return {
        set title(value) {title = value},
        get title() {return title},
        get tasks() {return tasks},
        addTask,
        removeTask,
    };
};