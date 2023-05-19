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
