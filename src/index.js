import "./style.css";

import { DOMManipulation } from "./js/manipulateDOM";
import createProject from "./js/project"

DOMManipulation.test();

const testButton = document.querySelector("button");
testButton.addEventListener("click", () => {
  const newProject = createProject("Test");
  console.log("🚀 ~ testButton.addEventListener ~ newProject:", newProject);
});

console.log(window.innerWidth);
