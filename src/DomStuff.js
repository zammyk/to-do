import "./assets/srcStyle.css";
import { Form } from "./FormStuff";

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

  const appendChildren = (node, children) => {
    children.forEach((child) => {
      node.appendChild(child);
    });
  };

  const createTodoForm = () => {
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
  };
})();

export { DomStuff };
