import { FaPlus } from "react-icons/fa";

export default function TodaysTask() {
  return (
    <div>
      <div className="border flex flex-row p-3 align-middle w-full cursor-pointer">
        <div className="pr-4 text-slate-500">
          <FaPlus />
        </div>
        <text className="text-slate-500">Add New Task</text>
      </div>
    </div>
  );
}
