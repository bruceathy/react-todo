import Input from "./Input";
import ToDoTask from "./ToDoTask";

export default function ToDoList() {
  return (
    <div className="toDoList">
      <Input />
      <ul>
        <li>
          <ToDoTask />
        </li>
        <li>
          <ToDoTask />
        </li>
        <li>
          <ToDoTask />
        </li>
      </ul>
    </div>
  );
}
