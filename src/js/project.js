export default function createProject(title) {
  let projectTitle = title;
  const items = [];

  function getItems() {
    return [...items];
  }

  function updateProject(newTitle) {
    projectTitle = newTitle;
  }

  function addItem(toDoItem) {
    items.push(toDoItem);
  }

  function removeItem(id) {
    const start = items.slice(0, id);
    const end = items.slice(id + 1);

    items = [...start, ...end];
  }

  return {
    projectTitle,
    updateProject,
    getItems,
    addItem,
    removeItem,
  };
}
