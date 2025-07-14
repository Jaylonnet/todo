import { useEffect, useState } from "react";
import FilterButton from "./components/FilterButton";
import CheckIcon from "./components/CheckIcon";
import CrossIcon from "./components/CrossIcon";

const FILTER_MAP = {
  All: () => true,
  Active: (task) => !task.completed,
  Completed: (task) => task.completed,
};

const FILTER_NAMES = Object.keys(FILTER_MAP);

function App({ taskData }) {
  const [filter, setFilter] = useState("All");
  const [taskList, setTaskList] = useState(
    JSON.parse(localStorage.getItem("taskData")) ?? [...taskData]
  );
  const [isCreating, setIsCreating] = useState(false);
  const [taskText, setTaskText] = useState("");

  useEffect(() => {
    localStorage.setItem("taskData", JSON.stringify(taskList));
  }, [taskList]);

  const clearCompleted = () => {
    const remainingTasks = taskList.filter((task) => !task.completed);
    setTaskList(remainingTasks);
  };

  const tasks = taskList
    .filter(FILTER_MAP[filter])
    .map((task) => (
      <li className="task-item" key={task.id}>
        <button
          onClick={() => handleTaskCompletion(task.id)}
          className={task.completed ? "circle__complete" : "circle__incomplete"}
        ></button>
        <div className="task-text">{task.text}</div>
      </li>
    ))
    .reverse();

  const filterList = FILTER_NAMES.map((name) => (
    <FilterButton
      key={name}
      name={name}
      isPressed={name === filter}
      setFilter={setFilter}
    />
  ));

  const addTask = (taskName) => {
    if (!taskName) return;
    setTaskList([
      { id: crypto.randomUUID(), text: taskName, completed: false },
      ...taskList,
    ]);
    setTaskText("");
    setIsCreating(false);
  };

  const handleTaskCompletion = (taskId) => {
    const updatedTasks = taskList.map((task) =>
      task.id === taskId ? { ...task, completed: !task.completed } : task
    );

    setTaskList(updatedTasks);
  };

  return (
    <div className="content">
      <header className="header">
        <div className="logo">Todo</div>
      </header>
      <main>
        <section className="task-section">
          <div className="create-task">
            {!isCreating ? (
              <button
                className="create-task__btn"
                onClick={() => setIsCreating(!isCreating)}
              >
                Create a new todo...
              </button>
            ) : (
              <>
                <input
                  onKeyDown={(e) =>
                    e.key === "Enter" ? addTask(taskText) : null
                  }
                  className="new-task-input"
                  autoFocus
                  onChange={(e) => {
                    setTaskText(e.target.value);
                  }}
                  value={taskText}
                ></input>
                <button
                  className="submit-task"
                  onClick={() => addTask(taskText)}
                >
                  <CheckIcon fillColor="hsl(233, 14%, 35%)" />
                </button>
                <button
                  className="cancel-task"
                  onClick={() => {
                    setIsCreating(false);
                    setTaskText("");
                  }}
                >
                  <CrossIcon fillColor="hsl(233, 14%, 35%)" />
                </button>
              </>
            )}
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
