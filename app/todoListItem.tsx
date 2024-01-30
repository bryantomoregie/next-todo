export default function TodoListItem({
  todo,
  date,
  id,
  setTodos,
  todos,
}: {
  todo: string;
  date: Value;
  id: string;
  setTodos: React.Dispatch<React.SetStateAction<TodosArray>>;
  todos: TodosArray;
}) {
  const date1 = date ? new Date(date as Date) : undefined;

  const dateString = dateFormatter(date1);
  return (
    <div className="border mt-2 flex flex-row p-2">
      <input
        type="checkbox"
        className="ml-1"
        onMouseUp={() => removeTodo(id, setTodos, todos)}
      />
      <div className="mx-4">{todo}</div>
      {date ? <div>{dateString}</div> : null}
    </div>
  );
}

const dateFormatter = (date?: Value) => {
  const day = date?.getDate();
  const month = date?.getMonth();
  const year = date?.getFullYear();

  return date ? `${day}-${month + 1}-${year}` : null;
};

const removeTodo = (
  id: string,
  setTodos: React.Dispatch<React.SetStateAction<TodosArray>>,
  todos: TodosArray
) => {
  const filteredTodo = todos.filter((todo) => todo.id !== id);
  localStorage.setItem("todo", JSON.stringify(filteredTodo));
  setTodos(filteredTodo);
};
