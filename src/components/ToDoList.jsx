import Input from "./Input";
import ToDoTask from "./ToDoTask";

export default function ToDoList() {
  return (
    <div className="toDoList">
      <Input />
      <ul>
        <ToDoTask />
      </ul>
    </div>
  );
}
