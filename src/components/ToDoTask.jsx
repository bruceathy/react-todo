export default function ToDoTask() {
  // Task that is shown in to do list after typed in input
  return (
    <div className="task">
      <input type="checkbox" />
      <p>Task</p>
      <div className="btn-container">
        <button className="btn delete-btn">Delete</button>
        <button className="btn edit-btn">Edit</button>
      </div>
    </div>
  );
}
