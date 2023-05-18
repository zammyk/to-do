import { todo } from "./todo_item";
import { Project, isDeletableProject, getProjectFromId } from "./project";

const todoApp = (() => {
  let projects = [Project("Home", false)];
  let currProjectId = projects[0].getId;
  const addProject = (projectTitle) => {
    projects.push(Project(projectTitle));
  };
  const deleteProject = (project_removed_id) => {
    if (!isDeletableProject[project_removed_id]) return;
    for (let i = 0; i < projects.length; i++) {
      if (projects[i].getId === project_removed_id) {
        projects.splice(i, 1);
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
    projects,
  };
})();

console.log(todoApp.projects);
todoApp.addProject("hello");
todoApp.addProject("bye");
todoApp.switchCurrProject(1);
todoApp.showCurrProject();
todoApp.switchCurrProject(0);
todoApp.showCurrProject();
