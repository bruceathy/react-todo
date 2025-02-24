export default function ToDoTask() {
  return (
    <li className="task">
      <input type="checkbox" />
      <p>Task</p>
      <div className="btn-container">
        <button className="btn delete-btn">Delete</button>
        <button className="btn edit-btn">Edit</button>
      </div>
    </li>
  );
}
