export default function TodoListItem({
  todo,
  date,
}: {
  todo: string;
  date?: Value;
}) {
  const date1 = date ? new Date(date as Date) : undefined;

  const dateString = dateFormatter(date1);
  return (
    <div className="border mt-2 flex flex-row p-2">
      <input type="checkbox" className="ml-1" />
      <div className="ml-4">{todo}</div>
      {date ? <div>{dateString}</div> : null}
    </div>
  );
}

const dateFormatter = (date?: Value) => {
  const day = date?.getDay();
  const month = date?.getMonth();
  const year = date?.getFullYear();

  return date ? `${day}-${month}-${year}` : null;
};
