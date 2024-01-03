import { HiOutlineMagnifyingGlass } from "react-icons/hi2";

import { MdKeyboardDoubleArrowRight, MdOutlineChecklist } from "react-icons/md";

export default function Menu() {
  return (
    <div className="bg-slate-50 h-screen rounded-lg w-1/5 p-4">
      <div>
        <header className="font-header pb-4">Menu</header>
        <div className="relative">
          <div className="absolute top-2 left-1">
            <HiOutlineMagnifyingGlass />
          </div>
          <input
            type="search"
            placeholder="search"
            className="bg-slate-50 w-full border border-solid border-slate-400 flex flex-row items-center rounded-md p-1 pl-6 placeholder:text-slate-500"
          ></input>
        </div>
        <header>Tasks</header>
        <div>
          <div>
            <MdKeyboardDoubleArrowRight />
            <text>Upcoming</text>
            <div>12</div>
          </div>
          <div>
            <MdOutlineChecklist />
            <text>Today</text>
            <div>5</div>
          </div>
        </div>
      </div>
    </div>
  );
}
