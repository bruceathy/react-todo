import ToDoTask from "./ToDoTask";

export default function ToDoList() {
  function addToList(e) {
    e.preventDefault();
    console.log("add");
  }

  return (
    <div className="toDoList">
      <form className="task-input">
        <input type="text" placeholder="Get Milky Away?" />
        <button type="submit" onClick={addToList}>
          Add
        </button>
      </form>
      <ul>
        <ToDoTask />
      </ul>
    </div>
  );
}
