import { HiOutlineMagnifyingGlass } from "react-icons/hi2";

import { MdKeyboardDoubleArrowRight, MdOutlineChecklist } from "react-icons/md";

export default function Menu() {
  return (
    <div className="bg-slate-50 h-screen rounded-lg w-1/5 p-4">
      <div>
        <header className="font-header pb-4">Menu</header>
        <div className="relative pb-4">
          <div className="absolute top-2 left-1">
            <HiOutlineMagnifyingGlass />
          </div>
          <input
            type="search"
            placeholder="search"
            className="bg-slate-50 w-full  flex flex-row items-center rounded-md p-1 pl-6 placeholder:text-slate-500 border"
          ></input>
        </div>
        <header className="text-sm pb-4">Tasks</header>
        <div>
          <div
            className="flex flex-row items-center w-max"
            style={{
              borderStyle: "solid",
              borderColor: "black",
              borderWidth: 2,
            }}
          >
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
