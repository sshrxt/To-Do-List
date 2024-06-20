import "./main.css";

import trash from './assets/trash.svg'
import { SideBarProjects } from "./modules/sidebar/sidebar-proj";

const dropdown = document.querySelector('#project-drop');
const projectAll = document.querySelector('.project-all');
const add = document.querySelector('.add');

dropdown.addEventListener('click', ()=>{
    dropdown.classList.toggle('rotated');
    projectAll.classList.toggle('hidden');
});



add.addEventListener("click", ()=> {
    const projectDiv = document.querySelector('.project-all');
    const newProj = SideBarProjects({title: "hellow"});
    const lastChild = projectDiv.lastElementChild;

    if(lastChild) {
        projectDiv.insertBefore(newProj, lastChild);
    }
    else {
        projectDiv.appendChild(newProj);
    }
})

