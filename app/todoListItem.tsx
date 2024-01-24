export default function TodoListItem({
  todo,
  date,
}: {
  todo: string;
  date: Date;
}) {
  const dateString = dateFormatter(date);
  console.log({ date, dateString });
  return (
    <div className="border mt-2 flex flex-row p-2">
      <input type="checkbox" className="ml-1" />
      <div className="ml-4">{todo}</div>
      {date ? <div>{dateString}</div> : null}
    </div>
  );
}

const dateFormatter = (date?: Date) => {
  const day = date?.getDay();
  const month = date?.getMonth();
  const year = date?.getFullYear();

  return date ? `${day}-${month}-${year}` : null;
};
