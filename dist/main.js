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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/assets/srcStyle.css":
/*!***********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/assets/srcStyle.css ***!
  \***********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \".project {\\n  font-size: 1.5rem;\\n}\\n\\n.project.selected {\\n  color: maroon;\\n}\\n\\n.project:hover {\\n  color: red;\\n  cursor: pointer;\\n}\\n\\n.todo-item {\\n  display: flex;\\n  gap: 1rem;\\n  background-color: rgb(194, 194, 194);\\n  align-items: center;\\n}\\n\\n.todo-item > * {\\n  display: flex;\\n  gap: 1rem;\\n  align-items: center;\\n}\\n\\n.todo-item .color {\\n  width: 2%;\\n  height: 100%;\\n}\\n\\n.todo-item .color.high {\\n  background-color: red;\\n}\\n.todo-item .color.med {\\n  background-color: yellow;\\n}\\n.todo-item .color.low {\\n  background-color: green;\\n}\\n\\n.todo-item div:last-child {\\n  margin-left: auto;\\n  margin-right: 0.5rem;\\n}\\n\\n.todo-form,\\n.project-form {\\n  position: absolute;\\n  background-color: white;\\n  top: 50%;\\n  left: 50%;\\n  transform: translate(-50%, -50%);\\n  z-index: 10;\\n  display: flex;\\n  flex-direction: column;\\n  gap: 1rem;\\n  padding: 2rem;\\n  border: black solid 1px;\\n}\\n\\n.todo-form *,\\n.project-form * {\\n  display: flex;\\n  align-items: start;\\n  gap: 0.5rem;\\n  font-size: 1.5rem;\\n}\\n\\n.todo-form:first-child {\\n  display: flex;\\n}\\n\\n.todo-form label:not([for$=\\\"priority\\\"]) {\\n  width: 9rem;\\n}\\n\\n.todo-form div:nth-child(4) {\\n  display: flex;\\n  align-items: center;\\n}\\n\\n.todo-form #btnSubmit {\\n  width: fit-content;\\n}\\n\\n.todo-form div:last-child {\\n  display: flex;\\n  justify-content: space-between;\\n}\\n\\n.project-form div {\\n  justify-content: space-between;\\n}\\n\\n.todo-item {\\n  height: 2rem;\\n}\\n\\n.todo-item.done {\\n  opacity: 0.5;\\n}\\n\\n.todo-item img {\\n  height: 1.5rem;\\n  width: auto;\\n  cursor: pointer;\\n}\\n\\n*[class$=\\\"form\\\"] {\\n  background-color: #404258;\\n}\\n\\n*[class$=\\\"form\\\"] button {\\n  background-color: #474e68;\\n  border-style: solid;\\n  border-color: black;\\n  border-radius: 5px;\\n  padding: 0.5rem 1rem;\\n}\\n\\n[id^=\\\"todo-details-\\\"] {\\n  color: #404258;\\n}\\n\\n.details {\\n  position: absolute;\\n  background-color: #404258;\\n  top: 50%;\\n  left: 50%;\\n  transform: translate(-50%, -50%);\\n  z-index: 10;\\n  display: flex;\\n  flex-direction: column;\\n  gap: 1rem;\\n  padding: 2rem;\\n  border: black solid 1px;\\n}\\n\\n.details div {\\n  display: flex;\\n  gap: 1rem;\\n}\\n\\n.details button {\\n  position: absolute;\\n  right: 0;\\n  top: 0;\\n  margin-right: 0.5rem;\\n  margin-top: 0.5rem;\\n  width: 1.5rem;\\n  color: #404258;\\n}\\n\\n.details div span:first-child {\\n  width: 5rem;\\n}\\n\\ninput:invalid,\\ntextarea:invalid {\\n  border-color: #900;\\n  background-color: #fdd;\\n}\\n\\ninput:focus:invalid,\\ntextarea:focus:invalid {\\n  outline: none;\\n}\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://to-do/./src/assets/srcStyle.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://to-do/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://to-do/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/defaultOptions/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/defaultOptions/index.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getDefaultOptions: () => (/* binding */ getDefaultOptions),\n/* harmony export */   setDefaultOptions: () => (/* binding */ setDefaultOptions)\n/* harmony export */ });\nvar defaultOptions = {};\nfunction getDefaultOptions() {\n  return defaultOptions;\n}\nfunction setDefaultOptions(newOptions) {\n  defaultOptions = newOptions;\n}\n\n//# sourceURL=webpack://to-do/./node_modules/date-fns/esm/_lib/defaultOptions/index.js?");

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js":
/*!**************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/requiredArgs/index.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ requiredArgs)\n/* harmony export */ });\nfunction requiredArgs(required, args) {\n  if (args.length < required) {\n    throw new TypeError(required + ' argument' + (required > 1 ? 's' : '') + ' required, but only ' + args.length + ' present');\n  }\n}\n\n//# sourceURL=webpack://to-do/./node_modules/date-fns/esm/_lib/requiredArgs/index.js?");

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/toInteger/index.js":
/*!***********************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/toInteger/index.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ toInteger)\n/* harmony export */ });\nfunction toInteger(dirtyNumber) {\n  if (dirtyNumber === null || dirtyNumber === true || dirtyNumber === false) {\n    return NaN;\n  }\n  var number = Number(dirtyNumber);\n  if (isNaN(number)) {\n    return number;\n  }\n  return number < 0 ? Math.ceil(number) : Math.floor(number);\n}\n\n//# sourceURL=webpack://to-do/./node_modules/date-fns/esm/_lib/toInteger/index.js?");

/***/ }),

