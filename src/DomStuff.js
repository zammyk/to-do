import "./assets/srcStyle.css";
import { Form } from "./FormStuff";
import BinImage from "./assets/bin.png";
import EditImage from "./assets/edit.png";
import { TodoApp } from ".";
import { getProjectFromId } from "./project";

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

  const addProject = (node, project) => {
    let projectDom = DomStuff.createProjectDOM(project, TodoApp);
    node.insertBefore(projectDom, node.childNodes[node.childNodes.length - 2]);
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

  const createTodoForm = (content, initialContent = null) => {
    content.appendChild(createOverlay());
    content.appendChild(Form.createTodoForm(initialContent));
  };

  const createProjectForm = (content) => {
    content.appendChild(createOverlay());
    content.appendChild(Form.createProjectForm());
  };

  return {
    createElement,
    createImage,
    deleteAllChildren,
    deleteAllChildrenExceptLast,
    createProjectDOM,
    addProject,
    appendChildren,
    createTodoForm,
    createTodoDOM,
    createOverlay,
    deleteOverlay,
    createProjectForm,
  };
})();

export const TodoDom = (() => {
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

    const editImage = new Image();
    editImage.src = EditImage;
    editImage.alt = "Edit Todo Item";

    const deleteImage = new Image();
    deleteImage.src = BinImage;
    deleteImage.alt = "Delete Todo Item";

    DomStuff.appendChildren(rightDiv, [
      btnDetails,
      dueDateDiv,
      editImage,
      deleteImage,
    ]);

    const todoDom = DomStuff.createElement("div", ["todo-item"]);

    if (todoItem.getCompleted == 1) {
      todoDom.classList.add("done");
      checkBox.checked = true;
    }

    checkBox.addEventListener("change", () => {
      if (checkBox.checked) {
        todoDom.classList.add("done");
        titleDiv.style.textDecoration = "line-through";
      } else {
        todoDom.classList.remove("done");
        titleDiv.style.textDecoration = "none";
      }
      todoItem.toggleStatus();
    });

    btnDetails.addEventListener("click", () => {
      const content = document.getElementById("content");
      const detailsDom = DetailsDOM.create(todoItem);
      content.appendChild(DomStuff.createOverlay());
      content.appendChild(detailsDom);
    });

    deleteImage.addEventListener("click", () => {
      const project = getProjectFromId(todoItem.getProjectId);
      project.removeTodoItem(todoItem.getId);
      todoDom.remove();
    });
    editImage.addEventListener("click", () => {
      const content = document.getElementById("content");
      DomStuff.createTodoForm(content, todoItem);
    });
    DomStuff.appendChildren(todoDom, [colorDiv, checkBox, titleDiv, rightDiv]);

    todoDom.id = "todo-" + todoItem.id;
    return todoDom;
  };

  const edit = (todoId, title, description, dueDate, priority) => {
    let titleDiv = document.querySelector(`#todo-${todoId} .title`);
    titleDiv.textContent = title;
    let colorDiv = document.querySelector(`#todo-${todoId} .color`);
    colorDiv.classList.remove("low", "high", "med");
    if (priority == "low") colorDiv.classList.add("low");
    if (priority == "med") colorDiv.classList.add("med");
    else colorDiv.classList.add("high");
    let dueDateDiv = document.querySelector(`#todo-${todoId} .due-date`);
    dueDateDiv.textContent = dueDate;
  };
  return { create, edit };
})();

const DetailsDOM = (() => {
  const create = (todoItem) => {
    const closeBtn = DomStuff.createElement("button", [], "X");

    const titleHead = DomStuff.createElement("span", [], "Title:");
    const titleCont = DomStuff.createElement("span", [], todoItem.getTitle);
    const titleDiv = DomStuff.createElement("div", [], "", [
      titleHead,
      titleCont,
    ]);

    const descHead = DomStuff.createElement("span", [], "Description:");
    const descCont = DomStuff.createElement(
      "span",
      [],
      todoItem.getDescription
    );
    const descDiv = DomStuff.createElement("div", [], "", [descHead, descCont]);

    const dueDateHead = DomStuff.createElement("span", [], "Due Date:");
    const dueDateCont = DomStuff.createElement("span", [], todoItem.getDueDate);
    const dueDateDiv = DomStuff.createElement("div", [], "", [
      dueDateHead,
      dueDateCont,
    ]);

    const priorityHead = DomStuff.createElement("span", [], "Priority:");
    const priorityCont = DomStuff.createElement(
      "span",
      [],
      todoItem.getPriority
    );
    const priorityDiv = DomStuff.createElement("div", [], "", [
      priorityHead,
      priorityCont,
    ]);

    let detailsDom = DomStuff.createElement("div", ["details"], "", [
      closeBtn,
      titleDiv,
      descDiv,
      dueDateDiv,
      priorityDiv,
    ]);

    closeBtn.addEventListener("click", () => {
      detailsDom.remove();
      DomStuff.deleteOverlay();
    });

    return detailsDom;
  };
  return {
    create,
  };
})();

export { DomStuff };
