function App() {
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
          <ul className="task-list">
            <li className="task-item">Complete online JavaScript course</li>
            <li className="task-item">Jog around the park 3x</li>
            <li className="task-item">10 minutes meditation</li>
            <li className="task-item">Read for 1 hour</li>
            <li className="task-item">Pick up groceries</li>
            <li className="task-item">Complete Todo App on Frontend Mentor</li>
          </ul>
          <div className="task-count">
            <div className="task-count__text">5 items left</div>
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
