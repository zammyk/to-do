import "./assets/srcStyle.css";

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

const Form = (() => {
  const createLabel = (_for, textContent) => {
    let label = document.createElement("label");
    label.for = _for;
    label.textContent = textContent;
    return label;
  };

  const createInput = (type, id, name, required, value = "") => {
    let input = document.createElement("input");
    input.type = type;
    input.id = id;
    input.name = name;
    input.required = required;
    if (value != "") input.value = value;
    return input;
  };

  const createTodoForm = () => {
    const titleDiv = DomStuff.createElement("div", []);
    const titleLabel = createLabel("todo_title", "Title:");
    const titleInput = createInput("text", "todo_title", "todo_title", true);
    const btnCloseTodoForm = DomStuff.createElement(
      "button",
      [],
      "X",
      [],
      "close_todo_form"
    );
    DomStuff.appendChildren(titleDiv, [
      titleLabel,
      titleInput,
      btnCloseTodoForm,
    ]);

    const descDiv = DomStuff.createElement("div", []);
    const descLabel = createLabel("todo_description", "Description:");
    const descText = document.createElement("textarea");
    descText.id = "todo_description";
    descText.name = "todo_description";
    descText.rows = "5";
    descText.cols = "20";
    DomStuff.appendChildren(descDiv, [descLabel, descText]);

    const dueDateDiv = DomStuff.createElement("div", []);
    const dueDateLabel = createLabel("todo_due_date", "Due Date:");
    const dueDateInput = createInput(
      "date",
      "todo_due_date",
      "todo_due_date",
      true
    );
    DomStuff.appendChildren(dueDateDiv, [dueDateLabel, dueDateInput]);

    const priorityDiv = DomStuff.createElement("div", []);
    const priorityLowLabel = createLabel("low_priority", "Low");
    const priorityLowInput = createInput(
      "radio",
      "low_priority",
      "todo_priority",
      false,
      "low"
    );
    const priorityMedLabel = createLabel("med_priority", "Med");
    const priorityMedInput = createInput(
      "radio",
      "med_priority",
      "todo_priority",
      false,
      "med"
    );
    const priorityHighLabel = createLabel("high_priority", "High");
    const priorityHighInput = createInput(
      "radio",
      "high_priority",
      "todo_priority",
      false,
      "high"
    );
    DomStuff.appendChildren(priorityDiv, [
      priorityLowLabel,
      priorityLowInput,
      priorityMedLabel,
      priorityMedInput,
      priorityHighLabel,
      priorityHighInput,
    ]);

    const btnSubmit = DomStuff.createElement(
      "button",
      [],
      "Add Item",
      [],
      "btnSubmit"
    );

    const form = DomStuff.createElement("div", ["todo-form"], "", [
      titleDiv,
      descDiv,
      dueDateDiv,
      priorityDiv,
      btnSubmit,
    ]);

    return form;
  };

  return {
    createTodoForm,
    createInput,
    createLabel,
  };
})();

export { DomStuff };
