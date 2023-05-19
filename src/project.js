import { Todo, getTodoFromId } from "./todo_item";

let nextId = 0;
let projectDirectory = [];

let Project = (title, deletable = true) => {
  let todoItemsId = [];
  let id = nextId++;
  let _deletable = deletable;

  const addTodoItem = (todoItem) => {
    todoItemsId.push(todoItem.id);
  };
  const removeTodoItem = (todoItemId) => {
    for (let i = 0; i < todoItemsId.length; i++) {
      if (todoItemsId[i] === todoItemId) {
        todoItemsId.splice(i, 1);
        return;
      }
    }
  };
  const getTodoItem = (todoItemId) => {
    return getTodoFromId(todoItemId);
  };
  const isDeletable = () => {
    return _deletable;
  };

  const getItemCount = () => {
    return todoItemsId.length;
  };
  const getId = () => {
    return id;
  };
  const getTitle = () => {
    return title;
  };
  const getAllTodoItems = () => {
    let todoItems = [];
    todoItemsId.forEach((id) => todoItems.push(getTodoFromId(id)));
    return todoItems;
  };

  const setTitle = (newTitle) => {
    title = newTitle;
  };
  const obj = {
    title,
    addTodoItem,
    removeTodoItem,
    getItemCount,
    isDeletable,
    getId,
    getTitle,
    setTitle,
    getTodoItem,
    getAllTodoItems,
  };
  projectDirectory.push(obj);
  return obj;
};

function isDeletableProject(projectId) {
  if (
    projectId >= projectDirectory.length ||
    projectDirectory[projectId].isDeletable() === false
  )
    return false;
  return true;
}

function getProjectFromId(projectId) {
  if (projectId >= projectDirectory.length) return undefined;
  return projectDirectory[projectId];
}

export { Project, isDeletableProject, getProjectFromId };