/***/ "./node_modules/date-fns/esm/endOfDay/index.js":
/*!*****************************************************!*\
  !*** ./node_modules/date-fns/esm/endOfDay/index.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ endOfDay)\n/* harmony export */ });\n/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ \"./node_modules/date-fns/esm/toDate/index.js\");\n/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ \"./node_modules/date-fns/esm/_lib/requiredArgs/index.js\");\n\n\n/**\n * @name endOfDay\n * @category Day Helpers\n * @summary Return the end of a day for the given date.\n *\n * @description\n * Return the end of a day for the given date.\n * The result will be in the local timezone.\n *\n * @param {Date|Number} date - the original date\n * @returns {Date} the end of a day\n * @throws {TypeError} 1 argument required\n *\n * @example\n * // The end of a day for 2 September 2014 11:55:00:\n * const result = endOfDay(new Date(2014, 8, 2, 11, 55, 0))\n * //=> Tue Sep 02 2014 23:59:59.999\n */\nfunction endOfDay(dirtyDate) {\n  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(1, arguments);\n  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(dirtyDate);\n  date.setHours(23, 59, 59, 999);\n  return date;\n}\n\n//# sourceURL=webpack://to-do/./node_modules/date-fns/esm/endOfDay/index.js?");

/***/ }),

/***/ "./node_modules/date-fns/esm/endOfWeek/index.js":
/*!******************************************************!*\
  !*** ./node_modules/date-fns/esm/endOfWeek/index.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ endOfWeek)\n/* harmony export */ });\n/* harmony import */ var _lib_defaultOptions_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_lib/defaultOptions/index.js */ \"./node_modules/date-fns/esm/_lib/defaultOptions/index.js\");\n/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../toDate/index.js */ \"./node_modules/date-fns/esm/toDate/index.js\");\n/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ \"./node_modules/date-fns/esm/_lib/toInteger/index.js\");\n/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ \"./node_modules/date-fns/esm/_lib/requiredArgs/index.js\");\n\n\n\n\n/**\n * @name endOfWeek\n * @category Week Helpers\n * @summary Return the end of a week for the given date.\n *\n * @description\n * Return the end of a week for the given date.\n * The result will be in the local timezone.\n *\n * @param {Date|Number} date - the original date\n * @param {Object} [options] - an object with options.\n * @param {Locale} [options.locale=defaultLocale] - the locale object. See [Locale]{@link https://date-fns.org/docs/Locale}\n * @param {0|1|2|3|4|5|6} [options.weekStartsOn=0] - the index of the first day of the week (0 - Sunday)\n * @returns {Date} the end of a week\n * @throws {TypeError} 1 argument required\n * @throws {RangeError} `options.weekStartsOn` must be between 0 and 6\n *\n * @example\n * // The end of a week for 2 September 2014 11:55:00:\n * const result = endOfWeek(new Date(2014, 8, 2, 11, 55, 0))\n * //=> Sat Sep 06 2014 23:59:59.999\n *\n * @example\n * // If the week starts on Monday, the end of the week for 2 September 2014 11:55:00:\n * const result = endOfWeek(new Date(2014, 8, 2, 11, 55, 0), { weekStartsOn: 1 })\n * //=> Sun Sep 07 2014 23:59:59.999\n */\nfunction endOfWeek(dirtyDate, options) {\n  var _ref, _ref2, _ref3, _options$weekStartsOn, _options$locale, _options$locale$optio, _defaultOptions$local, _defaultOptions$local2;\n  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(1, arguments);\n  var defaultOptions = (0,_lib_defaultOptions_index_js__WEBPACK_IMPORTED_MODULE_1__.getDefaultOptions)();\n  var weekStartsOn = (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])((_ref = (_ref2 = (_ref3 = (_options$weekStartsOn = options === null || options === void 0 ? void 0 : options.weekStartsOn) !== null && _options$weekStartsOn !== void 0 ? _options$weekStartsOn : options === null || options === void 0 ? void 0 : (_options$locale = options.locale) === null || _options$locale === void 0 ? void 0 : (_options$locale$optio = _options$locale.options) === null || _options$locale$optio === void 0 ? void 0 : _options$locale$optio.weekStartsOn) !== null && _ref3 !== void 0 ? _ref3 : defaultOptions.weekStartsOn) !== null && _ref2 !== void 0 ? _ref2 : (_defaultOptions$local = defaultOptions.locale) === null || _defaultOptions$local === void 0 ? void 0 : (_defaultOptions$local2 = _defaultOptions$local.options) === null || _defaultOptions$local2 === void 0 ? void 0 : _defaultOptions$local2.weekStartsOn) !== null && _ref !== void 0 ? _ref : 0);\n\n  // Test if weekStartsOn is between 0 and 6 _and_ is not NaN\n  if (!(weekStartsOn >= 0 && weekStartsOn <= 6)) {\n    throw new RangeError('weekStartsOn must be between 0 and 6 inclusively');\n  }\n  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(dirtyDate);\n  var day = date.getDay();\n  var diff = (day < weekStartsOn ? -7 : 0) + 6 - (day - weekStartsOn);\n  date.setDate(date.getDate() + diff);\n  date.setHours(23, 59, 59, 999);\n  return date;\n}\n\n//# sourceURL=webpack://to-do/./node_modules/date-fns/esm/endOfWeek/index.js?");

/***/ }),

/***/ "./node_modules/date-fns/esm/isEqual/index.js":
/*!****************************************************!*\
  !*** ./node_modules/date-fns/esm/isEqual/index.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ isEqual)\n/* harmony export */ });\n/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ \"./node_modules/date-fns/esm/toDate/index.js\");\n/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ \"./node_modules/date-fns/esm/_lib/requiredArgs/index.js\");\n\n\n/**\n * @name isEqual\n * @category Common Helpers\n * @summary Are the given dates equal?\n *\n * @description\n * Are the given dates equal?\n *\n * @param {Date|Number} dateLeft - the first date to compare\n * @param {Date|Number} dateRight - the second date to compare\n * @returns {Boolean} the dates are equal\n * @throws {TypeError} 2 arguments required\n *\n * @example\n * // Are 2 July 2014 06:30:45.000 and 2 July 2014 06:30:45.500 equal?\n * const result = isEqual(\n *   new Date(2014, 6, 2, 6, 30, 45, 0),\n *   new Date(2014, 6, 2, 6, 30, 45, 500)\n * )\n * //=> false\n */\nfunction isEqual(dirtyLeftDate, dirtyRightDate) {\n  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(2, arguments);\n  var dateLeft = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(dirtyLeftDate);\n  var dateRight = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(dirtyRightDate);\n  return dateLeft.getTime() === dateRight.getTime();\n}\n\n//# sourceURL=webpack://to-do/./node_modules/date-fns/esm/isEqual/index.js?");

