let nextId = 0;
let projectDirectory = [];

let Project = (title, deletable = true) => {
  let todo_items = [];
  let id = nextId++;
  let _deletable = deletable;

  const add_todo_item = (todo_item) => {
    todo_items.push(todo_item);
  };
  const remove_todo_item = (todo_item) => {
    for (let i = 0; i < todo_items.length; i++) {
      if (todo_items[i] === todo_item) {
        todo_items.splice(i, 1);
        return;
      }
    }
  };
  const getItemCount = () => {
    return todo_items.length;
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
