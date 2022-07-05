/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/dom.js":
/*!********************!*\
  !*** ./src/dom.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "displayProjectOnPage": () => (/* binding */ displayProjectOnPage),
/* harmony export */   "displayTaskOnPage": () => (/* binding */ displayTaskOnPage)
/* harmony export */ });
function displayProjectOnPage(project, projectId) {
    const heading = document.createElement('h3');
    heading.textContent = project.title;
    heading.dataset.projectId = projectId;
    heading.id = "projectHeading";
    document.querySelector('#project-container').append(heading);
};

function displayTaskOnPage(task, taskId, projectId) {

};

/***/ }),

/***/ "./src/storage.js":
/*!************************!*\
  !*** ./src/storage.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "storageManager": () => (/* binding */ storageManager)
/* harmony export */ });
const storageManager = () => {
    const getData = (key) => {
        const data = localStorage.getItem(key);
        if (projects === null) {
            return null;
        } else {
            return JSON.parse(data);
        };
    };

    const saveData = (key, data) => {
        localStorage.setItem(key, JSON.stringify(data))
    };

    return {
        getData,
        saveData,
    };
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

const project = (title, uniqueProjectId) => {
    const tasks = [];
    let uniqueTaskId = 0;

    const addTask = (task) => {tasks.push(task)};
    
    return {
        set title(value) {title = value},
        get title() {return title},
        get tasks() {return tasks},
        get getProjectId() {return uniqueProjectId},
        get generateTaskId() {
            uniqueTaskId++;
            return uniqueTaskId;
        },
        addTask,
    };
};

const projectManager = function () {
    let uniqueProjectId = 0;
    const projectList = [];

    const addProject = (project) => {
        projectList.push(project);
    }

    return {
        get generateProjectId() {
            uniqueProjectId++;
            return uniqueProjectId;
        },
        get getProjectList() {
            return projectList;
        },
        addProject
    };
}();

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
/* harmony import */ var _storage_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./storage.js */ "./src/storage.js");
/* harmony import */ var _dom_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dom.js */ "./src/dom.js");





let selectedProject = 0;

const createProjectBtn = document.querySelector('#createProjectBtn');
createProjectBtn.addEventListener('click', () => {
    const form = document.forms.createProjectForm;
    createNewProject(form.projectTitle.value);
});

function createNewProject(title) {
    const newProject = (0,_toDo_js__WEBPACK_IMPORTED_MODULE_0__.project)(title, _toDo_js__WEBPACK_IMPORTED_MODULE_0__.projectManager.generateProjectId);
    _toDo_js__WEBPACK_IMPORTED_MODULE_0__.projectManager.addProject(newProject);
    (0,_dom_js__WEBPACK_IMPORTED_MODULE_2__.displayProjectOnPage)(newProject, newProject.getProjectId);
    addListenerToProjectHeading(newProject.getProjectId);
};

function addListenerToProjectHeading(datasetId) {
    const projectHeading = document.querySelector(`h3[data-project-id="${datasetId}"]`);
    projectHeading.addEventListener('click', (e) => {
        selectedProject = e.target.getAttribute("data-project-id");
    });
}

const createTaskBtn = document.querySelector('#createTaskBtn');
createTaskBtn.addEventListener('click', () => {
    const form = document.forms.createTaskForm;
    const project = _toDo_js__WEBPACK_IMPORTED_MODULE_0__.projectManager.getProjectList.find(proj => proj.getProjectId === parseInt(selectedProject))
    createNewTask(form, project);
});