/***/ }),

/***/ "./node_modules/date-fns/esm/toDate/index.js":
/*!***************************************************!*\
  !*** ./node_modules/date-fns/esm/toDate/index.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ toDate)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/typeof */ \"./node_modules/@babel/runtime/helpers/esm/typeof.js\");\n/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ \"./node_modules/date-fns/esm/_lib/requiredArgs/index.js\");\n\n\n/**\n * @name toDate\n * @category Common Helpers\n * @summary Convert the given argument to an instance of Date.\n *\n * @description\n * Convert the given argument to an instance of Date.\n *\n * If the argument is an instance of Date, the function returns its clone.\n *\n * If the argument is a number, it is treated as a timestamp.\n *\n * If the argument is none of the above, the function returns Invalid Date.\n *\n * **Note**: *all* Date arguments passed to any *date-fns* function is processed by `toDate`.\n *\n * @param {Date|Number} argument - the value to convert\n * @returns {Date} the parsed date in the local time zone\n * @throws {TypeError} 1 argument required\n *\n * @example\n * // Clone the date:\n * const result = toDate(new Date(2014, 1, 11, 11, 30, 30))\n * //=> Tue Feb 11 2014 11:30:30\n *\n * @example\n * // Convert the timestamp to date:\n * const result = toDate(1392098430000)\n * //=> Tue Feb 11 2014 11:30:30\n */\nfunction toDate(argument) {\n  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(1, arguments);\n  var argStr = Object.prototype.toString.call(argument);\n\n  // Clone the date\n  if (argument instanceof Date || (0,_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(argument) === 'object' && argStr === '[object Date]') {\n    // Prevent the date to lose the milliseconds when passed to new Date() in IE10\n    return new Date(argument.getTime());\n  } else if (typeof argument === 'number' || argStr === '[object Number]') {\n    return new Date(argument);\n  } else {\n    if ((typeof argument === 'string' || argStr === '[object String]') && typeof console !== 'undefined') {\n      // eslint-disable-next-line no-console\n      console.warn(\"Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments\");\n      // eslint-disable-next-line no-console\n      console.warn(new Error().stack);\n    }\n    return new Date(NaN);\n  }\n}\n\n//# sourceURL=webpack://to-do/./node_modules/date-fns/esm/toDate/index.js?");

/***/ }),

/***/ "./src/assets/srcStyle.css":
/*!*********************************!*\
  !*** ./src/assets/srcStyle.css ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_srcStyle_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./srcStyle.css */ \"./node_modules/css-loader/dist/cjs.js!./src/assets/srcStyle.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_srcStyle_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_srcStyle_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_srcStyle_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_srcStyle_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://to-do/./src/assets/srcStyle.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://to-do/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://to-do/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://to-do/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://to-do/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://to-do/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://to-do/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/DomStuff.js":
