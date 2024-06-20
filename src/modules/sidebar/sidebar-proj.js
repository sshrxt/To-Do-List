import trash from '../../assets/trash.svg';;

export function SideBarProjects(project) {
    const projectItem = document.createElement('div');
    projectItem.classList.add('project-item');

    const projectTitle = document.createElement('h2');
    projectTitle.innerText = `${project.title}`;

    const trashDiv = document.createElement('div');
    trashDiv.classList.add('trash');

    const trashIcon = document.createElement('img');
    trashIcon.src = trash;
    trashDiv.appendChild(trashIcon);

    projectItem.appendChild(projectTitle);
    projectItem.appendChild(trashDiv);

    return projectItem;
}