/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/storageManager.js":
/*!*******************************!*\
  !*** ./src/storageManager.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "storageManager": () => (/* binding */ storageManager)
/* harmony export */ });
const storageManager = () => {
    const getProjects = () => {
        const projects = localStorage.getItem("projects");
        if (projects === null) {
            return null;
        } else {
            return JSON.parse(projects);
        };
    };

    const writeProjects = (projects) => {
        localStorage.setItem('projects', JSON.stringify(projects))
    };

    return {getProjects, writeProjects}
};

/***/ }),

/***/ "./src/toDo.js":
/*!*********************!*\
  !*** ./src/toDo.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "project": () => (/* binding */ project),
/* harmony export */   "projectManager": () => (/* binding */ projectManager),
/* harmony export */   "task": () => (/* binding */ task)
/* harmony export */ });
const task = (title, description, dueDate, priority) => {

    return {
        set title(value) {title = value},
        get title() {return title},

        set description(value) {description = value},
        get description() {return description},

        set dueDate(value) {dueDate = value},
        get dueDate() {return dueDate},

        set priority(value) {priority = value},
        get priority() {return priority},
    };
};

const project = (title) => {
    const tasks = [];

    const addTask = (task) => {tasks.push(task)};

    const removeTask = (index) => {tasks.splice(index, 1)};
    
    return {
        set title(value) {title = value},
        get title() {return title},
        get tasks() {return tasks},
        addTask,
        removeTask,
    };
};

const projectManager = () => {
    const projects = [];

    return {get projects() {return projects},
}
};

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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _toDo_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toDo.js */ "./src/toDo.js");
/* harmony import */ var _storageManager_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./storageManager.js */ "./src/storageManager.js");



const storage = (0,_storageManager_js__WEBPACK_IMPORTED_MODULE_1__.storageManager)();
const projectMgr = (0,_toDo_js__WEBPACK_IMPORTED_MODULE_0__.projectManager)();