/*!*************************!*\
  !*** ./src/DomStuff.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   DomStuff: () => (/* binding */ DomStuff),\n/* harmony export */   TodoDom: () => (/* binding */ TodoDom)\n/* harmony export */ });\n/* harmony import */ var _assets_srcStyle_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/srcStyle.css */ \"./src/assets/srcStyle.css\");\n/* harmony import */ var _FormStuff__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FormStuff */ \"./src/FormStuff.js\");\n/* harmony import */ var _assets_bin_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets/bin.png */ \"./src/assets/bin.png\");\n/* harmony import */ var _assets_edit_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./assets/edit.png */ \"./src/assets/edit.png\");\n/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! . */ \"./src/index.js\");\n/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./project */ \"./src/project.js\");\n\n\n\n\n\n\n\nconst DomStuff = (() => {\n  const createElement = (type, classes, text = \"\", children = [], id = \"\") => {\n    const ele = document.createElement(type);\n\n    if (classes.length > 0) {\n      classes.forEach((cls) => {\n        ele.classList.add(cls);\n      });\n    }\n\n    if (text != \"\") ele.textContent = text;\n\n    if (children.length > 0) {\n      children.forEach((child) => {\n        ele.appendChild(child);\n      });\n    }\n\n    if (id != \"\") ele.id = id;\n\n    return ele;\n  };\n\n  const createImage = (src, alt) => {\n    const img = document.createElement(\"img\");\n    img.src = src;\n    img.alt = alt;\n    return img;\n  };\n\n  const deleteAllChildren = (node) => {\n    while (node.firstChild != null) node.removeChild(node.firstChild);\n  };\n\n  const deleteAllChildrenExceptLast = (node) => {\n    while (node.children.length > 1) node.removeChild(node.firstChild);\n  };\n\n  const createProjectDOM = (project, todoApp) => {\n    let projectDom = createElement(\"div\", [\"project\"], project.getTitle());\n    projectDom.id = \"project-\" + project.getId();\n    projectDom.addEventListener(\"click\", () => {\n      todoApp.switchCurrProject(projectDom.id.substring(8));\n    });\n    return projectDom;\n  };\n\n  const addProject = (node, project) => {\n    let projectDom = DomStuff.createProjectDOM(project, ___WEBPACK_IMPORTED_MODULE_4__.TodoApp);\n    node.insertBefore(projectDom, node.childNodes[node.childNodes.length - 2]);\n  };\n\n  const createTodoDOM = (todoItem) => {\n    const todoItemDom = TodoDom.create(todoItem);\n    return todoItemDom;\n  };\n\n  const appendChildren = (node, children) => {\n    children.forEach((child) => {\n      node.appendChild(child);\n    });\n  };\n\n  const createOverlay = () => {\n    const overlay = createElement(\"div\", [\"overlay\"]);\n    return overlay;\n  };\n\n  const deleteOverlay = () => {\n    const overlay = document.querySelector(\".overlay\");\n    overlay.remove();\n  };\n\n  const createTodoForm = (content, initialContent = null) => {\n    content.appendChild(createOverlay());\n    content.appendChild(_FormStuff__WEBPACK_IMPORTED_MODULE_1__.Form.createTodoForm(initialContent));\n  };\n\n  const createProjectForm = (content) => {\n    content.appendChild(createOverlay());\n    content.appendChild(_FormStuff__WEBPACK_IMPORTED_MODULE_1__.Form.createProjectForm());\n  };\n\n  return {\n    createElement,\n    createImage,\n    deleteAllChildren,\n    deleteAllChildrenExceptLast,\n    createProjectDOM,\n    addProject,\n    appendChildren,\n    createTodoForm,\n    createTodoDOM,\n    createOverlay,\n    deleteOverlay,\n    createProjectForm,\n  };\n})();\n\nconst TodoDom = (() => {\n  const create = (todoItem) => {\n    const colorDiv = DomStuff.createElement(\"div\", [\n      \"color\",\n      todoItem.getPriority,\n    ]);\n    const checkBox = DomStuff.createElement(\n      \"input\",\n      [],\n      \"\",\n      [],\n      \"todo-item-\" + todoItem.getId\n    );\n    checkBox.type = \"checkbox\";\n    checkBox.name = \"todo-check\";\n\n    const titleDiv = DomStuff.createElement(\n      \"div\",\n      [\"title\"],\n      todoItem.getTitle\n    );\n\n    const rightDiv = DomStuff.createElement(\"div\", []);\n\n    const btnDetails = DomStuff.createElement(\n      \"button\",\n      [],\n      \"Details\",\n      [],\n      \"todo-details-\" + todoItem.getId\n    );\n\n    const dueDateDiv = DomStuff.createElement(\n      \"div\",\n      [\"due-date\"],\n      todoItem.getDueDate\n    );\n\n    const editImage = new Image();\n    editImage.src = _assets_edit_png__WEBPACK_IMPORTED_MODULE_3__;\n    editImage.alt = \"Edit Todo Item\";\n\n    const deleteImage = new Image();\n    deleteImage.src = _assets_bin_png__WEBPACK_IMPORTED_MODULE_2__;\n    deleteImage.alt = \"Delete Todo Item\";\n\n    DomStuff.appendChildren(rightDiv, [\n      btnDetails,\n      dueDateDiv,\n      editImage,\n      deleteImage,\n    ]);\n\n    const todoDom = DomStuff.createElement(\"div\", [\"todo-item\"]);\n\n    if (todoItem.getCompleted == 1) {\n      todoDom.classList.add(\"done\");\n      checkBox.checked = true;\n    }\n\n    checkBox.addEventListener(\"change\", () => {\n      if (checkBox.checked) {\n        todoDom.classList.add(\"done\");\n        titleDiv.style.textDecoration = \"line-through\";\n      } else {\n        todoDom.classList.remove(\"done\");\n        titleDiv.style.textDecoration = \"none\";\n      }\n      todoItem.toggleStatus();\n    });\n\n    btnDetails.addEventListener(\"click\", () => {\n      const content = document.getElementById(\"content\");\n      const detailsDom = DetailsDOM.create(todoItem);\n      content.appendChild(DomStuff.createOverlay());\n      content.appendChild(detailsDom);\n    });\n\n    deleteImage.addEventListener(\"click\", () => {\n      const project = (0,_project__WEBPACK_IMPORTED_MODULE_5__.getProjectFromId)(todoItem.getProjectId);\n      project.removeTodoItem(todoItem.getId);\n      todoDom.remove();\n    });\n    editImage.addEventListener(\"click\", () => {\n      const content = document.getElementById(\"content\");\n      DomStuff.createTodoForm(content, todoItem);\n    });\n    DomStuff.appendChildren(todoDom, [colorDiv, checkBox, titleDiv, rightDiv]);\n\n    todoDom.id = \"todo-\" + todoItem.id;\n    return todoDom;\n  };\n\n  const edit = (todoId, title, description, dueDate, priority) => {\n    let titleDiv = document.querySelector(`#todo-${todoId} .title`);\n    titleDiv.textContent = title;\n    let colorDiv = document.querySelector(`#todo-${todoId} .color`);\n    colorDiv.classList.remove(\"low\", \"high\", \"med\");\n    if (priority == \"low\") colorDiv.classList.add(\"low\");\n    if (priority == \"med\") colorDiv.classList.add(\"med\");\n    else colorDiv.classList.add(\"high\");\n    let dueDateDiv = document.querySelector(`#todo-${todoId} .due-date`);\n    dueDateDiv.textContent = dueDate;\n  };\n  return { create, edit };\n})();\n\nconst DetailsDOM = (() => {\n  const create = (todoItem) => {\n    const closeBtn = DomStuff.createElement(\"button\", [], \"X\");\n\n    const titleHead = DomStuff.createElement(\"span\", [], \"Title:\");\n    const titleCont = DomStuff.createElement(\"span\", [], todoItem.getTitle);\n    const titleDiv = DomStuff.createElement(\"div\", [], \"\", [\n      titleHead,\n      titleCont,\n    ]);\n\n    const descHead = DomStuff.createElement(\"span\", [], \"Description:\");\n    const descCont = DomStuff.createElement(\n      \"span\",\n      [],\n      todoItem.getDescription\n    );\n    const descDiv = DomStuff.createElement(\"div\", [], \"\", [descHead, descCont]);\n\n    const dueDateHead = DomStuff.createElement(\"span\", [], \"Due Date:\");\n    const dueDateCont = DomStuff.createElement(\"span\", [], todoItem.getDueDate);\n    const dueDateDiv = DomStuff.createElement(\"div\", [], \"\", [\n      dueDateHead,\n      dueDateCont,\n    ]);\n\n    const priorityHead = DomStuff.createElement(\"span\", [], \"Priority:\");\n    const priorityCont = DomStuff.createElement(\n      \"span\",\n      [],\n      todoItem.getPriority\n    );\n    const priorityDiv = DomStuff.createElement(\"div\", [], \"\", [\n      priorityHead,\n      priorityCont,\n    ]);\n\n    let detailsDom = DomStuff.createElement(\"div\", [\"details\"], \"\", [\n      closeBtn,\n      titleDiv,\n      descDiv,\n      dueDateDiv,\n      priorityDiv,\n    ]);\n\n    closeBtn.addEventListener(\"click\", () => {\n      detailsDom.remove();\n      DomStuff.deleteOverlay();\n    });\n\n    return detailsDom;\n  };\n  return {\n    create,\n  };\n})();\n\n\n\n\n//# sourceURL=webpack://to-do/./src/DomStuff.js?");

