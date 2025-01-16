export const DOMManipulation = (function() {
  function createTask(projectName, mainTaskName, subtasksList) {
    const mainTaskDiv = document.createElement("div");
    mainTaskDiv.classList.add("task");

    const projectNameDiv = document.createElement("div");
    projectNameDiv.classList.add("project_name");

    const projectNameTitle = document.createElement("p");
    projectNameTitle.textContent = projectName;
    projectNameDiv.appendChild(projectNameTitle);

    const deleteTaskButton = document.createElement("button");
    deleteTaskButton.classList.add("delete_task_icon");
    // TODO: add delete task event listener
    projectNameDiv.appendChild(deleteTaskButton);

    mainTaskDiv.appendChild(projectNameDiv);

    const mainList = document.createElement("ul");
    mainList.classList.add("task_breakdown");

    const mainTaskListItem = document.createElement("li");

    const mainTaskCheckboxInput = document.createElement("input");
    mainTaskCheckboxInput.setAttribute("type", "checkbox");
    mainTaskCheckboxInput.setAttribute("id", mainTaskName);

    const mainTaskLabel = document.createElement("label");
    mainTaskLabel.setAttribute("for", mainTaskName);
    mainTaskLabel.textContent = mainTaskName;

    mainTaskListItem.appendChild(mainTaskCheckboxInput);
    mainTaskListItem.appendChild(mainTaskLabel);

    mainList.appendChild(mainTaskListItem);

    subtasksList.forEach(taskName => {
      const listItem = document.createElement("li");

      const input = document.createElement("input");
      input.setAttribute("type", "checkbox");
      input.setAttribute("id", taskName);

      const label = document.createElement("label");
      label.setAttribute("for", taskName);
      label.textContent = taskName;

      listItem.appendChild(input);
      listItem.appendChild(label);

      mainList.appendChild(listItem);
    });

    mainTaskDiv.appendChild(mainList);

    const tasksList = document.querySelector(".tasks");
    tasksList.appendChild(mainTaskDiv);
  }

  return {
    createTask,
  };
})();
