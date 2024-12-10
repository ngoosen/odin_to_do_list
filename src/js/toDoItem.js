function createToDo(title) {
  let done = false;

  function getState() {
    return done;
  }

  function toggleState() {
    done = !done;
  }

  return {
    title,
    getState,
    toggleState,
  };
}