/***/ }),

/***/ "./src/FormStuff.js":
/*!**************************!*\
  !*** ./src/FormStuff.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Form: () => (/* binding */ Form)\n/* harmony export */ });\n/* harmony import */ var _DomStuff__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DomStuff */ \"./src/DomStuff.js\");\n/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! . */ \"./src/index.js\");\n/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./project */ \"./src/project.js\");\n\n\n\n\n\nconst Form = (() => {\n  const createLabel = (_for, textContent) => {\n    let label = document.createElement(\"label\");\n    label.htmlFor = _for;\n    label.textContent = textContent;\n    return label;\n  };\n\n  const createInput = (type, id, name, required, value = \"\") => {\n    let input = document.createElement(\"input\");\n    input.type = type;\n    input.id = id;\n    input.name = name;\n    input.required = required;\n    if (value != \"\") input.value = value;\n    return input;\n  };\n\n  const createTodoForm = (initialContent = null) => {\n    const titleDiv = _DomStuff__WEBPACK_IMPORTED_MODULE_0__.DomStuff.createElement(\"div\", []);\n    const titleLabel = createLabel(\"todo_title\", \"Title:\");\n    const titleInput = createInput(\"text\", \"todo_title\", \"todo_title\", true);\n    titleInput.required = true;\n    const btnCloseTodoForm = _DomStuff__WEBPACK_IMPORTED_MODULE_0__.DomStuff.createElement(\n      \"button\",\n      [],\n      \"X\",\n      [],\n      \"close_todo_form\"\n    );\n    _DomStuff__WEBPACK_IMPORTED_MODULE_0__.DomStuff.appendChildren(titleDiv, [titleLabel, titleInput]);\n\n    const descDiv = _DomStuff__WEBPACK_IMPORTED_MODULE_0__.DomStuff.createElement(\"div\", []);\n    const descLabel = createLabel(\"todo_description\", \"Description:\");\n    const descText = document.createElement(\"textarea\");\n    descText.id = \"todo_description\";\n    descText.name = \"todo_description\";\n    descText.rows = \"5\";\n    descText.cols = \"20\";\n    descText.required = true;\n    _DomStuff__WEBPACK_IMPORTED_MODULE_0__.DomStuff.appendChildren(descDiv, [descLabel, descText]);\n\n    const dueDateDiv = _DomStuff__WEBPACK_IMPORTED_MODULE_0__.DomStuff.createElement(\"div\", []);\n    const dueDateLabel = createLabel(\"todo_due_date\", \"Due Date:\");\n    const dueDateInput = createInput(\n      \"date\",\n      \"todo_due_date\",\n      \"todo_due_date\",\n      true\n    );\n    dueDateInput.required = true;\n    _DomStuff__WEBPACK_IMPORTED_MODULE_0__.DomStuff.appendChildren(dueDateDiv, [dueDateLabel, dueDateInput]);\n\n    const priorityDiv = _DomStuff__WEBPACK_IMPORTED_MODULE_0__.DomStuff.createElement(\"div\", []);\n    const priorityDivText = _DomStuff__WEBPACK_IMPORTED_MODULE_0__.DomStuff.createElement(\"div\", [], \"Priority:\");\n    priorityDivText.style.width = \"9rem\";\n    const priorityLowLabel = createLabel(\"low_priority\", \"Low\");\n    const priorityLowInput = createInput(\n      \"radio\",\n      \"low_priority\",\n      \"todo_priority\",\n      false,\n      \"low\"\n    );\n    priorityLowInput.checked = true;\n    const priorityMedLabel = createLabel(\"med_priority\", \"Med\");\n    const priorityMedInput = createInput(\n      \"radio\",\n      \"med_priority\",\n      \"todo_priority\",\n      false,\n      \"med\"\n    );\n    const priorityHighLabel = createLabel(\"high_priority\", \"High\");\n    const priorityHighInput = createInput(\n      \"radio\",\n      \"high_priority\",\n      \"todo_priority\",\n      false,\n      \"high\"\n    );\n    _DomStuff__WEBPACK_IMPORTED_MODULE_0__.DomStuff.appendChildren(priorityDiv, [\n      priorityDivText,\n      priorityLowLabel,\n      priorityLowInput,\n      priorityMedLabel,\n      priorityMedInput,\n      priorityHighLabel,\n      priorityHighInput,\n    ]);\n\n    const btnSubmit = _DomStuff__WEBPACK_IMPORTED_MODULE_0__.DomStuff.createElement(\n      \"button\",\n      [],\n      initialContent == null ? \"+ Add Item\" : \"Edit Item\",\n      [],\n      \"btnSubmit\"\n    );\n    btnSubmit.type = \"submit\";\n    const btnDiv = _DomStuff__WEBPACK_IMPORTED_MODULE_0__.DomStuff.createElement(\"div\", [\"btnDiv\"], \"\", [\n      btnSubmit,\n      btnCloseTodoForm,\n    ]);\n\n    const form = _DomStuff__WEBPACK_IMPORTED_MODULE_0__.DomStuff.createElement(\"form\", [\"todo-form\"], \"\", [\n      titleDiv,\n      descDiv,\n      dueDateDiv,\n      priorityDiv,\n      btnDiv,\n    ]);\n\n    const inputs = [titleInput, descText, dueDateInput];\n\n    btnCloseTodoForm.addEventListener(\"click\", () => {\n      form.remove();\n      _DomStuff__WEBPACK_IMPORTED_MODULE_0__.DomStuff.deleteOverlay();\n    });\n    btnSubmit.addEventListener(\"click\", (event) => {\n      event.preventDefault();\n      const title = titleInput.value;\n      const description = descText.value;\n      const dueDate = dueDateInput.value;\n      const priority = document.querySelector(\n        'input[name=\"todo_priority\"]:checked'\n      ).value;\n      let isInvalid = false;\n      inputs\n        .slice()\n        .reverse()\n        .forEach((inp) => {\n          if (!inp.validity.valid) {\n            inp.setCustomValidity(\"This section is required!\");\n            inp.reportValidity();\n            isInvalid = true;\n          }\n        });\n      if (isInvalid) return;\n      if (initialContent == null)\n        ___WEBPACK_IMPORTED_MODULE_1__.TodoApp.addTodoItemToCurrProject(title, description, dueDate, priority);\n      else {\n        _DomStuff__WEBPACK_IMPORTED_MODULE_0__.TodoDom.edit(\n          initialContent.getId,\n          title,\n          description,\n          dueDate,\n          priority\n        );\n        initialContent.edit(title, description, dueDate, priority);\n      }\n      form.remove();\n      _DomStuff__WEBPACK_IMPORTED_MODULE_0__.DomStuff.deleteOverlay();\n    });\n\n    if (initialContent != null) {\n      titleInput.value = initialContent.getTitle;\n      descText.value = initialContent.getDescription;\n      dueDateInput.value = initialContent.getDueDate;\n      if (initialContent.getPriority == \"low\") priorityLowInput.checked = true;\n      else if (initialContent.getPriority == \"med\")\n        priorityMedInput.checked = true;\n      else priorityHighInput.checked = true;\n    }\n\n    return form;\n  };\n\n  const createProjectForm = () => {\n    const titleDiv = _DomStuff__WEBPACK_IMPORTED_MODULE_0__.DomStuff.createElement(\"div\", []);\n    const titleLabel = createLabel(\"project_title_input\", \"Project Title:\");\n    const titleInput = createInput(\n      \"text\",\n      \"project_title_input\",\n      \"project_title\",\n      true\n    );\n    titleInput.required = true;\n    _DomStuff__WEBPACK_IMPORTED_MODULE_0__.DomStuff.appendChildren(titleDiv, [titleLabel, titleInput]);\n\n    const btnDiv = _DomStuff__WEBPACK_IMPORTED_MODULE_0__.DomStuff.createElement(\"div\", []);\n    const btnSubmit = _DomStuff__WEBPACK_IMPORTED_MODULE_0__.DomStuff.createElement(\"button\", [], \"Submit\");\n    const btnCancel = _DomStuff__WEBPACK_IMPORTED_MODULE_0__.DomStuff.createElement(\"button\", [], \"Cancel\");\n    _DomStuff__WEBPACK_IMPORTED_MODULE_0__.DomStuff.appendChildren(btnDiv, [btnSubmit, btnCancel]);\n\n    btnSubmit.addEventListener(\"click\", () => {\n      const projectTitle = titleInput.value;\n      if (!titleInput.validity.valid) {\n        titleInput.setCustomValidity(\"Project Title is required!\");\n        titleInput.reportValidity();\n        return;\n      }\n      let project = (0,_project__WEBPACK_IMPORTED_MODULE_2__.Project)(projectTitle);\n      _DomStuff__WEBPACK_IMPORTED_MODULE_0__.DomStuff.addProject(document.querySelector(\".project-column\"), project);\n      ___WEBPACK_IMPORTED_MODULE_1__.TodoApp.addProject(project);\n      form.remove();\n      _DomStuff__WEBPACK_IMPORTED_MODULE_0__.DomStuff.deleteOverlay();\n    });\n\n    btnCancel.addEventListener(\"click\", () => {\n      form.remove();\n      _DomStuff__WEBPACK_IMPORTED_MODULE_0__.DomStuff.deleteOverlay();\n    });\n\n    const form = _DomStuff__WEBPACK_IMPORTED_MODULE_0__.DomStuff.createElement(\"div\", [\"project-form\"], \"\", [\n      titleDiv,\n      btnDiv,\n    ]);\n\n    return form;\n  };\n\n  return {\n    createTodoForm,\n    createInput,\n    createLabel,\n    createProjectForm,\n  };\n})();\n\n\n\n\n//# sourceURL=webpack://to-do/./src/FormStuff.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   TodoApp: () => (/* binding */ TodoApp)\n/* harmony export */ });\n/* harmony import */ var _todo_item__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todo_item */ \"./src/todo_item.js\");\n/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./project */ \"./src/project.js\");\n/* harmony import */ var _DomStuff__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DomStuff */ \"./src/DomStuff.js\");\n/* harmony import */ var _assets_srcStyle_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./assets/srcStyle.css */ \"./src/assets/srcStyle.css\");\n/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! date-fns */ \"./node_modules/date-fns/esm/isEqual/index.js\");\n/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! date-fns */ \"./node_modules/date-fns/esm/endOfDay/index.js\");\n/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! date-fns */ \"./node_modules/date-fns/esm/endOfWeek/index.js\");\n\n\n\n\n\n\nconst TodoApp = (() => {\n  // project handlers\n  let projectIds = [\n    (0,_project__WEBPACK_IMPORTED_MODULE_1__.Project)(\"Week\", false).getId(),\n    (0,_project__WEBPACK_IMPORTED_MODULE_1__.Project)(\"Today\", false).getId(),\n    (0,_project__WEBPACK_IMPORTED_MODULE_1__.Project)(\"Home\", false).getId(),\n  ];\n  let currProjectId = 0;\n  const addProject = (project) => {\n    projectIds.push(project.getId());\n    switchCurrProject(project.getId());\n  };\n  const addTodoItemToCurrProject = (title, description, dueDate, priority) => {\n    let todoItem = new _todo_item__WEBPACK_IMPORTED_MODULE_0__.Todo(title, description, dueDate, priority);\n    getCurrProject().addTodoItem(todoItem);\n    // update curr dom in todo items\n    let todoDom = _DomStuff__WEBPACK_IMPORTED_MODULE_2__.DomStuff.createTodoDOM(todoItem);\n    todoContainer.insertBefore(todoDom, btnAddTodoItem);\n  };\n  const deleteProject = (projectRemovedId) => {\n    if (!_project__WEBPACK_IMPORTED_MODULE_1__.isDeletableProject[projectRemovedId]) return;\n    for (let i = 0; i < projectIds.length; i++) {\n      if (projectIds[i] === projectRemovedId) {\n        projectIds.splice(i, 1);\n        return;\n      }\n    }\n  };\n\n  const todaysItem = (todoItem) => {\n    return (0,date_fns__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(\n      (0,date_fns__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(new Date(todoItem.getDueDate)),\n      (0,date_fns__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(new Date())\n    );\n  };\n\n  const weeksItem = (todoItem) => {\n    return (0,date_fns__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(\n      (0,date_fns__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(new Date(todoItem.getDueDate)),\n      (0,date_fns__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(new Date())\n    );\n  };\n  const switchCurrProject = (projectId) => {\n    currProjectId = projectId;\n    _DomStuff__WEBPACK_IMPORTED_MODULE_2__.DomStuff.deleteAllChildrenExceptLast(todoContainer);\n    if (projectId < 2) btnAddTodoItem.style.display = \"none\";\n    else btnAddTodoItem.style.display = \"\";\n    // add eventlistener to update todo area, whenever switchCurrProject is triggered\n    // changed the dom of todoItems\n    let project = getCurrProject();\n    let todoItems = project.getAllTodoItems();\n    if (projectId < 2) {\n      // Todays\n      todoItems = [];\n      projectIds.forEach((pId) => {\n        if (pId >= 2) {\n          let project = (0,_project__WEBPACK_IMPORTED_MODULE_1__.getProjectFromId)(pId);\n          project.getAllTodoItems().forEach((todoItem) => {\n            if (\n              (todaysItem(todoItem) && projectId == 1) ||\n              (weeksItem(todoItem) && projectId == 0)\n            )\n              todoItems.push(todoItem);\n          });\n        }\n      });\n    }\n    todoItems.forEach((todoItem) => {\n      let todoDom = _DomStuff__WEBPACK_IMPORTED_MODULE_2__.DomStuff.createTodoDOM(todoItem);\n      todoContainer.insertBefore(todoDom, btnAddTodoItem);\n    });\n    document\n      .querySelectorAll(\".project\")\n      .forEach((projectDom) => projectDom.classList.remove(\"selected\"));\n    document.getElementById(\"project-\" + projectId).classList.add(\"selected\");\n  };\n  const getCurrProject = () => {\n    return (0,_project__WEBPACK_IMPORTED_MODULE_1__.getProjectFromId)(currProjectId);\n  };\n  const getAllProjects = () => {\n    let projects = [];\n    projectIds.forEach((id) => projects.push((0,_project__WEBPACK_IMPORTED_MODULE_1__.getProjectFromId)(id)));\n    return projects;\n  };\n\n  return {\n    addProject,\n    deleteProject,\n    switchCurrProject,\n    getCurrProject,\n    getAllProjects,\n    addTodoItemToCurrProject,\n  };\n})();\n\nconst content = document.getElementById(\"content\");\nconst projectContainer = document.querySelector(\".project-column\");\nconst todoContainer = document.querySelector(\".todo-column\");\nconst btnAddProject = document.getElementById(\"addProject\");\nconst btnAddTodoItem = document.getElementById(\"addTodoItem\");\n\nwindow.onload = () => {\n  TodoApp.getAllProjects().forEach((project) => {\n    let projectDom = _DomStuff__WEBPACK_IMPORTED_MODULE_2__.DomStuff.createProjectDOM(project, TodoApp);\n    projectContainer.insertBefore(projectDom, projectContainer.childNodes[0]);\n  });\n\n  TodoApp.switchCurrProject(2);\n};\n\nbtnAddProject.addEventListener(\"click\", () => {\n  // let projectTitle = prompt(\"Enter ProjectTitle\");\n  // let project = Project(projectTitle);\n  // TodoApp.addProject(project);\n  // let projectDom = DomStuff.createProjectDOM(project, TodoApp);\n  // projectContainer.insertBefore(projectDom, btnAddProject);\n  _DomStuff__WEBPACK_IMPORTED_MODULE_2__.DomStuff.createProjectForm(content);\n});\n\nbtnAddTodoItem.addEventListener(\"click\", () => {\n  //   let title = prompt(\"Enter title\");\n  //   let description = prompt(\"Enter description\");\n  //   let dueDate = prompt(\"Enter dueDate\");\n  //   let priority = prompt(\"Enter priority\");\n  //   TodoApp.addTodoItemToCurrProject(title, description, dueDate, priority);\n  _DomStuff__WEBPACK_IMPORTED_MODULE_2__.DomStuff.createTodoForm(content);\n});\n\n\n//# sourceURL=webpack://to-do/./src/index.js?");

