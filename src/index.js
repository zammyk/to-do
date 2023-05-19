import { Todo } from "./todo_item";
import { Project, isDeletableProject, getProjectFromId } from "./project";
import { createElement } from "./DomStuff";
import "./assets/srcStyle.css";

const todoApp = (() => {
  // project handlers
  let projectIds = [
    Project("Week", false).getId(),
    Project("Today", false).getId(),
    Project("Home", false).getId(),
  ];
  let currProjectId = 0;
  const addProject = (projectTitle) => {
    let project = Project(projectTitle);
    projectIds.push(project.getId());
    switchCurrProject(project.getId());
  };
  const addTodoItemToCurrProject = (title, description, dueDate, priority) => {
    let todoItem = new Todo(title, description, dueDate, priority);
    getCurrProject().addTodoItem(todoItem);
    // update curr dom in todo items
    let todoDom = createElement("div", ["todo-item"], todoItem.title);
    todoContainer.insertBefore(todoDom, btnAddTodoItem);
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
    // add eventlistener to update todo area, whenever switchCurrProject is triggered
    // changed the dom of todoItems
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
    addTodoItemToCurrProject,
  };
})();

const projectContainer = document.querySelector(".project-column");
const todoContainer = document.querySelector(".todo-column");
const btnAddProject = document.getElementById("addProject");
const btnAddTodoItem = document.getElementById("addTodoItem");

window.onload = () => {
  todoApp.getAllProjects().forEach((project) => {
    let projectDom = createElement("div", ["project"], project.getTitle());
    projectContainer.insertBefore(projectDom, projectContainer.childNodes[0]);
  });

  todoApp.switchCurrProject(2);
};

btnAddProject.addEventListener("click", () => {
  let projectTitle = prompt("Enter ProjectTitle");
  todoApp.addProject(projectTitle);
  let projectDom = createElement("div", ["project"], projectTitle);
  projectContainer.insertBefore(projectDom, btnAddProject);
});

btnAddTodoItem.addEventListener("click", () => {
  let title = prompt("Enter title");
  let description = prompt("Enter description");
  let dueDate = prompt("Enter dueDate");
  let priority = prompt("Enter priority");
  todoApp.addTodoItemToCurrProject(title, description, dueDate, priority);
});