const initProjects = function (){
    const items = storage.getProjects();

    const createDefaultProject = () => {
        const defaultTask = (0,_toDo_js__WEBPACK_IMPORTED_MODULE_0__.task)('Task 1', 'Description', 'Priority', 'Due Date');
        const defaultProject = (0,_toDo_js__WEBPACK_IMPORTED_MODULE_0__.project)('Project 1');
        defaultProject.addTask(defaultTask);
        return defaultProject;
    };
    
    if (items === null) {
        projectMgr.projects.push(createDefaultProject());
        storage.writeProjects(projectMgr.projects);
        console.log(storage.getProjects());
    };

}();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLFlBQVk7QUFDWjs7Ozs7Ozs7Ozs7Ozs7OztBQ2ZPOztBQUVQO0FBQ0EsMEJBQTBCLGNBQWM7QUFDeEMscUJBQXFCLGFBQWE7O0FBRWxDLGdDQUFnQyxvQkFBb0I7QUFDcEQsMkJBQTJCLG1CQUFtQjs7QUFFOUMsNEJBQTRCLGdCQUFnQjtBQUM1Qyx1QkFBdUIsZUFBZTs7QUFFdEMsNkJBQTZCLGlCQUFpQjtBQUM5Qyx3QkFBd0IsZ0JBQWdCO0FBQ3hDO0FBQ0E7O0FBRU87QUFDUDs7QUFFQSwrQkFBK0I7O0FBRS9CLG1DQUFtQztBQUNuQztBQUNBO0FBQ0EsMEJBQTBCLGNBQWM7QUFDeEMscUJBQXFCLGFBQWE7QUFDbEMscUJBQXFCLGFBQWE7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7O0FBRU87QUFDUDs7QUFFQSxZQUFZLGdCQUFnQixnQkFBZ0I7QUFDNUM7QUFDQTs7Ozs7O1VDdENBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7O0FDTjBEO0FBQ0w7O0FBRXJELGdCQUFnQixrRUFBYztBQUM5QixtQkFBbUIsd0RBQWM7O0FBRWpDO0FBQ0E7O0FBRUE7QUFDQSw0QkFBNEIsOENBQUk7QUFDaEMsK0JBQStCLGlEQUFPO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxDQUFDLEciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLy4vc3JjL3N0b3JhZ2VNYW5hZ2VyLmpzIiwid2VicGFjazovL3RvZG8vLi9zcmMvdG9Eby5qcyIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG8vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3Qgc3RvcmFnZU1hbmFnZXIgPSAoKSA9PiB7XG4gICAgY29uc3QgZ2V0UHJvamVjdHMgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHByb2plY3RzID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJwcm9qZWN0c1wiKTtcbiAgICAgICAgaWYgKHByb2plY3RzID09PSBudWxsKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBKU09OLnBhcnNlKHByb2plY3RzKTtcbiAgICAgICAgfTtcbiAgICB9O1xuXG4gICAgY29uc3Qgd3JpdGVQcm9qZWN0cyA9IChwcm9qZWN0cykgPT4ge1xuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgncHJvamVjdHMnLCBKU09OLnN0cmluZ2lmeShwcm9qZWN0cykpXG4gICAgfTtcblxuICAgIHJldHVybiB7Z2V0UHJvamVjdHMsIHdyaXRlUHJvamVjdHN9XG59OyIsImV4cG9ydCBjb25zdCB0YXNrID0gKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHkpID0+IHtcblxuICAgIHJldHVybiB7XG4gICAgICAgIHNldCB0aXRsZSh2YWx1ZSkge3RpdGxlID0gdmFsdWV9LFxuICAgICAgICBnZXQgdGl0bGUoKSB7cmV0dXJuIHRpdGxlfSxcblxuICAgICAgICBzZXQgZGVzY3JpcHRpb24odmFsdWUpIHtkZXNjcmlwdGlvbiA9IHZhbHVlfSxcbiAgICAgICAgZ2V0IGRlc2NyaXB0aW9uKCkge3JldHVybiBkZXNjcmlwdGlvbn0sXG5cbiAgICAgICAgc2V0IGR1ZURhdGUodmFsdWUpIHtkdWVEYXRlID0gdmFsdWV9LFxuICAgICAgICBnZXQgZHVlRGF0ZSgpIHtyZXR1cm4gZHVlRGF0ZX0sXG5cbiAgICAgICAgc2V0IHByaW9yaXR5KHZhbHVlKSB7cHJpb3JpdHkgPSB2YWx1ZX0sXG4gICAgICAgIGdldCBwcmlvcml0eSgpIHtyZXR1cm4gcHJpb3JpdHl9LFxuICAgIH07XG59O1xuXG5leHBvcnQgY29uc3QgcHJvamVjdCA9ICh0aXRsZSkgPT4ge1xuICAgIGNvbnN0IHRhc2tzID0gW107XG5cbiAgICBjb25zdCBhZGRUYXNrID0gKHRhc2spID0+IHt0YXNrcy5wdXNoKHRhc2spfTtcblxuICAgIGNvbnN0IHJlbW92ZVRhc2sgPSAoaW5kZXgpID0+IHt0YXNrcy5zcGxpY2UoaW5kZXgsIDEpfTtcbiAgICBcbiAgICByZXR1cm4ge1xuICAgICAgICBzZXQgdGl0bGUodmFsdWUpIHt0aXRsZSA9IHZhbHVlfSxcbiAgICAgICAgZ2V0IHRpdGxlKCkge3JldHVybiB0aXRsZX0sXG4gICAgICAgIGdldCB0YXNrcygpIHtyZXR1cm4gdGFza3N9LFxuICAgICAgICBhZGRUYXNrLFxuICAgICAgICByZW1vdmVUYXNrLFxuICAgIH07XG59O1xuXG5leHBvcnQgY29uc3QgcHJvamVjdE1hbmFnZXIgPSAoKSA9PiB7XG4gICAgY29uc3QgcHJvamVjdHMgPSBbXTtcblxuICAgIHJldHVybiB7Z2V0IHByb2plY3RzKCkge3JldHVybiBwcm9qZWN0c30sXG59XG59OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHsgdGFzaywgcHJvamVjdCwgcHJvamVjdE1hbmFnZXIgfSBmcm9tIFwiLi90b0RvLmpzXCI7XG5pbXBvcnQgeyBzdG9yYWdlTWFuYWdlciB9IGZyb20gXCIuL3N0b3JhZ2VNYW5hZ2VyLmpzXCI7XG5cbmNvbnN0IHN0b3JhZ2UgPSBzdG9yYWdlTWFuYWdlcigpO1xuY29uc3QgcHJvamVjdE1nciA9IHByb2plY3RNYW5hZ2VyKCk7XG5cbmNvbnN0IGluaXRQcm9qZWN0cyA9IGZ1bmN0aW9uICgpe1xuICAgIGNvbnN0IGl0ZW1zID0gc3RvcmFnZS5nZXRQcm9qZWN0cygpO1xuXG4gICAgY29uc3QgY3JlYXRlRGVmYXVsdFByb2plY3QgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGRlZmF1bHRUYXNrID0gdGFzaygnVGFzayAxJywgJ0Rlc2NyaXB0aW9uJywgJ1ByaW9yaXR5JywgJ0R1ZSBEYXRlJyk7XG4gICAgICAgIGNvbnN0IGRlZmF1bHRQcm9qZWN0ID0gcHJvamVjdCgnUHJvamVjdCAxJyk7XG4gICAgICAgIGRlZmF1bHRQcm9qZWN0LmFkZFRhc2soZGVmYXVsdFRhc2spO1xuICAgICAgICByZXR1cm4gZGVmYXVsdFByb2plY3Q7XG4gICAgfTtcbiAgICBcbiAgICBpZiAoaXRlbXMgPT09IG51bGwpIHtcbiAgICAgICAgcHJvamVjdE1nci5wcm9qZWN0cy5wdXNoKGNyZWF0ZURlZmF1bHRQcm9qZWN0KCkpO1xuICAgICAgICBzdG9yYWdlLndyaXRlUHJvamVjdHMocHJvamVjdE1nci5wcm9qZWN0cyk7XG4gICAgICAgIGNvbnNvbGUubG9nKHN0b3JhZ2UuZ2V0UHJvamVjdHMoKSk7XG4gICAgfTtcblxufSgpOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==