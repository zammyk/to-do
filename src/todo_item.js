import { TodoApp } from ".";

let nextId = 0;
let todoDirectory = [];

class Todo {
  constructor(title, description, dueDate, priority) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.completed = false;
    this.id = nextId++;
    this.projectId = TodoApp.getCurrProject().getId();
    todoDirectory.push(this);
  }

  edit(title, description, dueDate, priority) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
  }

  get getTitle() {
    return this.title;
  }
  get getProjectId() {
    return this.projectId;
  }
  get getDescription() {
    return this.description;
  }
  get getDueDate() {
    return this.dueDate;
  }
  get getPriority() {
    return this.priority;
  }
  get getCompleted() {
    return this.completed;
  }
  get getId() {
    return this.id;
  }

  set setTitle(newTitle) {
    this.title = newTitle;
  }
  set setDescription(newDescription) {
    this.description = newDescription;
  }
  set setDueDate(newDueDate) {
    this.dueDate = newDueDate;
  }
  set setPriority(newPriority) {
    this.priority = newPriority;
  }

  toggleStatus() {
    this.completed ^= true;
    return this.completed;
  }
}

function getTodoFromId(todoId) {
  if (todoId >= todoDirectory.length) return undefined;
  return todoDirectory[todoId];
}

export { Todo, getTodoFromId };
