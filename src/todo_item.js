class todo {
  constructor(title, description, dueDate, priority) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.completed = false;
  }

  get getTitle() {
    return this.title;
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

export { todo };