/***/ }),

/***/ "./src/project.js":
/*!************************!*\
  !*** ./src/project.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Project: () => (/* binding */ Project),\n/* harmony export */   getProjectFromId: () => (/* binding */ getProjectFromId),\n/* harmony export */   isDeletableProject: () => (/* binding */ isDeletableProject)\n/* harmony export */ });\n/* harmony import */ var _todo_item__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todo_item */ \"./src/todo_item.js\");\n\n\nlet nextId = 0;\nlet projectDirectory = [];\n\nlet Project = (title, deletable = true) => {\n  let todoItemsId = [];\n  let id = nextId++;\n  let _deletable = deletable;\n\n  const addTodoItem = (todoItem) => {\n    todoItemsId.push(todoItem.id);\n  };\n  const removeTodoItem = (todoItemId) => {\n    for (let i = 0; i < todoItemsId.length; i++) {\n      if (todoItemsId[i] === todoItemId) {\n        todoItemsId.splice(i, 1);\n        return;\n      }\n    }\n  };\n  const getTodoItem = (todoItemId) => {\n    return (0,_todo_item__WEBPACK_IMPORTED_MODULE_0__.getTodoFromId)(todoItemId);\n  };\n  const isDeletable = () => {\n    return _deletable;\n  };\n\n  const getItemCount = () => {\n    return todoItemsId.length;\n  };\n  const getId = () => {\n    return id;\n  };\n  const getTitle = () => {\n    return title;\n  };\n  const getAllTodoItems = () => {\n    let todoItems = [];\n    todoItemsId.forEach((id) => todoItems.push((0,_todo_item__WEBPACK_IMPORTED_MODULE_0__.getTodoFromId)(id)));\n    return todoItems;\n  };\n\n  const setTitle = (newTitle) => {\n    title = newTitle;\n  };\n  const obj = {\n    title,\n    addTodoItem,\n    removeTodoItem,\n    getItemCount,\n    isDeletable,\n    getId,\n    getTitle,\n    setTitle,\n    getTodoItem,\n    getAllTodoItems,\n  };\n  projectDirectory.push(obj);\n  return obj;\n};\n\nfunction isDeletableProject(projectId) {\n  if (\n    projectId >= projectDirectory.length ||\n    projectDirectory[projectId].isDeletable() === false\n  )\n    return false;\n  return true;\n}\n\nfunction getProjectFromId(projectId) {\n  if (projectId >= projectDirectory.length) return undefined;\n  return projectDirectory[projectId];\n}\n\n\n\n\n//# sourceURL=webpack://to-do/./src/project.js?");

