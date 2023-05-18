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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _todo_item__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todo_item */ \"./src/todo_item.js\");\n/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./project */ \"./src/project.js\");\n\n\n\nconst todoApp = (() => {\n  let projects = [(0,_project__WEBPACK_IMPORTED_MODULE_1__.Project)(\"Home\", false)];\n  let currProjectId = projects[0].getId;\n  const addProject = (projectTitle) => {\n    projects.push((0,_project__WEBPACK_IMPORTED_MODULE_1__.Project)(projectTitle));\n  };\n  const deleteProject = (project_removed_id) => {\n    if (!_project__WEBPACK_IMPORTED_MODULE_1__.isDeletableProject[project_removed_id]) return;\n    for (let i = 0; i < projects.length; i++) {\n      if (projects[i].getId === project_removed_id) {\n        projects.splice(i, 1);\n        return;\n      }\n    }\n  };\n  const switchCurrProject = (project_id) => {\n    currProjectId = project_id;\n  };\n  const showCurrProject = () => {\n    console.log((0,_project__WEBPACK_IMPORTED_MODULE_1__.getProjectFromId)(currProjectId));\n  };\n  return {\n    addProject,\n    deleteProject,\n    switchCurrProject,\n    showCurrProject,\n    projects,\n  };\n})();\n\nconsole.log(todoApp.projects);\ntodoApp.addProject(\"hello\");\ntodoApp.addProject(\"bye\");\ntodoApp.switchCurrProject(1);\ntodoApp.showCurrProject();\ntodoApp.switchCurrProject(0);\ntodoApp.showCurrProject();\n\n\n//# sourceURL=webpack://to-do/./src/index.js?");

/***/ }),

/***/ "./src/project.js":
/*!************************!*\
  !*** ./src/project.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Project: () => (/* binding */ Project),\n/* harmony export */   getProjectFromId: () => (/* binding */ getProjectFromId),\n/* harmony export */   isDeletableProject: () => (/* binding */ isDeletableProject)\n/* harmony export */ });\nlet nextId = 0;\nlet projectDirectory = [];\n\nlet Project = (title, deletable = true) => {\n  let todo_items = [];\n  let id = nextId++;\n  let _deletable = deletable;\n\n  const add_todo_item = (todo_item) => {\n    todo_items.push(todo_item);\n  };\n  const remove_todo_item = (todo_item) => {\n    for (let i = 0; i < todo_items.length; i++) {\n      if (todo_items[i] === todo_item) {\n        todo_items.splice(i, 1);\n        return;\n      }\n    }\n  };\n  const getItemCount = () => {\n    return todo_items.length;\n  };\n  const isDeletable = () => {\n    return _deletable;\n  };\n  const getId = () => {\n    return id;\n  };\n  const obj = {\n    title,\n    add_todo_item,\n    remove_todo_item,\n    getItemCount,\n    isDeletable,\n    getId,\n  };\n  projectDirectory.push(obj);\n  return obj;\n};\n\nfunction isDeletableProject(projectId) {\n  if (\n    projectId >= projectDirectory.length ||\n    projectDirectory[projectId].isDeletable() === false\n  )\n    return false;\n  return true;\n}\n\nfunction getProjectFromId(project_id) {\n  if (project_id >= projectDirectory.length) return undefined;\n  return projectDirectory[project_id];\n}\n\n\n\n\n//# sourceURL=webpack://to-do/./src/project.js?");

/***/ }),

/***/ "./src/todo_item.js":
/*!**************************!*\
  !*** ./src/todo_item.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   todo: () => (/* binding */ todo)\n/* harmony export */ });\nclass todo {\n  constructor(title, description, dueDate, priority) {\n    this.title = title;\n    this.description = description;\n    this.dueDate = dueDate;\n    this.priority = priority;\n    this.completed = false;\n  }\n\n  get getTitle() {\n    return this.title;\n  }\n  get getDescription() {\n    return this.description;\n  }\n  get getDueDate() {\n    return this.dueDate;\n  }\n  get getPriority() {\n    return this.priority;\n  }\n  get getCompleted() {\n    return this.completed;\n  }\n\n  set setTitle(newTitle) {\n    this.title = newTitle;\n  }\n  set setDescription(newDescription) {\n    this.description = newDescription;\n  }\n  set setDueDate(newDueDate) {\n    this.dueDate = newDueDate;\n  }\n  set setPriority(newPriority) {\n    this.priority = newPriority;\n  }\n\n  toggleStatus() {\n    this.completed ^= true;\n    return this.completed;\n  }\n}\n\n\n\n\n//# sourceURL=webpack://to-do/./src/todo_item.js?");

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