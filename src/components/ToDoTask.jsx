export default function ToDoTask() {
  function deleteTask() {
    console.log("delete");
  }

  function editTask() {
    console.log("edit");
  }

  return (
    <li className="task">
      <input type="checkbox" />
      <p>Task</p>
      <div className="btn-container">
        <button className="btn delete-btn" onClick={deleteTask}>
          Delete
        </button>
        <button className="btn edit-btn" onClick={editTask}>
          Edit
        </button>
      </div>
    </li>
  );
}
