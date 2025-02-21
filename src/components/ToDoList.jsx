import Input from "./Input";

export default function ToDoList() {
  return (
    <>
      <Input />
      <ul className="toDoList">
        <li>Task 1</li>
        <li>Task 2</li>
        <li>Task 3</li>
      </ul>
    </>
  );
}
