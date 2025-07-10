import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

let taskData = [
  {
    id: crypto.randomUUID(),
    text: "Complete online JavaScript course",
    completed: true,
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

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App taskData={taskData} />
  </StrictMode>
);
