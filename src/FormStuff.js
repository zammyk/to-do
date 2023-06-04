import { DomStuff } from "./DomStuff";
import { TodoApp } from ".";
import { TodoDom } from "./DomStuff";
import { Project } from "./project";

const Form = (() => {
  const createLabel = (_for, textContent) => {
    let label = document.createElement("label");
    label.htmlFor = _for;
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

  const createTodoForm = (initialContent = null) => {
    const titleDiv = DomStuff.createElement("div", []);
    const titleLabel = createLabel("todo_title", "Title:");
    const titleInput = createInput("text", "todo_title", "todo_title", true);
    titleInput.required = true;
    const btnCloseTodoForm = DomStuff.createElement(
      "button",
      [],
      "X",
      [],
      "close_todo_form"
    );
    DomStuff.appendChildren(titleDiv, [titleLabel, titleInput]);

    const descDiv = DomStuff.createElement("div", []);
    const descLabel = createLabel("todo_description", "Description:");
    const descText = document.createElement("textarea");
    descText.id = "todo_description";
    descText.name = "todo_description";
    descText.rows = "5";
    descText.cols = "20";
    descText.required = true;
    DomStuff.appendChildren(descDiv, [descLabel, descText]);

    const dueDateDiv = DomStuff.createElement("div", []);
    const dueDateLabel = createLabel("todo_due_date", "Due Date:");
    const dueDateInput = createInput(
      "date",
      "todo_due_date",
      "todo_due_date",
      true
    );
    dueDateInput.required = true;
    DomStuff.appendChildren(dueDateDiv, [dueDateLabel, dueDateInput]);

    const priorityDiv = DomStuff.createElement("div", []);
    const priorityDivText = DomStuff.createElement("div", [], "Priority:");
    priorityDivText.style.width = "9rem";
    const priorityLowLabel = createLabel("low_priority", "Low");
    const priorityLowInput = createInput(
      "radio",
      "low_priority",
      "todo_priority",
      false,
      "low"
    );
    priorityLowInput.checked = true;
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
      priorityDivText,
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
      initialContent == null ? "+ Add Item" : "Edit Item",
      [],
      "btnSubmit"
    );
    btnSubmit.type = "submit";
    const btnDiv = DomStuff.createElement("div", ["btnDiv"], "", [
      btnSubmit,
      btnCloseTodoForm,
    ]);

    const form = DomStuff.createElement("form", ["todo-form"], "", [
      titleDiv,
      descDiv,
      dueDateDiv,
      priorityDiv,
      btnDiv,
    ]);

    const inputs = [titleInput, descText, dueDateInput];

    btnCloseTodoForm.addEventListener("click", () => {
      form.remove();
      DomStuff.deleteOverlay();
    });
    btnSubmit.addEventListener("click", (event) => {
      event.preventDefault();
      const title = titleInput.value;
      const description = descText.value;
      const dueDate = dueDateInput.value;
      const priority = document.querySelector(
        'input[name="todo_priority"]:checked'
      ).value;
      let isInvalid = false;
      inputs
        .slice()
        .reverse()
        .forEach((inp) => {
          if (!inp.validity.valid) {
            inp.setCustomValidity("This section is required!");
            inp.reportValidity();
            isInvalid = true;
          }
        });
      if (isInvalid) return;
      if (initialContent == null)
        TodoApp.addTodoItemToCurrProject(title, description, dueDate, priority);
      else {
        TodoDom.edit(
          initialContent.getId,
          title,
          description,
          dueDate,
          priority
        );
        initialContent.edit(title, description, dueDate, priority);
      }
      form.remove();
      DomStuff.deleteOverlay();
    });

    if (initialContent != null) {
      titleInput.value = initialContent.getTitle;
      descText.value = initialContent.getDescription;
      dueDateInput.value = initialContent.getDueDate;
      if (initialContent.getPriority == "low") priorityLowInput.checked = true;
      else if (initialContent.getPriority == "med")
        priorityMedInput.checked = true;
      else priorityHighInput.checked = true;
    }

    return form;
  };

  const createProjectForm = () => {
    const titleDiv = DomStuff.createElement("div", []);
    const titleLabel = createLabel("project_title_input", "Project Title:");
    const titleInput = createInput(
      "text",
      "project_title_input",
      "project_title",
      true
    );
    titleInput.required = true;
    DomStuff.appendChildren(titleDiv, [titleLabel, titleInput]);

    const btnDiv = DomStuff.createElement("div", []);
    const btnSubmit = DomStuff.createElement("button", [], "Submit");
    const btnCancel = DomStuff.createElement("button", [], "Cancel");
    DomStuff.appendChildren(btnDiv, [btnSubmit, btnCancel]);

    btnSubmit.addEventListener("click", () => {
      const projectTitle = titleInput.value;
      if (!titleInput.validity.valid) {
        titleInput.setCustomValidity("Project Title is required!");
        titleInput.reportValidity();
        return;
      }
      let project = Project(projectTitle);
      DomStuff.addProject(document.querySelector(".project-column"), project);
      TodoApp.addProject(project);
      form.remove();
      DomStuff.deleteOverlay();
    });

    btnCancel.addEventListener("click", () => {
      form.remove();
      DomStuff.deleteOverlay();
    });

    const form = DomStuff.createElement("div", ["project-form"], "", [
      titleDiv,
      btnDiv,
    ]);

    return form;
  };

  return {
    createTodoForm,
    createInput,
    createLabel,
    createProjectForm,
  };
})();

export { Form };
