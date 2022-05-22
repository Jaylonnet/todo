const toDoItem = (title, description, dueDate, priority) => {
    const setTitle = (value) => title = value;
    const getTitle = () => title;
    
    const setDescription = (value) => description = value;
    const getDescription = () => description;

    const setDueDate = (value) => dueDate = value;
    const getDueDate = () => dueDate;

    const setPriority = (value) => priority = value;
    const getPriority = () => priority;

    return {
        setTitle,
        getTitle,

        setDescription,
        getDescription,

        setDueDate,
        getDueDate,

        setPriority,
        getPriority,
    };
};