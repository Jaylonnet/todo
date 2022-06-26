export const storageManager = () => {
    const getProjects = () => {
        const projects = localStorage.getItem("projects");
        if (projects === null) {
            return null;
        } else {
            return JSON.parse(projects);
        };
    };

    const writeProjects = () => {
        
    };
    return {getProjects}
};