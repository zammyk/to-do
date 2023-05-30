import { Todo } from "./todo_item";
import { Project, isDeletableProject, getProjectFromId } from "./project";
import { DomStuff } from "./DomStuff";
import "./assets/srcStyle.css";
import { isEqual, endOfDay, endOfWeek } from "date-fns";

export const TodoApp = (() => {
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
    let todoDom = DomStuff.createTodoDOM(todoItem);
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

  const todaysItem = (todoItem) => {
    return isEqual(
      endOfDay(new Date(todoItem.getDueDate)),
      endOfDay(new Date())
    );
  };

  const weeksItem = (todoItem) => {
    return isEqual(
      endOfWeek(new Date(todoItem.getDueDate)),
      endOfWeek(new Date())
    );
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
    if (projectId < 2) {
      // Todays
      todoItems = [];
      projectIds.forEach((pId) => {
        if (pId >= 2) {
          let project = getProjectFromId(pId);
          project.getAllTodoItems().forEach((todoItem) => {
            if (
              (todaysItem(todoItem) && projectId == 1) ||
              (weeksItem(todoItem) && projectId == 0)
            )
              todoItems.push(todoItem);
          });
        }
      });
    }
    todoItems.forEach((todoItem) => {
      let todoDom = DomStuff.createTodoDOM(todoItem);
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

const content = document.getElementById("content");
const projectContainer = document.querySelector(".project-column");
const todoContainer = document.querySelector(".todo-column");
const btnAddProject = document.getElementById("addProject");
const btnAddTodoItem = document.getElementById("addTodoItem");

window.onload = () => {
  TodoApp.getAllProjects().forEach((project) => {
    let projectDom = DomStuff.createProjectDOM(project, TodoApp);
    projectContainer.insertBefore(projectDom, projectContainer.childNodes[0]);
  });

  TodoApp.switchCurrProject(2);
};

btnAddProject.addEventListener("click", () => {
  // let projectTitle = prompt("Enter ProjectTitle");
  // let project = Project(projectTitle);
  // TodoApp.addProject(project);
  // let projectDom = DomStuff.createProjectDOM(project, TodoApp);
  // projectContainer.insertBefore(projectDom, btnAddProject);
  DomStuff.createProjectForm(content);
});

btnAddTodoItem.addEventListener("click", () => {
  //   let title = prompt("Enter title");
  //   let description = prompt("Enter description");
  //   let dueDate = prompt("Enter dueDate");
  //   let priority = prompt("Enter priority");
  //   TodoApp.addTodoItemToCurrProject(title, description, dueDate, priority);
  DomStuff.createTodoForm(content);
});
