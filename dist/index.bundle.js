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
/* harmony export */   "DOMCreateProject": () => (/* binding */ DOMCreateProject)
/* harmony export */ });
function DOMCreateProject(project, index, node) {
    const ele = document.createElement('span');
    ele.textContent = project.title;
    ele.dataset.projectIndex = index;
    node.appendChild(ele)
};

/***/ }),

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
/* harmony import */ var _dom_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dom.js */ "./src/dom.js");




const storageMgr = (0,_storageManager_js__WEBPACK_IMPORTED_MODULE_1__.storageManager)();
const projectMgr = (0,_toDo_js__WEBPACK_IMPORTED_MODULE_0__.projectManager)();

const initProjects = function (){
    const items = storageMgr.getProjects();

    const createDefaultProject = () => {
        const defaultTask = (0,_toDo_js__WEBPACK_IMPORTED_MODULE_0__.task)('Task 1', 'Description', 'Priority', 'Due Date');
        const defaultProject = (0,_toDo_js__WEBPACK_IMPORTED_MODULE_0__.project)('Project 1');
        defaultProject.addTask(defaultTask);
        return defaultProject;
    };

    if (items === null) {
        projectMgr.projects.push(createDefaultProject());
        storageMgr.writeProjects(projectMgr.projects);
    };

    const recreateBehaviour = function() {
        for (let proj of items) {
            const newProject = (0,_toDo_js__WEBPACK_IMPORTED_MODULE_0__.project)(proj.title);
            for (let oldTask of proj.tasks) {
                const newTask = (0,_toDo_js__WEBPACK_IMPORTED_MODULE_0__.task)(oldTask.title, oldTask.description, oldTask.priority, oldTask.dueDate);
                newProject.addTask(newTask);
            };
            projectMgr.projects.push(newProject);
            (0,_dom_js__WEBPACK_IMPORTED_MODULE_2__.DOMCreateProject)(newProject,
                projectMgr.projects.indexOf(newProject),
                document.querySelector('#project-container'));
        };
    }();
}();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ0xPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxZQUFZO0FBQ1o7Ozs7Ozs7Ozs7Ozs7Ozs7QUNmTzs7QUFFUDtBQUNBLDBCQUEwQixjQUFjO0FBQ3hDLHFCQUFxQixhQUFhOztBQUVsQyxnQ0FBZ0Msb0JBQW9CO0FBQ3BELDJCQUEyQixtQkFBbUI7O0FBRTlDLDRCQUE0QixnQkFBZ0I7QUFDNUMsdUJBQXVCLGVBQWU7O0FBRXRDLDZCQUE2QixpQkFBaUI7QUFDOUMsd0JBQXdCLGdCQUFnQjtBQUN4QztBQUNBOztBQUVPO0FBQ1A7O0FBRUEsK0JBQStCOztBQUUvQixtQ0FBbUM7QUFDbkM7QUFDQTtBQUNBLDBCQUEwQixjQUFjO0FBQ3hDLHFCQUFxQixhQUFhO0FBQ2xDLHFCQUFxQixhQUFhO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBOztBQUVPO0FBQ1A7O0FBRUEsWUFBWSxnQkFBZ0IsZ0JBQWdCO0FBQzVDO0FBQ0E7Ozs7OztVQ3RDQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7QUNOMEQ7QUFDTDtBQUNUOztBQUU1QyxtQkFBbUIsa0VBQWM7QUFDakMsbUJBQW1CLHdEQUFjOztBQUVqQztBQUNBOztBQUVBO0FBQ0EsNEJBQTRCLDhDQUFJO0FBQ2hDLCtCQUErQixpREFBTztBQUN0QztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLCtCQUErQixpREFBTztBQUN0QztBQUNBLGdDQUFnQyw4Q0FBSTtBQUNwQztBQUNBO0FBQ0E7QUFDQSxZQUFZLHlEQUFnQjtBQUM1QjtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsQ0FBQyxHIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9kb20uanMiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9zdG9yYWdlTWFuYWdlci5qcyIsIndlYnBhY2s6Ly90b2RvLy4vc3JjL3RvRG8uanMiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8vLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGZ1bmN0aW9uIERPTUNyZWF0ZVByb2plY3QocHJvamVjdCwgaW5kZXgsIG5vZGUpIHtcbiAgICBjb25zdCBlbGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgZWxlLnRleHRDb250ZW50ID0gcHJvamVjdC50aXRsZTtcbiAgICBlbGUuZGF0YXNldC5wcm9qZWN0SW5kZXggPSBpbmRleDtcbiAgICBub2RlLmFwcGVuZENoaWxkKGVsZSlcbn07IiwiZXhwb3J0IGNvbnN0IHN0b3JhZ2VNYW5hZ2VyID0gKCkgPT4ge1xuICAgIGNvbnN0IGdldFByb2plY3RzID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBwcm9qZWN0cyA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwicHJvamVjdHNcIik7XG4gICAgICAgIGlmIChwcm9qZWN0cyA9PT0gbnVsbCkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gSlNPTi5wYXJzZShwcm9qZWN0cyk7XG4gICAgICAgIH07XG4gICAgfTtcblxuICAgIGNvbnN0IHdyaXRlUHJvamVjdHMgPSAocHJvamVjdHMpID0+IHtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Byb2plY3RzJywgSlNPTi5zdHJpbmdpZnkocHJvamVjdHMpKVxuICAgIH07XG5cbiAgICByZXR1cm4ge2dldFByb2plY3RzLCB3cml0ZVByb2plY3RzfVxufTsiLCJleHBvcnQgY29uc3QgdGFzayA9ICh0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5KSA9PiB7XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBzZXQgdGl0bGUodmFsdWUpIHt0aXRsZSA9IHZhbHVlfSxcbiAgICAgICAgZ2V0IHRpdGxlKCkge3JldHVybiB0aXRsZX0sXG5cbiAgICAgICAgc2V0IGRlc2NyaXB0aW9uKHZhbHVlKSB7ZGVzY3JpcHRpb24gPSB2YWx1ZX0sXG4gICAgICAgIGdldCBkZXNjcmlwdGlvbigpIHtyZXR1cm4gZGVzY3JpcHRpb259LFxuXG4gICAgICAgIHNldCBkdWVEYXRlKHZhbHVlKSB7ZHVlRGF0ZSA9IHZhbHVlfSxcbiAgICAgICAgZ2V0IGR1ZURhdGUoKSB7cmV0dXJuIGR1ZURhdGV9LFxuXG4gICAgICAgIHNldCBwcmlvcml0eSh2YWx1ZSkge3ByaW9yaXR5ID0gdmFsdWV9LFxuICAgICAgICBnZXQgcHJpb3JpdHkoKSB7cmV0dXJuIHByaW9yaXR5fSxcbiAgICB9O1xufTtcblxuZXhwb3J0IGNvbnN0IHByb2plY3QgPSAodGl0bGUpID0+IHtcbiAgICBjb25zdCB0YXNrcyA9IFtdO1xuXG4gICAgY29uc3QgYWRkVGFzayA9ICh0YXNrKSA9PiB7dGFza3MucHVzaCh0YXNrKX07XG5cbiAgICBjb25zdCByZW1vdmVUYXNrID0gKGluZGV4KSA9PiB7dGFza3Muc3BsaWNlKGluZGV4LCAxKX07XG4gICAgXG4gICAgcmV0dXJuIHtcbiAgICAgICAgc2V0IHRpdGxlKHZhbHVlKSB7dGl0bGUgPSB2YWx1ZX0sXG4gICAgICAgIGdldCB0aXRsZSgpIHtyZXR1cm4gdGl0bGV9LFxuICAgICAgICBnZXQgdGFza3MoKSB7cmV0dXJuIHRhc2tzfSxcbiAgICAgICAgYWRkVGFzayxcbiAgICAgICAgcmVtb3ZlVGFzayxcbiAgICB9O1xufTtcblxuZXhwb3J0IGNvbnN0IHByb2plY3RNYW5hZ2VyID0gKCkgPT4ge1xuICAgIGNvbnN0IHByb2plY3RzID0gW107XG5cbiAgICByZXR1cm4ge2dldCBwcm9qZWN0cygpIHtyZXR1cm4gcHJvamVjdHN9LFxufVxufTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7IHRhc2ssIHByb2plY3QsIHByb2plY3RNYW5hZ2VyIH0gZnJvbSBcIi4vdG9Eby5qc1wiO1xuaW1wb3J0IHsgc3RvcmFnZU1hbmFnZXIgfSBmcm9tIFwiLi9zdG9yYWdlTWFuYWdlci5qc1wiO1xuaW1wb3J0IHsgRE9NQ3JlYXRlUHJvamVjdCB9IGZyb20gXCIuL2RvbS5qc1wiO1xuXG5jb25zdCBzdG9yYWdlTWdyID0gc3RvcmFnZU1hbmFnZXIoKTtcbmNvbnN0IHByb2plY3RNZ3IgPSBwcm9qZWN0TWFuYWdlcigpO1xuXG5jb25zdCBpbml0UHJvamVjdHMgPSBmdW5jdGlvbiAoKXtcbiAgICBjb25zdCBpdGVtcyA9IHN0b3JhZ2VNZ3IuZ2V0UHJvamVjdHMoKTtcblxuICAgIGNvbnN0IGNyZWF0ZURlZmF1bHRQcm9qZWN0ID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBkZWZhdWx0VGFzayA9IHRhc2soJ1Rhc2sgMScsICdEZXNjcmlwdGlvbicsICdQcmlvcml0eScsICdEdWUgRGF0ZScpO1xuICAgICAgICBjb25zdCBkZWZhdWx0UHJvamVjdCA9IHByb2plY3QoJ1Byb2plY3QgMScpO1xuICAgICAgICBkZWZhdWx0UHJvamVjdC5hZGRUYXNrKGRlZmF1bHRUYXNrKTtcbiAgICAgICAgcmV0dXJuIGRlZmF1bHRQcm9qZWN0O1xuICAgIH07XG5cbiAgICBpZiAoaXRlbXMgPT09IG51bGwpIHtcbiAgICAgICAgcHJvamVjdE1nci5wcm9qZWN0cy5wdXNoKGNyZWF0ZURlZmF1bHRQcm9qZWN0KCkpO1xuICAgICAgICBzdG9yYWdlTWdyLndyaXRlUHJvamVjdHMocHJvamVjdE1nci5wcm9qZWN0cyk7XG4gICAgfTtcblxuICAgIGNvbnN0IHJlY3JlYXRlQmVoYXZpb3VyID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIGZvciAobGV0IHByb2ogb2YgaXRlbXMpIHtcbiAgICAgICAgICAgIGNvbnN0IG5ld1Byb2plY3QgPSBwcm9qZWN0KHByb2oudGl0bGUpO1xuICAgICAgICAgICAgZm9yIChsZXQgb2xkVGFzayBvZiBwcm9qLnRhc2tzKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgbmV3VGFzayA9IHRhc2sob2xkVGFzay50aXRsZSwgb2xkVGFzay5kZXNjcmlwdGlvbiwgb2xkVGFzay5wcmlvcml0eSwgb2xkVGFzay5kdWVEYXRlKTtcbiAgICAgICAgICAgICAgICBuZXdQcm9qZWN0LmFkZFRhc2sobmV3VGFzayk7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgcHJvamVjdE1nci5wcm9qZWN0cy5wdXNoKG5ld1Byb2plY3QpO1xuICAgICAgICAgICAgRE9NQ3JlYXRlUHJvamVjdChuZXdQcm9qZWN0LFxuICAgICAgICAgICAgICAgIHByb2plY3RNZ3IucHJvamVjdHMuaW5kZXhPZihuZXdQcm9qZWN0KSxcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJvamVjdC1jb250YWluZXInKSk7XG4gICAgICAgIH07XG4gICAgfSgpO1xufSgpOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==