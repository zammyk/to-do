/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _todo_item__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todo_item */ \"./src/todo_item.js\");\n/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./project */ \"./src/project.js\");\n\n\n\nconst todoApp = (() => {\n  // project handlers\n  let projectIds = [(0,_project__WEBPACK_IMPORTED_MODULE_1__.Project)(\"Home\", false).getId()];\n  let currProjectId = 0;\n  const addProject = (projectTitle) => {\n    projectIds.push((0,_project__WEBPACK_IMPORTED_MODULE_1__.Project)(projectTitle).getId());\n  };\n  const deleteProject = (projectRemovedId) => {\n    if (!_project__WEBPACK_IMPORTED_MODULE_1__.isDeletableProject[projectRemovedId]) return;\n    for (let i = 0; i < projectIds.length; i++) {\n      if (projectIds[i] === projectRemovedId) {\n        projectIds.splice(i, 1);\n        return;\n      }\n    }\n  };\n  const switchCurrProject = (projectId) => {\n    currProjectId = projectId;\n  };\n  const getCurrProject = () => {\n    return (0,_project__WEBPACK_IMPORTED_MODULE_1__.getProjectFromId)(currProjectId);\n  };\n  const getAllProjects = () => {\n    let projects = [];\n    projectIds.forEach((id) => projects.push((0,_project__WEBPACK_IMPORTED_MODULE_1__.getProjectFromId)(id)));\n    return projects;\n  };\n\n  return {\n    addProject,\n    deleteProject,\n    switchCurrProject,\n    getCurrProject,\n    getAllProjects,\n  };\n})();\n\n\n//# sourceURL=webpack://to-do/./src/index.js?");

/***/ }),

/***/ "./src/project.js":
/*!************************!*\
  !*** ./src/project.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Project: () => (/* binding */ Project),\n/* harmony export */   getProjectFromId: () => (/* binding */ getProjectFromId),\n/* harmony export */   isDeletableProject: () => (/* binding */ isDeletableProject)\n/* harmony export */ });\n/* harmony import */ var _todo_item__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todo_item */ \"./src/todo_item.js\");\n\n\nlet nextId = 0;\nlet projectDirectory = [];\n\nlet Project = (title, deletable = true) => {\n  let todoItemsId = [];\n  let id = nextId++;\n  let _deletable = deletable;\n\n  const addTodoItem = (title, description, dueDate, priority) => {\n    const todoItem = new _todo_item__WEBPACK_IMPORTED_MODULE_0__.Todo(title, description, dueDate, priority);\n    todoItemsId.push(todoItem.id);\n  };\n  const removeTodoItem = (todoItemId) => {\n    for (let i = 0; i < todoItemsId.length; i++) {\n      if (todoItemsId[i] === todoItemId) {\n        todoItemsId.splice(i, 1);\n        return;\n      }\n    }\n  };\n  const getTodoItem = (todoItemId) => {\n    return (0,_todo_item__WEBPACK_IMPORTED_MODULE_0__.getTodoFromId)(todoItemId);\n  };\n  const isDeletable = () => {\n    return _deletable;\n  };\n\n  const getItemCount = () => {\n    return todoItemsId.length;\n  };\n  const getId = () => {\n    return id;\n  };\n  const getTitle = () => {\n    return title;\n  };\n  const getAllTodoItems = () => {\n    let todoItems = [];\n    todoItemsId.forEach((id) => todoItems.push((0,_todo_item__WEBPACK_IMPORTED_MODULE_0__.getTodoFromId)(id)));\n    return todoItems;\n  };\n\n  const setTitle = (newTitle) => {\n    title = newTitle;\n  };\n  const obj = {\n    title,\n    addTodoItem,\n    removeTodoItem,\n    getItemCount,\n    isDeletable,\n    getId,\n    getTitle,\n    setTitle,\n    getTodoItem,\n    getAllTodoItems,\n  };\n  projectDirectory.push(obj);\n  return obj;\n};\n\nfunction isDeletableProject(projectId) {\n  if (\n    projectId >= projectDirectory.length ||\n    projectDirectory[projectId].isDeletable() === false\n  )\n    return false;\n  return true;\n}\n\nfunction getProjectFromId(projectId) {\n  if (projectId >= projectDirectory.length) return undefined;\n  return projectDirectory[projectId];\n}\n\n\n\n\n//# sourceURL=webpack://to-do/./src/project.js?");

/***/ }),

/***/ "./src/todo_item.js":
/*!**************************!*\
  !*** ./src/todo_item.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Todo: () => (/* binding */ Todo),\n/* harmony export */   getTodoFromId: () => (/* binding */ getTodoFromId)\n/* harmony export */ });\nlet nextId = 0;\nlet todoDirectory = [];\n\nclass Todo {\n  constructor(title, description, dueDate, priority) {\n    this.title = title;\n    this.description = description;\n    this.dueDate = dueDate;\n    this.priority = priority;\n    this.completed = false;\n    this.id = nextId++;\n    todoDirectory.push(this);\n  }\n\n  get getTitle() {\n    return this.title;\n  }\n  get getDescription() {\n    return this.description;\n  }\n  get getDueDate() {\n    return this.dueDate;\n  }\n  get getPriority() {\n    return this.priority;\n  }\n  get getCompleted() {\n    return this.completed;\n  }\n  get getId() {\n    return this.id;\n  }\n\n  set setTitle(newTitle) {\n    this.title = newTitle;\n  }\n  set setDescription(newDescription) {\n    this.description = newDescription;\n  }\n  set setDueDate(newDueDate) {\n    this.dueDate = newDueDate;\n  }\n  set setPriority(newPriority) {\n    this.priority = newPriority;\n  }\n\n  toggleStatus() {\n    this.completed ^= true;\n    return this.completed;\n  }\n}\n\nfunction getTodoFromId(todoId) {\n  if (todoId >= todoDirectory.length) return undefined;\n  return todoDirectory[todoId];\n}\n\n\n\n\n//# sourceURL=webpack://to-do/./src/todo_item.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;