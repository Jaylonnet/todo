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
/*!********************!*\
  !*** ./src/dom.js ***!
  \********************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "displayProjectOnPage": () => (/* binding */ displayProjectOnPage),
/* harmony export */   "displayTaskOnPage": () => (/* binding */ displayTaskOnPage),
/* harmony export */   "hideProjectTasks": () => (/* binding */ hideProjectTasks),
/* harmony export */   "showProjectTasks": () => (/* binding */ showProjectTasks)
/* harmony export */ });
function displayProjectOnPage(project, projectId) {
    const heading = document.createElement('h3');
    heading.textContent = project.title;
    heading.dataset.projectId = projectId;
    heading.id = "projectHeading";
    document.querySelector('#projects').append(heading);
    
    const taskContainer = document.createElement('div');
    taskContainer.classList.add('task-container');
    taskContainer.dataset.projectId = projectId;
    document.querySelector('#tasks').append(taskContainer)
};

function displayTaskOnPage(task, taskId, projectId) {
    const taskBox = document.createElement('div');
    taskBox.classList.add('task');
    taskBox.dataset.taskId = taskId;
    taskBox.dataset.projectId = projectId;
    const taskData = [task.title, task.description, task.dueDate, task.priority];
    for (let data of taskData) {
        const p = document.createElement('p')
        p.textContent = data;
        taskBox.append(p);
    };
    document.querySelector(`.task-container[data-project-id="${projectId}"]`).appendChild(taskBox);
};

function hideProjectTasks() {
    const allTasks = document.querySelectorAll('.task');
    allTasks.forEach(task => {
        task.style.display = 'none';
    })
};

function showProjectTasks(projectId, projectTitle) {
    const projectTasks = document.querySelectorAll(`.task[data-project-id="${projectId}"]`)
    projectTasks.forEach(task => {
        task.style.display = 'block';
    });
    document.querySelector('#projectName').textContent = projectTitle
};
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG9tLmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOztVQUFBO1VBQ0E7Ozs7O1dDREE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7OztBQ05PO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0RBQStELFVBQVU7QUFDekU7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRU87QUFDUCw2RUFBNkUsVUFBVTtBQUN2RjtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsRSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvLy4vc3JjL2RvbS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBUaGUgcmVxdWlyZSBzY29wZVxudmFyIF9fd2VicGFja19yZXF1aXJlX18gPSB7fTtcblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImV4cG9ydCBmdW5jdGlvbiBkaXNwbGF5UHJvamVjdE9uUGFnZShwcm9qZWN0LCBwcm9qZWN0SWQpIHtcbiAgICBjb25zdCBoZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcbiAgICBoZWFkaW5nLnRleHRDb250ZW50ID0gcHJvamVjdC50aXRsZTtcbiAgICBoZWFkaW5nLmRhdGFzZXQucHJvamVjdElkID0gcHJvamVjdElkO1xuICAgIGhlYWRpbmcuaWQgPSBcInByb2plY3RIZWFkaW5nXCI7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Byb2plY3RzJykuYXBwZW5kKGhlYWRpbmcpO1xuICAgIFxuICAgIGNvbnN0IHRhc2tDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0YXNrQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3Rhc2stY29udGFpbmVyJyk7XG4gICAgdGFza0NvbnRhaW5lci5kYXRhc2V0LnByb2plY3RJZCA9IHByb2plY3RJZDtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGFza3MnKS5hcHBlbmQodGFza0NvbnRhaW5lcilcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBkaXNwbGF5VGFza09uUGFnZSh0YXNrLCB0YXNrSWQsIHByb2plY3RJZCkge1xuICAgIGNvbnN0IHRhc2tCb3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0YXNrQm94LmNsYXNzTGlzdC5hZGQoJ3Rhc2snKTtcbiAgICB0YXNrQm94LmRhdGFzZXQudGFza0lkID0gdGFza0lkO1xuICAgIHRhc2tCb3guZGF0YXNldC5wcm9qZWN0SWQgPSBwcm9qZWN0SWQ7XG4gICAgY29uc3QgdGFza0RhdGEgPSBbdGFzay50aXRsZSwgdGFzay5kZXNjcmlwdGlvbiwgdGFzay5kdWVEYXRlLCB0YXNrLnByaW9yaXR5XTtcbiAgICBmb3IgKGxldCBkYXRhIG9mIHRhc2tEYXRhKSB7XG4gICAgICAgIGNvbnN0IHAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcbiAgICAgICAgcC50ZXh0Q29udGVudCA9IGRhdGE7XG4gICAgICAgIHRhc2tCb3guYXBwZW5kKHApO1xuICAgIH07XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLnRhc2stY29udGFpbmVyW2RhdGEtcHJvamVjdC1pZD1cIiR7cHJvamVjdElkfVwiXWApLmFwcGVuZENoaWxkKHRhc2tCb3gpO1xufTtcblxuZXhwb3J0IGZ1bmN0aW9uIGhpZGVQcm9qZWN0VGFza3MoKSB7XG4gICAgY29uc3QgYWxsVGFza3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudGFzaycpO1xuICAgIGFsbFRhc2tzLmZvckVhY2godGFzayA9PiB7XG4gICAgICAgIHRhc2suc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICB9KVxufTtcblxuZXhwb3J0IGZ1bmN0aW9uIHNob3dQcm9qZWN0VGFza3MocHJvamVjdElkLCBwcm9qZWN0VGl0bGUpIHtcbiAgICBjb25zdCBwcm9qZWN0VGFza3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGAudGFza1tkYXRhLXByb2plY3QtaWQ9XCIke3Byb2plY3RJZH1cIl1gKVxuICAgIHByb2plY3RUYXNrcy5mb3JFYWNoKHRhc2sgPT4ge1xuICAgICAgICB0YXNrLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgIH0pO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcm9qZWN0TmFtZScpLnRleHRDb250ZW50ID0gcHJvamVjdFRpdGxlXG59OyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==