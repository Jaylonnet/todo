export function DOMCreateProject(project, index, node) {
    const ele = document.createElement('span');
    ele.textContent = project.title;
    ele.dataset.projectIndex = index;
    node.appendChild(ele)
};