import Image from "next/image";
import Menu from "./menu";
import TodaysTask from "./todaystask";

export default function Home() {
  return (
    <main className="p-8 flex flex-row">
      <Menu />
      <div className="w-full">
        <header className="flex flex-row gap-8">
          <text className="text-5xl font-header font-semibold">Today</text>
          <Day />
        </header>
        <TodaysTask />
      </div>
    </main>
  );
}

function Day() {
  const date = new Date().getDate();

  return (
    <div className="border px-2 font-header text-date w-max font-normal h-max">
      {date}
    </div>
  );
}