function createNewTask(form, project) {
    const formData = [form.taskTitle.value, form.taskDesc.value, form.taskDueDate.value, form.taskPriority]
    const newTask = (0,_toDo_js__WEBPACK_IMPORTED_MODULE_0__.task)(...formData, project.generateTaskId);
}
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVPOztBQUVQOzs7Ozs7Ozs7Ozs7OztBQ1ZPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDbEJPOztBQUVQO0FBQ0EsMEJBQTBCLGNBQWM7QUFDeEMscUJBQXFCLGFBQWE7O0FBRWxDLGdDQUFnQyxvQkFBb0I7QUFDcEQsMkJBQTJCLG1CQUFtQjs7QUFFOUMsNEJBQTRCLGdCQUFnQjtBQUM1Qyx1QkFBdUIsZUFBZTs7QUFFdEMsNkJBQTZCLGlCQUFpQjtBQUM5Qyx3QkFBd0IsZ0JBQWdCO0FBQ3hDO0FBQ0E7O0FBRU87QUFDUDtBQUNBOztBQUVBLCtCQUErQjtBQUMvQjtBQUNBO0FBQ0EsMEJBQTBCLGNBQWM7QUFDeEMscUJBQXFCLGFBQWE7QUFDbEMscUJBQXFCLGFBQWE7QUFDbEMsNEJBQTRCLHVCQUF1QjtBQUNuRDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBOztBQUVPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsQ0FBQzs7Ozs7O1VDdEREO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7OztBQ04wRDtBQUNaO0FBQ0U7OztBQUdoRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQSx1QkFBdUIsaURBQU8sUUFBUSxzRUFBZ0M7QUFDdEUsSUFBSSwrREFBeUI7QUFDN0IsSUFBSSw2REFBb0I7QUFDeEI7QUFDQTs7QUFFQTtBQUNBLHlFQUF5RSxVQUFVO0FBQ25GO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLHdFQUFrQztBQUN0RDtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBLG9CQUFvQiw4Q0FBSTtBQUN4QixDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9kb20uanMiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9zdG9yYWdlLmpzIiwid2VicGFjazovL3RvZG8vLi9zcmMvdG9Eby5qcyIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG8vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZnVuY3Rpb24gZGlzcGxheVByb2plY3RPblBhZ2UocHJvamVjdCwgcHJvamVjdElkKSB7XG4gICAgY29uc3QgaGVhZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XG4gICAgaGVhZGluZy50ZXh0Q29udGVudCA9IHByb2plY3QudGl0bGU7XG4gICAgaGVhZGluZy5kYXRhc2V0LnByb2plY3RJZCA9IHByb2plY3RJZDtcbiAgICBoZWFkaW5nLmlkID0gXCJwcm9qZWN0SGVhZGluZ1wiO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcm9qZWN0LWNvbnRhaW5lcicpLmFwcGVuZChoZWFkaW5nKTtcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBkaXNwbGF5VGFza09uUGFnZSh0YXNrLCB0YXNrSWQsIHByb2plY3RJZCkge1xuXG59OyIsImV4cG9ydCBjb25zdCBzdG9yYWdlTWFuYWdlciA9ICgpID0+IHtcbiAgICBjb25zdCBnZXREYXRhID0gKGtleSkgPT4ge1xuICAgICAgICBjb25zdCBkYXRhID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oa2V5KTtcbiAgICAgICAgaWYgKHByb2plY3RzID09PSBudWxsKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBKU09OLnBhcnNlKGRhdGEpO1xuICAgICAgICB9O1xuICAgIH07XG5cbiAgICBjb25zdCBzYXZlRGF0YSA9IChrZXksIGRhdGEpID0+IHtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oa2V5LCBKU09OLnN0cmluZ2lmeShkYXRhKSlcbiAgICB9O1xuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgZ2V0RGF0YSxcbiAgICAgICAgc2F2ZURhdGEsXG4gICAgfTtcbn07IiwiZXhwb3J0IGNvbnN0IHRhc2sgPSAodGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSkgPT4ge1xuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgc2V0IHRpdGxlKHZhbHVlKSB7dGl0bGUgPSB2YWx1ZX0sXG4gICAgICAgIGdldCB0aXRsZSgpIHtyZXR1cm4gdGl0bGV9LFxuXG4gICAgICAgIHNldCBkZXNjcmlwdGlvbih2YWx1ZSkge2Rlc2NyaXB0aW9uID0gdmFsdWV9LFxuICAgICAgICBnZXQgZGVzY3JpcHRpb24oKSB7cmV0dXJuIGRlc2NyaXB0aW9ufSxcblxuICAgICAgICBzZXQgZHVlRGF0ZSh2YWx1ZSkge2R1ZURhdGUgPSB2YWx1ZX0sXG4gICAgICAgIGdldCBkdWVEYXRlKCkge3JldHVybiBkdWVEYXRlfSxcblxuICAgICAgICBzZXQgcHJpb3JpdHkodmFsdWUpIHtwcmlvcml0eSA9IHZhbHVlfSxcbiAgICAgICAgZ2V0IHByaW9yaXR5KCkge3JldHVybiBwcmlvcml0eX0sXG4gICAgfTtcbn07XG5cbmV4cG9ydCBjb25zdCBwcm9qZWN0ID0gKHRpdGxlLCB1bmlxdWVQcm9qZWN0SWQpID0+IHtcbiAgICBjb25zdCB0YXNrcyA9IFtdO1xuICAgIGxldCB1bmlxdWVUYXNrSWQgPSAwO1xuXG4gICAgY29uc3QgYWRkVGFzayA9ICh0YXNrKSA9PiB7dGFza3MucHVzaCh0YXNrKX07XG4gICAgXG4gICAgcmV0dXJuIHtcbiAgICAgICAgc2V0IHRpdGxlKHZhbHVlKSB7dGl0bGUgPSB2YWx1ZX0sXG4gICAgICAgIGdldCB0aXRsZSgpIHtyZXR1cm4gdGl0bGV9LFxuICAgICAgICBnZXQgdGFza3MoKSB7cmV0dXJuIHRhc2tzfSxcbiAgICAgICAgZ2V0IGdldFByb2plY3RJZCgpIHtyZXR1cm4gdW5pcXVlUHJvamVjdElkfSxcbiAgICAgICAgZ2V0IGdlbmVyYXRlVGFza0lkKCkge1xuICAgICAgICAgICAgdW5pcXVlVGFza0lkKys7XG4gICAgICAgICAgICByZXR1cm4gdW5pcXVlVGFza0lkO1xuICAgICAgICB9LFxuICAgICAgICBhZGRUYXNrLFxuICAgIH07XG59O1xuXG5leHBvcnQgY29uc3QgcHJvamVjdE1hbmFnZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgbGV0IHVuaXF1ZVByb2plY3RJZCA9IDA7XG4gICAgY29uc3QgcHJvamVjdExpc3QgPSBbXTtcblxuICAgIGNvbnN0IGFkZFByb2plY3QgPSAocHJvamVjdCkgPT4ge1xuICAgICAgICBwcm9qZWN0TGlzdC5wdXNoKHByb2plY3QpO1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICAgIGdldCBnZW5lcmF0ZVByb2plY3RJZCgpIHtcbiAgICAgICAgICAgIHVuaXF1ZVByb2plY3RJZCsrO1xuICAgICAgICAgICAgcmV0dXJuIHVuaXF1ZVByb2plY3RJZDtcbiAgICAgICAgfSxcbiAgICAgICAgZ2V0IGdldFByb2plY3RMaXN0KCkge1xuICAgICAgICAgICAgcmV0dXJuIHByb2plY3RMaXN0O1xuICAgICAgICB9LFxuICAgICAgICBhZGRQcm9qZWN0XG4gICAgfTtcbn0oKTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7IHRhc2ssIHByb2plY3QsIHByb2plY3RNYW5hZ2VyIH0gZnJvbSBcIi4vdG9Eby5qc1wiO1xuaW1wb3J0IHsgc3RvcmFnZU1hbmFnZXIgfSBmcm9tIFwiLi9zdG9yYWdlLmpzXCI7XG5pbXBvcnQgeyBkaXNwbGF5UHJvamVjdE9uUGFnZSB9IGZyb20gXCIuL2RvbS5qc1wiO1xuXG5cbmxldCBzZWxlY3RlZFByb2plY3QgPSAwO1xuXG5jb25zdCBjcmVhdGVQcm9qZWN0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NyZWF0ZVByb2plY3RCdG4nKTtcbmNyZWF0ZVByb2plY3RCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgY29uc3QgZm9ybSA9IGRvY3VtZW50LmZvcm1zLmNyZWF0ZVByb2plY3RGb3JtO1xuICAgIGNyZWF0ZU5ld1Byb2plY3QoZm9ybS5wcm9qZWN0VGl0bGUudmFsdWUpO1xufSk7XG5cbmZ1bmN0aW9uIGNyZWF0ZU5ld1Byb2plY3QodGl0bGUpIHtcbiAgICBjb25zdCBuZXdQcm9qZWN0ID0gcHJvamVjdCh0aXRsZSwgcHJvamVjdE1hbmFnZXIuZ2VuZXJhdGVQcm9qZWN0SWQpO1xuICAgIHByb2plY3RNYW5hZ2VyLmFkZFByb2plY3QobmV3UHJvamVjdCk7XG4gICAgZGlzcGxheVByb2plY3RPblBhZ2UobmV3UHJvamVjdCwgbmV3UHJvamVjdC5nZXRQcm9qZWN0SWQpO1xuICAgIGFkZExpc3RlbmVyVG9Qcm9qZWN0SGVhZGluZyhuZXdQcm9qZWN0LmdldFByb2plY3RJZCk7XG59O1xuXG5mdW5jdGlvbiBhZGRMaXN0ZW5lclRvUHJvamVjdEhlYWRpbmcoZGF0YXNldElkKSB7XG4gICAgY29uc3QgcHJvamVjdEhlYWRpbmcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBoM1tkYXRhLXByb2plY3QtaWQ9XCIke2RhdGFzZXRJZH1cIl1gKTtcbiAgICBwcm9qZWN0SGVhZGluZy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgIHNlbGVjdGVkUHJvamVjdCA9IGUudGFyZ2V0LmdldEF0dHJpYnV0ZShcImRhdGEtcHJvamVjdC1pZFwiKTtcbiAgICB9KTtcbn1cblxuY29uc3QgY3JlYXRlVGFza0J0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjcmVhdGVUYXNrQnRuJyk7XG5jcmVhdGVUYXNrQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5mb3Jtcy5jcmVhdGVUYXNrRm9ybTtcbiAgICBjb25zdCBwcm9qZWN0ID0gcHJvamVjdE1hbmFnZXIuZ2V0UHJvamVjdExpc3QuZmluZChwcm9qID0+IHByb2ouZ2V0UHJvamVjdElkID09PSBwYXJzZUludChzZWxlY3RlZFByb2plY3QpKVxuICAgIGNyZWF0ZU5ld1Rhc2soZm9ybSwgcHJvamVjdCk7XG59KTtcblxuZnVuY3Rpb24gY3JlYXRlTmV3VGFzayhmb3JtLCBwcm9qZWN0KSB7XG4gICAgY29uc3QgZm9ybURhdGEgPSBbZm9ybS50YXNrVGl0bGUudmFsdWUsIGZvcm0udGFza0Rlc2MudmFsdWUsIGZvcm0udGFza0R1ZURhdGUudmFsdWUsIGZvcm0udGFza1ByaW9yaXR5XVxuICAgIGNvbnN0IG5ld1Rhc2sgPSB0YXNrKC4uLmZvcm1EYXRhLCBwcm9qZWN0LmdlbmVyYXRlVGFza0lkKTtcbn0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=