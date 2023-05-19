import { Todo } from "./todo_item";

let nextId = 0;
let projectDirectory = [];

let Project = (title, deletable = true) => {
  let todo_items_id = [];
  let id = nextId++;
  let _deletable = deletable;

  const add_todo_item = (title, description, dueDate, priority) => {
    const todo_item = new Todo(title, description, dueDate, priority);
    todo_items_id.push(todo_item.id);
  };
  const remove_todo_item = (todo_item_id) => {
    for (let i = 0; i < todo_items_id.length; i++) {
      if (todo_items_id[i] === todo_item_id) {
        todo_items_id.splice(i, 1);
        return;
      }
    }
  };
  const getItemCount = () => {
    return todo_items_id.length;
  };
  const isDeletable = () => {
    return _deletable;
  };
  const getId = () => {
    return id;
  };
  const getTitle = () => {
    return title;
  };
  const setTitle = (newTitle) => {
    title = newTitle;
  };
  const obj = {
    title,
    add_todo_item,
    remove_todo_item,
    getItemCount,
    isDeletable,
    getId,
    getTitle,
    setTitle,
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

function getProjectFromId(project_id) {
  if (project_id >= projectDirectory.length) return undefined;
  return projectDirectory[project_id];
}

export { Project, isDeletableProject, getProjectFromId };
