const TASKS = [
  {
    id: crypto.randomUUID(),
    text: "Complete online JavaScript course",
    completed: false,
  },
  {
    id: crypto.randomUUID(),
    text: "Jog around the park 3x",
    completed: false,
  },
  {
    id: crypto.randomUUID(),
    text: "10 minutes meditation",
    completed: false,
  },
  {
    id: crypto.randomUUID(),
    text: "Read for 1 hour",
    completed: false,
  },
  {
    id: crypto.randomUUID(),
    text: "Pick up groceries",
    completed: false,
  },
  {
    id: crypto.randomUUID(),
    text: "Complete Todo App on Frontend Mentor",
    completed: false,
  },
];

function App() {
  const tasks = TASKS.map((task) => (
    <li className="task-item" key={task.id}>
      {task.text}
    </li>
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
            <div className="task-count__clear-completed">Clear Completed</div>
          </div>
          <div className="task-filtering">
            <span className="all selected-filter">All</span>
            <span className="active">Active</span>
            <span className="completed">Completed</span>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
