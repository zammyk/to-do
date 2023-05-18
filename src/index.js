import { todo } from "./todo_item";
import { Project, isDeletableProject, getProjectFromId } from "./project";

const todoApp = (() => {
  let projectIds = [Project("Home", false).getId()];
  let currProjectId = 0;
  const addProject = (projectTitle) => {
    projectIds.push(Project(projectTitle).getId());
  };
  const deleteProject = (project_removed_id) => {
    if (!isDeletableProject[project_removed_id]) return;
    for (let i = 0; i < projects.length; i++) {
      if (projectIds[i] === project_removed_id) {
        projectIds.splice(i, 1);
        return;
      }
    }
  };
  const switchCurrProject = (project_id) => {
    currProjectId = project_id;
  };
  const showCurrProject = () => {
    console.log(getProjectFromId(currProjectId));
  };
  return {
    addProject,
    deleteProject,
    switchCurrProject,
    showCurrProject,
  };
})();
