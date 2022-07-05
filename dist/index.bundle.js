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
    
    const taskContainer = document.createElement('div');
    taskContainer.classList.add('task-container');
    taskContainer.dataset.projectId = projectId;
    document.querySelector('#tasksContainer').append(taskContainer)
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
const task = (title, description, dueDate, priority, taskId) => {

    return {
        set title(value) {title = value},
        get title() {return title},

        set description(value) {description = value},
        get description() {return description},

        set dueDate(value) {dueDate = value},
        get dueDate() {return dueDate},

        set priority(value) {priority = value},
        get priority() {return priority},

        get getTaskId() {return taskId}
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
    const formData = [form.taskTitle.value, form.taskDesc.value, form.taskDueDate.value, form.taskPriority];
    const newTask = (0,_toDo_js__WEBPACK_IMPORTED_MODULE_0__.task)(...formData, project.generateTaskId);
    project.addTask(newTask);
    (0,_dom_js__WEBPACK_IMPORTED_MODULE_2__.displayTaskOnPage)(newTask, project.getProjectId);
}
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFTzs7QUFFUDs7Ozs7Ozs7Ozs7Ozs7QUNmTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ2xCTzs7QUFFUDtBQUNBLDBCQUEwQixjQUFjO0FBQ3hDLHFCQUFxQixhQUFhOztBQUVsQyxnQ0FBZ0Msb0JBQW9CO0FBQ3BELDJCQUEyQixtQkFBbUI7O0FBRTlDLDRCQUE0QixnQkFBZ0I7QUFDNUMsdUJBQXVCLGVBQWU7O0FBRXRDLDZCQUE2QixpQkFBaUI7QUFDOUMsd0JBQXdCLGdCQUFnQjs7QUFFeEMseUJBQXlCO0FBQ3pCO0FBQ0E7O0FBRU87QUFDUDtBQUNBOztBQUVBLCtCQUErQjtBQUMvQjtBQUNBO0FBQ0EsMEJBQTBCLGNBQWM7QUFDeEMscUJBQXFCLGFBQWE7QUFDbEMscUJBQXFCLGFBQWE7QUFDbEMsNEJBQTRCLHVCQUF1QjtBQUNuRDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBOztBQUVPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsQ0FBQzs7Ozs7O1VDeEREO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7OztBQ04wRDtBQUNaO0FBQ3FCOzs7QUFHbkU7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0EsdUJBQXVCLGlEQUFPLFFBQVEsc0VBQWdDO0FBQ3RFLElBQUksK0RBQXlCO0FBQzdCLElBQUksNkRBQW9CO0FBQ3hCO0FBQ0E7O0FBRUE7QUFDQSx5RUFBeUUsVUFBVTtBQUNuRjtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQix3RUFBa0M7QUFDdEQ7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQSxvQkFBb0IsOENBQUk7QUFDeEI7QUFDQSxJQUFJLDBEQUFpQjtBQUNyQixDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9kb20uanMiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9zdG9yYWdlLmpzIiwid2VicGFjazovL3RvZG8vLi9zcmMvdG9Eby5qcyIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG8vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZnVuY3Rpb24gZGlzcGxheVByb2plY3RPblBhZ2UocHJvamVjdCwgcHJvamVjdElkKSB7XG4gICAgY29uc3QgaGVhZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XG4gICAgaGVhZGluZy50ZXh0Q29udGVudCA9IHByb2plY3QudGl0bGU7XG4gICAgaGVhZGluZy5kYXRhc2V0LnByb2plY3RJZCA9IHByb2plY3RJZDtcbiAgICBoZWFkaW5nLmlkID0gXCJwcm9qZWN0SGVhZGluZ1wiO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcm9qZWN0LWNvbnRhaW5lcicpLmFwcGVuZChoZWFkaW5nKTtcbiAgICBcbiAgICBjb25zdCB0YXNrQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdGFza0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCd0YXNrLWNvbnRhaW5lcicpO1xuICAgIHRhc2tDb250YWluZXIuZGF0YXNldC5wcm9qZWN0SWQgPSBwcm9qZWN0SWQ7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Rhc2tzQ29udGFpbmVyJykuYXBwZW5kKHRhc2tDb250YWluZXIpXG59O1xuXG5leHBvcnQgZnVuY3Rpb24gZGlzcGxheVRhc2tPblBhZ2UodGFzaywgdGFza0lkLCBwcm9qZWN0SWQpIHtcblxufTsiLCJleHBvcnQgY29uc3Qgc3RvcmFnZU1hbmFnZXIgPSAoKSA9PiB7XG4gICAgY29uc3QgZ2V0RGF0YSA9IChrZXkpID0+IHtcbiAgICAgICAgY29uc3QgZGF0YSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKGtleSk7XG4gICAgICAgIGlmIChwcm9qZWN0cyA9PT0gbnVsbCkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gSlNPTi5wYXJzZShkYXRhKTtcbiAgICAgICAgfTtcbiAgICB9O1xuXG4gICAgY29uc3Qgc2F2ZURhdGEgPSAoa2V5LCBkYXRhKSA9PiB7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKGtleSwgSlNPTi5zdHJpbmdpZnkoZGF0YSkpXG4gICAgfTtcblxuICAgIHJldHVybiB7XG4gICAgICAgIGdldERhdGEsXG4gICAgICAgIHNhdmVEYXRhLFxuICAgIH07XG59OyIsImV4cG9ydCBjb25zdCB0YXNrID0gKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHksIHRhc2tJZCkgPT4ge1xuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgc2V0IHRpdGxlKHZhbHVlKSB7dGl0bGUgPSB2YWx1ZX0sXG4gICAgICAgIGdldCB0aXRsZSgpIHtyZXR1cm4gdGl0bGV9LFxuXG4gICAgICAgIHNldCBkZXNjcmlwdGlvbih2YWx1ZSkge2Rlc2NyaXB0aW9uID0gdmFsdWV9LFxuICAgICAgICBnZXQgZGVzY3JpcHRpb24oKSB7cmV0dXJuIGRlc2NyaXB0aW9ufSxcblxuICAgICAgICBzZXQgZHVlRGF0ZSh2YWx1ZSkge2R1ZURhdGUgPSB2YWx1ZX0sXG4gICAgICAgIGdldCBkdWVEYXRlKCkge3JldHVybiBkdWVEYXRlfSxcblxuICAgICAgICBzZXQgcHJpb3JpdHkodmFsdWUpIHtwcmlvcml0eSA9IHZhbHVlfSxcbiAgICAgICAgZ2V0IHByaW9yaXR5KCkge3JldHVybiBwcmlvcml0eX0sXG5cbiAgICAgICAgZ2V0IGdldFRhc2tJZCgpIHtyZXR1cm4gdGFza0lkfVxuICAgIH07XG59O1xuXG5leHBvcnQgY29uc3QgcHJvamVjdCA9ICh0aXRsZSwgdW5pcXVlUHJvamVjdElkKSA9PiB7XG4gICAgY29uc3QgdGFza3MgPSBbXTtcbiAgICBsZXQgdW5pcXVlVGFza0lkID0gMDtcblxuICAgIGNvbnN0IGFkZFRhc2sgPSAodGFzaykgPT4ge3Rhc2tzLnB1c2godGFzayl9O1xuICAgIFxuICAgIHJldHVybiB7XG4gICAgICAgIHNldCB0aXRsZSh2YWx1ZSkge3RpdGxlID0gdmFsdWV9LFxuICAgICAgICBnZXQgdGl0bGUoKSB7cmV0dXJuIHRpdGxlfSxcbiAgICAgICAgZ2V0IHRhc2tzKCkge3JldHVybiB0YXNrc30sXG4gICAgICAgIGdldCBnZXRQcm9qZWN0SWQoKSB7cmV0dXJuIHVuaXF1ZVByb2plY3RJZH0sXG4gICAgICAgIGdldCBnZW5lcmF0ZVRhc2tJZCgpIHtcbiAgICAgICAgICAgIHVuaXF1ZVRhc2tJZCsrO1xuICAgICAgICAgICAgcmV0dXJuIHVuaXF1ZVRhc2tJZDtcbiAgICAgICAgfSxcbiAgICAgICAgYWRkVGFzayxcbiAgICB9O1xufTtcblxuZXhwb3J0IGNvbnN0IHByb2plY3RNYW5hZ2VyID0gZnVuY3Rpb24gKCkge1xuICAgIGxldCB1bmlxdWVQcm9qZWN0SWQgPSAwO1xuICAgIGNvbnN0IHByb2plY3RMaXN0ID0gW107XG5cbiAgICBjb25zdCBhZGRQcm9qZWN0ID0gKHByb2plY3QpID0+IHtcbiAgICAgICAgcHJvamVjdExpc3QucHVzaChwcm9qZWN0KTtcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBnZXQgZ2VuZXJhdGVQcm9qZWN0SWQoKSB7XG4gICAgICAgICAgICB1bmlxdWVQcm9qZWN0SWQrKztcbiAgICAgICAgICAgIHJldHVybiB1bmlxdWVQcm9qZWN0SWQ7XG4gICAgICAgIH0sXG4gICAgICAgIGdldCBnZXRQcm9qZWN0TGlzdCgpIHtcbiAgICAgICAgICAgIHJldHVybiBwcm9qZWN0TGlzdDtcbiAgICAgICAgfSxcbiAgICAgICAgYWRkUHJvamVjdFxuICAgIH07XG59KCk7IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgeyB0YXNrLCBwcm9qZWN0LCBwcm9qZWN0TWFuYWdlciB9IGZyb20gXCIuL3RvRG8uanNcIjtcbmltcG9ydCB7IHN0b3JhZ2VNYW5hZ2VyIH0gZnJvbSBcIi4vc3RvcmFnZS5qc1wiO1xuaW1wb3J0IHsgZGlzcGxheVByb2plY3RPblBhZ2UsIGRpc3BsYXlUYXNrT25QYWdlIH0gZnJvbSBcIi4vZG9tLmpzXCI7XG5cblxubGV0IHNlbGVjdGVkUHJvamVjdCA9IDA7XG5cbmNvbnN0IGNyZWF0ZVByb2plY3RCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY3JlYXRlUHJvamVjdEJ0bicpO1xuY3JlYXRlUHJvamVjdEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBjb25zdCBmb3JtID0gZG9jdW1lbnQuZm9ybXMuY3JlYXRlUHJvamVjdEZvcm07XG4gICAgY3JlYXRlTmV3UHJvamVjdChmb3JtLnByb2plY3RUaXRsZS52YWx1ZSk7XG59KTtcblxuZnVuY3Rpb24gY3JlYXRlTmV3UHJvamVjdCh0aXRsZSkge1xuICAgIGNvbnN0IG5ld1Byb2plY3QgPSBwcm9qZWN0KHRpdGxlLCBwcm9qZWN0TWFuYWdlci5nZW5lcmF0ZVByb2plY3RJZCk7XG4gICAgcHJvamVjdE1hbmFnZXIuYWRkUHJvamVjdChuZXdQcm9qZWN0KTtcbiAgICBkaXNwbGF5UHJvamVjdE9uUGFnZShuZXdQcm9qZWN0LCBuZXdQcm9qZWN0LmdldFByb2plY3RJZCk7XG4gICAgYWRkTGlzdGVuZXJUb1Byb2plY3RIZWFkaW5nKG5ld1Byb2plY3QuZ2V0UHJvamVjdElkKTtcbn07XG5cbmZ1bmN0aW9uIGFkZExpc3RlbmVyVG9Qcm9qZWN0SGVhZGluZyhkYXRhc2V0SWQpIHtcbiAgICBjb25zdCBwcm9qZWN0SGVhZGluZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYGgzW2RhdGEtcHJvamVjdC1pZD1cIiR7ZGF0YXNldElkfVwiXWApO1xuICAgIHByb2plY3RIZWFkaW5nLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgc2VsZWN0ZWRQcm9qZWN0ID0gZS50YXJnZXQuZ2V0QXR0cmlidXRlKFwiZGF0YS1wcm9qZWN0LWlkXCIpO1xuICAgIH0pO1xufVxuXG5jb25zdCBjcmVhdGVUYXNrQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NyZWF0ZVRhc2tCdG4nKTtcbmNyZWF0ZVRhc2tCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgY29uc3QgZm9ybSA9IGRvY3VtZW50LmZvcm1zLmNyZWF0ZVRhc2tGb3JtO1xuICAgIGNvbnN0IHByb2plY3QgPSBwcm9qZWN0TWFuYWdlci5nZXRQcm9qZWN0TGlzdC5maW5kKHByb2ogPT4gcHJvai5nZXRQcm9qZWN0SWQgPT09IHBhcnNlSW50KHNlbGVjdGVkUHJvamVjdCkpXG4gICAgY3JlYXRlTmV3VGFzayhmb3JtLCBwcm9qZWN0KTtcbn0pO1xuXG5mdW5jdGlvbiBjcmVhdGVOZXdUYXNrKGZvcm0sIHByb2plY3QpIHtcbiAgICBjb25zdCBmb3JtRGF0YSA9IFtmb3JtLnRhc2tUaXRsZS52YWx1ZSwgZm9ybS50YXNrRGVzYy52YWx1ZSwgZm9ybS50YXNrRHVlRGF0ZS52YWx1ZSwgZm9ybS50YXNrUHJpb3JpdHldO1xuICAgIGNvbnN0IG5ld1Rhc2sgPSB0YXNrKC4uLmZvcm1EYXRhLCBwcm9qZWN0LmdlbmVyYXRlVGFza0lkKTtcbiAgICBwcm9qZWN0LmFkZFRhc2sobmV3VGFzayk7XG4gICAgZGlzcGxheVRhc2tPblBhZ2UobmV3VGFzaywgcHJvamVjdC5nZXRQcm9qZWN0SWQpO1xufSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==