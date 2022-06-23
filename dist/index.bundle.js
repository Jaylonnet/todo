/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
const toDoItem = (title, description, dueDate, priority) => {

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
        addTask,
        removeTask,
        get tasks() {return tasks}
    };
};

const projec = project('test');

projec.addTask('test')
projec.addTask('test2')
projec.addTask('test3')
projec.addTask('test4')
console.log(projec.tasks)
projec.removeTask(2)
console.log(projec.tasks)
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7O0FBRUE7QUFDQSwwQkFBMEIsY0FBYztBQUN4QyxxQkFBcUIsYUFBYTs7QUFFbEMsZ0NBQWdDLG9CQUFvQjtBQUNwRCwyQkFBMkIsbUJBQW1COztBQUU5Qyw0QkFBNEIsZ0JBQWdCO0FBQzVDLHVCQUF1QixlQUFlOztBQUV0Qyw2QkFBNkIsaUJBQWlCO0FBQzlDLHdCQUF3QixnQkFBZ0I7QUFDeEM7QUFDQTs7QUFFQTtBQUNBOztBQUVBLCtCQUErQjs7QUFFL0IsbUNBQW1DO0FBQ25DO0FBQ0E7QUFDQSwwQkFBMEIsY0FBYztBQUN4QyxxQkFBcUIsYUFBYTtBQUNsQztBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHRvRG9JdGVtID0gKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHkpID0+IHtcblxuICAgIHJldHVybiB7XG4gICAgICAgIHNldCB0aXRsZSh2YWx1ZSkge3RpdGxlID0gdmFsdWV9LFxuICAgICAgICBnZXQgdGl0bGUoKSB7cmV0dXJuIHRpdGxlfSxcblxuICAgICAgICBzZXQgZGVzY3JpcHRpb24odmFsdWUpIHtkZXNjcmlwdGlvbiA9IHZhbHVlfSxcbiAgICAgICAgZ2V0IGRlc2NyaXB0aW9uKCkge3JldHVybiBkZXNjcmlwdGlvbn0sXG5cbiAgICAgICAgc2V0IGR1ZURhdGUodmFsdWUpIHtkdWVEYXRlID0gdmFsdWV9LFxuICAgICAgICBnZXQgZHVlRGF0ZSgpIHtyZXR1cm4gZHVlRGF0ZX0sXG5cbiAgICAgICAgc2V0IHByaW9yaXR5KHZhbHVlKSB7cHJpb3JpdHkgPSB2YWx1ZX0sXG4gICAgICAgIGdldCBwcmlvcml0eSgpIHtyZXR1cm4gcHJpb3JpdHl9LFxuICAgIH07XG59O1xuXG5jb25zdCBwcm9qZWN0ID0gKHRpdGxlKSA9PiB7XG4gICAgY29uc3QgdGFza3MgPSBbXTtcblxuICAgIGNvbnN0IGFkZFRhc2sgPSAodGFzaykgPT4ge3Rhc2tzLnB1c2godGFzayl9O1xuXG4gICAgY29uc3QgcmVtb3ZlVGFzayA9IChpbmRleCkgPT4ge3Rhc2tzLnNwbGljZShpbmRleCwgMSl9O1xuICAgIFxuICAgIHJldHVybiB7XG4gICAgICAgIHNldCB0aXRsZSh2YWx1ZSkge3RpdGxlID0gdmFsdWV9LFxuICAgICAgICBnZXQgdGl0bGUoKSB7cmV0dXJuIHRpdGxlfSxcbiAgICAgICAgYWRkVGFzayxcbiAgICAgICAgcmVtb3ZlVGFzayxcbiAgICAgICAgZ2V0IHRhc2tzKCkge3JldHVybiB0YXNrc31cbiAgICB9O1xufTtcblxuY29uc3QgcHJvamVjID0gcHJvamVjdCgndGVzdCcpO1xuXG5wcm9qZWMuYWRkVGFzaygndGVzdCcpXG5wcm9qZWMuYWRkVGFzaygndGVzdDInKVxucHJvamVjLmFkZFRhc2soJ3Rlc3QzJylcbnByb2plYy5hZGRUYXNrKCd0ZXN0NCcpXG5jb25zb2xlLmxvZyhwcm9qZWMudGFza3MpXG5wcm9qZWMucmVtb3ZlVGFzaygyKVxuY29uc29sZS5sb2cocHJvamVjLnRhc2tzKSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==