/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
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
/*!*********************!*\
  !*** ./src/toDo.js ***!
  \*********************/
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

const project = (title, uniqueProjectIdentifier) => {
    const tasks = [];
    let uniqueTaskIdentifier = 0;

    const addTask = (task) => {tasks.push(task)};
    
    return {
        set title(value) {title = value},
        get title() {return title},
        get tasks() {return tasks},
        get getProjectIdentifier() {return uniqueProjectIdentifier},
        get generateTaskIdentifier() {
            uniqueTaskIdentifier++;
            return uniqueTaskIdentifier;
        },
        addTask,
    };
};

const projectManager = function () {
    let uniqueProjectIdentifier = 0;
    const projectList = [];

    const addProject = (project) => {
        projectList.push(project);
    }

    return {
        get generateProjectIdentifier() {
            uniqueProjectIdentifier++;
            return uniqueProjectIdentifier;
        },
        get getProjectList() {
            return projectList;
        },
        addProject
    };
}();
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9Eby5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7VUFBQTtVQUNBOzs7OztXQ0RBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7OztBQ05POztBQUVQO0FBQ0EsMEJBQTBCLGNBQWM7QUFDeEMscUJBQXFCLGFBQWE7O0FBRWxDLGdDQUFnQyxvQkFBb0I7QUFDcEQsMkJBQTJCLG1CQUFtQjs7QUFFOUMsNEJBQTRCLGdCQUFnQjtBQUM1Qyx1QkFBdUIsZUFBZTs7QUFFdEMsNkJBQTZCLGlCQUFpQjtBQUM5Qyx3QkFBd0IsZ0JBQWdCO0FBQ3hDO0FBQ0E7O0FBRU87QUFDUDtBQUNBOztBQUVBLCtCQUErQjtBQUMvQjtBQUNBO0FBQ0EsMEJBQTBCLGNBQWM7QUFDeEMscUJBQXFCLGFBQWE7QUFDbEMscUJBQXFCLGFBQWE7QUFDbEMsb0NBQW9DLCtCQUErQjtBQUNuRTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBOztBQUVPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsQ0FBQyxHIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8vLi9zcmMvdG9Eby5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBUaGUgcmVxdWlyZSBzY29wZVxudmFyIF9fd2VicGFja19yZXF1aXJlX18gPSB7fTtcblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImV4cG9ydCBjb25zdCB0YXNrID0gKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHkpID0+IHtcblxuICAgIHJldHVybiB7XG4gICAgICAgIHNldCB0aXRsZSh2YWx1ZSkge3RpdGxlID0gdmFsdWV9LFxuICAgICAgICBnZXQgdGl0bGUoKSB7cmV0dXJuIHRpdGxlfSxcblxuICAgICAgICBzZXQgZGVzY3JpcHRpb24odmFsdWUpIHtkZXNjcmlwdGlvbiA9IHZhbHVlfSxcbiAgICAgICAgZ2V0IGRlc2NyaXB0aW9uKCkge3JldHVybiBkZXNjcmlwdGlvbn0sXG5cbiAgICAgICAgc2V0IGR1ZURhdGUodmFsdWUpIHtkdWVEYXRlID0gdmFsdWV9LFxuICAgICAgICBnZXQgZHVlRGF0ZSgpIHtyZXR1cm4gZHVlRGF0ZX0sXG5cbiAgICAgICAgc2V0IHByaW9yaXR5KHZhbHVlKSB7cHJpb3JpdHkgPSB2YWx1ZX0sXG4gICAgICAgIGdldCBwcmlvcml0eSgpIHtyZXR1cm4gcHJpb3JpdHl9LFxuICAgIH07XG59O1xuXG5leHBvcnQgY29uc3QgcHJvamVjdCA9ICh0aXRsZSwgdW5pcXVlUHJvamVjdElkZW50aWZpZXIpID0+IHtcbiAgICBjb25zdCB0YXNrcyA9IFtdO1xuICAgIGxldCB1bmlxdWVUYXNrSWRlbnRpZmllciA9IDA7XG5cbiAgICBjb25zdCBhZGRUYXNrID0gKHRhc2spID0+IHt0YXNrcy5wdXNoKHRhc2spfTtcbiAgICBcbiAgICByZXR1cm4ge1xuICAgICAgICBzZXQgdGl0bGUodmFsdWUpIHt0aXRsZSA9IHZhbHVlfSxcbiAgICAgICAgZ2V0IHRpdGxlKCkge3JldHVybiB0aXRsZX0sXG4gICAgICAgIGdldCB0YXNrcygpIHtyZXR1cm4gdGFza3N9LFxuICAgICAgICBnZXQgZ2V0UHJvamVjdElkZW50aWZpZXIoKSB7cmV0dXJuIHVuaXF1ZVByb2plY3RJZGVudGlmaWVyfSxcbiAgICAgICAgZ2V0IGdlbmVyYXRlVGFza0lkZW50aWZpZXIoKSB7XG4gICAgICAgICAgICB1bmlxdWVUYXNrSWRlbnRpZmllcisrO1xuICAgICAgICAgICAgcmV0dXJuIHVuaXF1ZVRhc2tJZGVudGlmaWVyO1xuICAgICAgICB9LFxuICAgICAgICBhZGRUYXNrLFxuICAgIH07XG59O1xuXG5leHBvcnQgY29uc3QgcHJvamVjdE1hbmFnZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgbGV0IHVuaXF1ZVByb2plY3RJZGVudGlmaWVyID0gMDtcbiAgICBjb25zdCBwcm9qZWN0TGlzdCA9IFtdO1xuXG4gICAgY29uc3QgYWRkUHJvamVjdCA9IChwcm9qZWN0KSA9PiB7XG4gICAgICAgIHByb2plY3RMaXN0LnB1c2gocHJvamVjdCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgZ2V0IGdlbmVyYXRlUHJvamVjdElkZW50aWZpZXIoKSB7XG4gICAgICAgICAgICB1bmlxdWVQcm9qZWN0SWRlbnRpZmllcisrO1xuICAgICAgICAgICAgcmV0dXJuIHVuaXF1ZVByb2plY3RJZGVudGlmaWVyO1xuICAgICAgICB9LFxuICAgICAgICBnZXQgZ2V0UHJvamVjdExpc3QoKSB7XG4gICAgICAgICAgICByZXR1cm4gcHJvamVjdExpc3Q7XG4gICAgICAgIH0sXG4gICAgICAgIGFkZFByb2plY3RcbiAgICB9O1xufSgpOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==