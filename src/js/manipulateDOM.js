function generateUUID() {
  return "10000000-1000-4000-8000-100000000000".replace(/[018]/g, c =>
    (+c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> +c / 4).toString(16)
  );
}

function deleteTask(taskNode) {
  const taskList = document.querySelector(".tasks");
  taskList.removeChild(taskNode);
}

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
    deleteTaskButton.addEventListener("click", () => {
      deleteTask(mainTaskDiv);
    });
    projectNameDiv.appendChild(deleteTaskButton);

    mainTaskDiv.appendChild(projectNameDiv);

    const mainList = document.createElement("ul");
    mainList.classList.add("task_breakdown");

    const mainTaskListItem = document.createElement("li");

    const uuid = generateUUID();
    const mainTaskCheckboxInput = document.createElement("input");
    mainTaskCheckboxInput.setAttribute("type", "checkbox");
    mainTaskCheckboxInput.setAttribute("id", uuid);

    const mainTaskLabel = document.createElement("label");
    mainTaskLabel.setAttribute("for", uuid);
    mainTaskLabel.textContent = mainTaskName;

    mainTaskListItem.appendChild(mainTaskCheckboxInput);
    mainTaskListItem.appendChild(mainTaskLabel);

    mainList.appendChild(mainTaskListItem);

    subtasksList.forEach(taskName => {
      const listItem = document.createElement("li");

      const uuid = generateUUID();

      const input = document.createElement("input");
      input.setAttribute("type", "checkbox");
      input.setAttribute("id", uuid);

      const label = document.createElement("label");
      label.setAttribute("for", uuid);
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
