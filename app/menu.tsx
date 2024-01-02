import { HiOutlineMagnifyingGlass } from "react-icons/hi2";

import { MdKeyboardDoubleArrowRight, MdOutlineChecklist } from "react-icons/md";

export default function Menu() {
  return (
    <div className="bg-slate-50 h-screen rounded-lg">
      <div>
        <header className="font-header ">Menu</header>
        <div>
          <HiOutlineMagnifyingGlass />
          <text>search</text>
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
