import { Todo } from "./todo_item";
import { Project, isDeletableProject, getProjectFromId } from "./project";
import { DomStuff } from "./DomStuff";
import "./assets/srcStyle.css";

const todoApp = (() => {
  // project handlers
  let projectIds = [
    Project("Week", false).getId(),
    Project("Today", false).getId(),
    Project("Home", false).getId(),
  ];
  let currProjectId = 0;
  const addProject = (project) => {
    projectIds.push(project.getId());
    switchCurrProject(project.getId());
  };
  const addTodoItemToCurrProject = (title, description, dueDate, priority) => {
    let todoItem = new Todo(title, description, dueDate, priority);
    getCurrProject().addTodoItem(todoItem);
    // update curr dom in todo items
    let todoDom = DomStuff.createElement("div", ["todo-item"], todoItem.title);
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
    DomStuff.deleteAllChildrenExceptLast(todoContainer);
    if (projectId < 2) btnAddTodoItem.style.display = "none";
    else btnAddTodoItem.style.display = "";
    // add eventlistener to update todo area, whenever switchCurrProject is triggered
    // changed the dom of todoItems
    let project = getCurrProject();
    let todoItems = project.getAllTodoItems();
    todoItems.forEach((todoItem) => {
      let todoDom = DomStuff.createElement(
        "div",
        ["todo-item"],
        todoItem.title
      );
      todoContainer.insertBefore(todoDom, btnAddTodoItem);
    });
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
    let projectDom = DomStuff.createProjectDOM(project, todoApp);
    projectContainer.insertBefore(projectDom, projectContainer.childNodes[0]);
  });

  todoApp.switchCurrProject(2);
};

btnAddProject.addEventListener("click", () => {
  let projectTitle = prompt("Enter ProjectTitle");
  let project = Project(projectTitle);
  todoApp.addProject(project);
  let projectDom = DomStuff.createProjectDOM(project, todoApp);
  projectContainer.insertBefore(projectDom, btnAddProject);
});

btnAddTodoItem.addEventListener("click", () => {
  let title = prompt("Enter title");
  let description = prompt("Enter description");
  let dueDate = prompt("Enter dueDate");
  let priority = prompt("Enter priority");
  todoApp.addTodoItemToCurrProject(title, description, dueDate, priority);
});
