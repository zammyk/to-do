import "./assets/srcStyle.css";
import { Form } from "./FormStuff";
import { TodoApp } from ".";

const DomStuff = (() => {
  const createElement = (type, classes, text = "", children = [], id = "") => {
    const ele = document.createElement(type);

    if (classes.length > 0) {
      classes.forEach((cls) => {
        ele.classList.add(cls);
      });
    }

    if (text != "") ele.textContent = text;

    if (children.length > 0) {
      children.forEach((child) => {
        ele.appendChild(child);
      });
    }

    if (id != "") ele.id = id;

    return ele;
  };

  const createImage = (src, alt) => {
    const img = document.createElement("img");
    img.src = src;
    img.alt = alt;
    return img;
  };

  const deleteAllChildren = (node) => {
    while (node.firstChild != null) node.removeChild(node.firstChild);
  };

  const deleteAllChildrenExceptLast = (node) => {
    while (node.children.length > 1) node.removeChild(node.firstChild);
  };

  const createProjectDOM = (project, todoApp) => {
    let projectDom = createElement("div", ["project"], project.getTitle());
    projectDom.id = "project-" + project.getId();
    projectDom.addEventListener("click", () => {
      todoApp.switchCurrProject(projectDom.id.substring(8));
    });
    return projectDom;
  };

  const createTodoDOM = (todoItem) => {
    const todoItemDom = TodoDom.create(todoItem);
    return todoItemDom;
  };

  const appendChildren = (node, children) => {
    children.forEach((child) => {
      node.appendChild(child);
    });
  };

  const createOverlay = () => {
    const overlay = createElement("div", ["overlay"]);
    return overlay;
  };

  const deleteOverlay = () => {
    const overlay = document.querySelector(".overlay");
    overlay.remove();
  };

  const createTodoForm = (content) => {
    content.appendChild(createOverlay());
    return Form.createTodoForm();
  };

  return {
    createElement,
    createImage,
    deleteAllChildren,
    deleteAllChildrenExceptLast,
    createProjectDOM,
    appendChildren,
    createTodoForm,
    createTodoDOM,
    deleteOverlay,
  };
})();

const TodoDom = (() => {
  const create = (todoItem) => {
    const colorDiv = DomStuff.createElement("div", [
      "color",
      todoItem.getPriority,
    ]);
    const checkBox = DomStuff.createElement(
      "input",
      [],
      "",
      [],
      "todo-item-" + todoItem.getId
    );
    checkBox.type = "checkbox";
    checkBox.name = "todo-check";

    const titleDiv = DomStuff.createElement(
      "div",
      ["title"],
      todoItem.getTitle
    );

    const rightDiv = DomStuff.createElement("div", []);

    const btnDetails = DomStuff.createElement(
      "button",
      [],
      "Details",
      [],
      "todo-details-" + todoItem.getId
    );

    const dueDateDiv = DomStuff.createElement(
      "div",
      ["due-date"],
      todoItem.getDueDate
    );

    const editDiv = DomStuff.createElement(
      "div",
      ["edit"],
      "Edit",
      [],
      "todo-edit-" + todoItem.getId
    );

    const deleteDiv = DomStuff.createElement(
      "div",
      ["delete"],
      "Delete",
      [],
      "todo-delete-" + todoItem.getId
    );

    DomStuff.appendChildren(rightDiv, [
      btnDetails,
      dueDateDiv,
      editDiv,
      deleteDiv,
    ]);

    const todoDom = DomStuff.createElement("div", ["todo-item"]);
    DomStuff.appendChildren(todoDom, [colorDiv, checkBox, titleDiv, rightDiv]);

    return todoDom;
  };
  return { create };
})();

export { DomStuff };
