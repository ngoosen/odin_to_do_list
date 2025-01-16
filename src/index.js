import "./style.css";

import { DOMManipulation } from "./js/manipulateDOM";

import createProject from "./js/project"

import { mockTasks } from "./assets/mockData";

mockTasks.forEach(task => {
  DOMManipulation.createTask(task.project, task.mainTask, task.subtasks);
});

const testButton = document.querySelector("button");
testButton.addEventListener("click", () => {
  const newProject = createProject("Test");
  console.log("🚀 ~ testButton.addEventListener ~ newProject:", newProject);
});
