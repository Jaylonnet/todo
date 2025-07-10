import { useState } from "react";
import FilterButton from "./components/FilterButton";

const FILTER_MAP = {
  All: () => true,
  Active: (task) => !task.completed,
  Completed: (task) => task.completed,
};

const FILTER_NAMES = Object.keys(FILTER_MAP);

function App({ taskData }) {
  const [filter, setFilter] = useState("All");
  const [taskList, setTaskList] = useState([...taskData]);

  const clearCompleted = () => {
    const remainingTasks = taskList.filter((task) => !task.completed);
    setTaskList(remainingTasks);
  };

  const tasks = taskList.filter(FILTER_MAP[filter]).map((task) => (
    <li className="task-item" key={task.id}>
      {task.text}
    </li>
  ));

  const filterList = FILTER_NAMES.map((name) => (
    <FilterButton
      key={name}
      name={name}
      isPressed={name === filter}
      setFilter={setFilter}
    />
  ));
  return (
    <div className="content">
      <header className="header">
        <div className="logo">Todo</div>
      </header>
      <main>
        <section className="task-section">
          <div className="create-task">
            <button className="create-task__btn">Create a new todo...</button>
          </div>
          <ul className="task-list">{tasks}</ul>
          <div className="task-count">
            <div className="task-count__text">{tasks.length} items left</div>
            <button
              className="task-count__clear-completed"
              onClick={() => clearCompleted()}
            >
              Clear Completed
            </button>
          </div>
          <div className="task-filtering">{filterList}</div>
        </section>
      </main>
    </div>
  );
}

export default App;
