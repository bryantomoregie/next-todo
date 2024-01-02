import Image from "next/image";
import Menu from "./menu";

export default function Home() {
  return (
    <main className="p-8 flex flex-row">
      <Menu />
      <header className="flex flex-row gap-8">
        <text className="text-5xl font-header font-semibold">Upcoming</text>
        <Day />
      </header>
    </main>
  );
}

function Day() {
  const date = new Date().getDate();

  return (
    <div className="border-solid rounded border-slate-100 border-2 px-2 font-header text-date w-max font-normal h-max">
      {date}
    </div>
  );
}