/***/ }),

/***/ "./src/todo_item.js":
/*!**************************!*\
  !*** ./src/todo_item.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Todo: () => (/* binding */ Todo),\n/* harmony export */   getTodoFromId: () => (/* binding */ getTodoFromId)\n/* harmony export */ });\n/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! . */ \"./src/index.js\");\n\n\nlet nextId = 0;\nlet todoDirectory = [];\n\nclass Todo {\n  constructor(title, description, dueDate, priority) {\n    this.title = title;\n    this.description = description;\n    this.dueDate = dueDate;\n    this.priority = priority;\n    this.completed = false;\n    this.id = nextId++;\n    this.projectId = ___WEBPACK_IMPORTED_MODULE_0__.TodoApp.getCurrProject().getId();\n    todoDirectory.push(this);\n  }\n\n  edit(title, description, dueDate, priority) {\n    this.title = title;\n    this.description = description;\n    this.dueDate = dueDate;\n    this.priority = priority;\n  }\n\n  get getTitle() {\n    return this.title;\n  }\n  get getProjectId() {\n    return this.projectId;\n  }\n  get getDescription() {\n    return this.description;\n  }\n  get getDueDate() {\n    return this.dueDate;\n  }\n  get getPriority() {\n    return this.priority;\n  }\n  get getCompleted() {\n    return this.completed;\n  }\n  get getId() {\n    return this.id;\n  }\n\n  set setTitle(newTitle) {\n    this.title = newTitle;\n  }\n  set setDescription(newDescription) {\n    this.description = newDescription;\n  }\n  set setDueDate(newDueDate) {\n    this.dueDate = newDueDate;\n  }\n  set setPriority(newPriority) {\n    this.priority = newPriority;\n  }\n\n  toggleStatus() {\n    this.completed ^= true;\n    return this.completed;\n  }\n}\n\nfunction getTodoFromId(todoId) {\n  if (todoId >= todoDirectory.length) return undefined;\n  return todoDirectory[todoId];\n}\n\n\n\n\n//# sourceURL=webpack://to-do/./src/todo_item.js?");

/***/ }),

/***/ "./src/assets/bin.png":
/*!****************************!*\
  !*** ./src/assets/bin.png ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"a6fd29509719f079bfd7.png\";\n\n//# sourceURL=webpack://to-do/./src/assets/bin.png?");

/***/ }),

/***/ "./src/assets/edit.png":
/*!*****************************!*\
  !*** ./src/assets/edit.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"b57b2be65da0f6f7f4a2.png\";\n\n//# sourceURL=webpack://to-do/./src/assets/edit.png?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/typeof.js":
/*!***********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/typeof.js ***!
  \***********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ _typeof)\n/* harmony export */ });\nfunction _typeof(obj) {\n  \"@babel/helpers - typeof\";\n\n  return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (obj) {\n    return typeof obj;\n  } : function (obj) {\n    return obj && \"function\" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj;\n  }, _typeof(obj);\n}\n\n//# sourceURL=webpack://to-do/./node_modules/@babel/runtime/helpers/esm/typeof.js?");

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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;