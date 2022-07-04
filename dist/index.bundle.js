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
    };

    const recreateBehaviour = function() {
        for (let proj of items) {
            const newProject = (0,_toDo_js__WEBPACK_IMPORTED_MODULE_0__.project)(proj.title);
            for (let oldTask of proj.tasks) {
                const newTask = (0,_toDo_js__WEBPACK_IMPORTED_MODULE_0__.task)(oldTask.title, oldTask.description, oldTask.priority, oldTask.dueDate);
                newProject.addTask(newTask);
            };
            projectMgr.projects.push(newProject);
        };
    }();

    console.log(projectMgr.projects[0].tasks[0].dueDate)
}();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLFlBQVk7QUFDWjs7Ozs7Ozs7Ozs7Ozs7OztBQ2ZPOztBQUVQO0FBQ0EsMEJBQTBCLGNBQWM7QUFDeEMscUJBQXFCLGFBQWE7O0FBRWxDLGdDQUFnQyxvQkFBb0I7QUFDcEQsMkJBQTJCLG1CQUFtQjs7QUFFOUMsNEJBQTRCLGdCQUFnQjtBQUM1Qyx1QkFBdUIsZUFBZTs7QUFFdEMsNkJBQTZCLGlCQUFpQjtBQUM5Qyx3QkFBd0IsZ0JBQWdCO0FBQ3hDO0FBQ0E7O0FBRU87QUFDUDs7QUFFQSwrQkFBK0I7O0FBRS9CLG1DQUFtQztBQUNuQztBQUNBO0FBQ0EsMEJBQTBCLGNBQWM7QUFDeEMscUJBQXFCLGFBQWE7QUFDbEMscUJBQXFCLGFBQWE7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7O0FBRU87QUFDUDs7QUFFQSxZQUFZLGdCQUFnQixnQkFBZ0I7QUFDNUM7QUFDQTs7Ozs7O1VDdENBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7O0FDTjBEO0FBQ0w7O0FBRXJELGdCQUFnQixrRUFBYztBQUM5QixtQkFBbUIsd0RBQWM7O0FBRWpDO0FBQ0E7O0FBRUE7QUFDQSw0QkFBNEIsOENBQUk7QUFDaEMsK0JBQStCLGlEQUFPO0FBQ3RDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsK0JBQStCLGlEQUFPO0FBQ3RDO0FBQ0EsZ0NBQWdDLDhDQUFJO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBLENBQUMsRyIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8vLi9zcmMvc3RvcmFnZU1hbmFnZXIuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy90b0RvLmpzIiwid2VicGFjazovL3RvZG8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBzdG9yYWdlTWFuYWdlciA9ICgpID0+IHtcbiAgICBjb25zdCBnZXRQcm9qZWN0cyA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgcHJvamVjdHMgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInByb2plY3RzXCIpO1xuICAgICAgICBpZiAocHJvamVjdHMgPT09IG51bGwpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIEpTT04ucGFyc2UocHJvamVjdHMpO1xuICAgICAgICB9O1xuICAgIH07XG5cbiAgICBjb25zdCB3cml0ZVByb2plY3RzID0gKHByb2plY3RzKSA9PiB7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdwcm9qZWN0cycsIEpTT04uc3RyaW5naWZ5KHByb2plY3RzKSlcbiAgICB9O1xuXG4gICAgcmV0dXJuIHtnZXRQcm9qZWN0cywgd3JpdGVQcm9qZWN0c31cbn07IiwiZXhwb3J0IGNvbnN0IHRhc2sgPSAodGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSkgPT4ge1xuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgc2V0IHRpdGxlKHZhbHVlKSB7dGl0bGUgPSB2YWx1ZX0sXG4gICAgICAgIGdldCB0aXRsZSgpIHtyZXR1cm4gdGl0bGV9LFxuXG4gICAgICAgIHNldCBkZXNjcmlwdGlvbih2YWx1ZSkge2Rlc2NyaXB0aW9uID0gdmFsdWV9LFxuICAgICAgICBnZXQgZGVzY3JpcHRpb24oKSB7cmV0dXJuIGRlc2NyaXB0aW9ufSxcblxuICAgICAgICBzZXQgZHVlRGF0ZSh2YWx1ZSkge2R1ZURhdGUgPSB2YWx1ZX0sXG4gICAgICAgIGdldCBkdWVEYXRlKCkge3JldHVybiBkdWVEYXRlfSxcblxuICAgICAgICBzZXQgcHJpb3JpdHkodmFsdWUpIHtwcmlvcml0eSA9IHZhbHVlfSxcbiAgICAgICAgZ2V0IHByaW9yaXR5KCkge3JldHVybiBwcmlvcml0eX0sXG4gICAgfTtcbn07XG5cbmV4cG9ydCBjb25zdCBwcm9qZWN0ID0gKHRpdGxlKSA9PiB7XG4gICAgY29uc3QgdGFza3MgPSBbXTtcblxuICAgIGNvbnN0IGFkZFRhc2sgPSAodGFzaykgPT4ge3Rhc2tzLnB1c2godGFzayl9O1xuXG4gICAgY29uc3QgcmVtb3ZlVGFzayA9IChpbmRleCkgPT4ge3Rhc2tzLnNwbGljZShpbmRleCwgMSl9O1xuICAgIFxuICAgIHJldHVybiB7XG4gICAgICAgIHNldCB0aXRsZSh2YWx1ZSkge3RpdGxlID0gdmFsdWV9LFxuICAgICAgICBnZXQgdGl0bGUoKSB7cmV0dXJuIHRpdGxlfSxcbiAgICAgICAgZ2V0IHRhc2tzKCkge3JldHVybiB0YXNrc30sXG4gICAgICAgIGFkZFRhc2ssXG4gICAgICAgIHJlbW92ZVRhc2ssXG4gICAgfTtcbn07XG5cbmV4cG9ydCBjb25zdCBwcm9qZWN0TWFuYWdlciA9ICgpID0+IHtcbiAgICBjb25zdCBwcm9qZWN0cyA9IFtdO1xuXG4gICAgcmV0dXJuIHtnZXQgcHJvamVjdHMoKSB7cmV0dXJuIHByb2plY3RzfSxcbn1cbn07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgeyB0YXNrLCBwcm9qZWN0LCBwcm9qZWN0TWFuYWdlciB9IGZyb20gXCIuL3RvRG8uanNcIjtcbmltcG9ydCB7IHN0b3JhZ2VNYW5hZ2VyIH0gZnJvbSBcIi4vc3RvcmFnZU1hbmFnZXIuanNcIjtcblxuY29uc3Qgc3RvcmFnZSA9IHN0b3JhZ2VNYW5hZ2VyKCk7XG5jb25zdCBwcm9qZWN0TWdyID0gcHJvamVjdE1hbmFnZXIoKTtcblxuY29uc3QgaW5pdFByb2plY3RzID0gZnVuY3Rpb24gKCl7XG4gICAgY29uc3QgaXRlbXMgPSBzdG9yYWdlLmdldFByb2plY3RzKCk7XG5cbiAgICBjb25zdCBjcmVhdGVEZWZhdWx0UHJvamVjdCA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgZGVmYXVsdFRhc2sgPSB0YXNrKCdUYXNrIDEnLCAnRGVzY3JpcHRpb24nLCAnUHJpb3JpdHknLCAnRHVlIERhdGUnKTtcbiAgICAgICAgY29uc3QgZGVmYXVsdFByb2plY3QgPSBwcm9qZWN0KCdQcm9qZWN0IDEnKTtcbiAgICAgICAgZGVmYXVsdFByb2plY3QuYWRkVGFzayhkZWZhdWx0VGFzayk7XG4gICAgICAgIHJldHVybiBkZWZhdWx0UHJvamVjdDtcbiAgICB9O1xuXG4gICAgaWYgKGl0ZW1zID09PSBudWxsKSB7XG4gICAgICAgIHByb2plY3RNZ3IucHJvamVjdHMucHVzaChjcmVhdGVEZWZhdWx0UHJvamVjdCgpKTtcbiAgICAgICAgc3RvcmFnZS53cml0ZVByb2plY3RzKHByb2plY3RNZ3IucHJvamVjdHMpO1xuICAgIH07XG5cbiAgICBjb25zdCByZWNyZWF0ZUJlaGF2aW91ciA9IGZ1bmN0aW9uKCkge1xuICAgICAgICBmb3IgKGxldCBwcm9qIG9mIGl0ZW1zKSB7XG4gICAgICAgICAgICBjb25zdCBuZXdQcm9qZWN0ID0gcHJvamVjdChwcm9qLnRpdGxlKTtcbiAgICAgICAgICAgIGZvciAobGV0IG9sZFRhc2sgb2YgcHJvai50YXNrcykge1xuICAgICAgICAgICAgICAgIGNvbnN0IG5ld1Rhc2sgPSB0YXNrKG9sZFRhc2sudGl0bGUsIG9sZFRhc2suZGVzY3JpcHRpb24sIG9sZFRhc2sucHJpb3JpdHksIG9sZFRhc2suZHVlRGF0ZSk7XG4gICAgICAgICAgICAgICAgbmV3UHJvamVjdC5hZGRUYXNrKG5ld1Rhc2spO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHByb2plY3RNZ3IucHJvamVjdHMucHVzaChuZXdQcm9qZWN0KTtcbiAgICAgICAgfTtcbiAgICB9KCk7XG5cbiAgICBjb25zb2xlLmxvZyhwcm9qZWN0TWdyLnByb2plY3RzWzBdLnRhc2tzWzBdLmR1ZURhdGUpXG59KCk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9