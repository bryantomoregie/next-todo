export default function TodoListItem({
  todo,
  date,
}: {
  todo: string;
  date: Value;
}) {
  return <div className="border border-b-2 flex flex-row">{todo}</div>;
}
