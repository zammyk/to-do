import { Todo } from "./todo_item";
import { Project, isDeletableProject, getProjectFromId } from "./project";

const todoApp = (() => {
  // project handlers
  let projectIds = [Project("Home", false).getId()];
  let currProjectId = 0;
  const addProject = (projectTitle) => {
    projectIds.push(Project(projectTitle).getId());
  };
  const deleteProject = (projectRemovedId) => {
    if (!isDeletableProject[projectRemovedId]) return;
    for (let i = 0; i < projectIds.length; i++) {
      if (projectIds[i] === projectRemovedId) {
        projectIds.splice(i, 1);
        return;
      }
    }
  };
  const switchCurrProject = (projectId) => {
    currProjectId = projectId;
  };
  const getCurrProject = () => {
    return getProjectFromId(currProjectId);
  };
  const getAllProjects = () => {
    let projects = [];
    projectIds.forEach((id) => projects.push(getProjectFromId(id)));
    return projects;
  };

  return {
    addProject,
    deleteProject,
    switchCurrProject,
    getCurrProject,
    getAllProjects,
  };
})();

const addProject = document.getElementById("addProject");
const showProjects = document.getElementById("showProjects");
addProject.addEventListener("click", () => {
  todoApp.addProject(prompt("Enter Project Name"));
});
showProjects.addEventListener("click", () => {
  todoApp.getAllProjects().forEach((project) => console.log(project));
});
