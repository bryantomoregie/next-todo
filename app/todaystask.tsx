"use client";
import React from "react";
import { FaPlus } from "react-icons/fa";
import EditTodo from "./editTodo";

export default function TodaysTask() {
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  let subtitle;

  return (
    <div>
      <div
        onClick={openModal}
        className="border flex flex-row p-3 align-middle w-full cursor-pointer"
      >
        <div className="pr-4 text-slate-500">
          <FaPlus />
        </div>
        <text className="text-slate-500">Add New Task</text>
      </div>
      <EditTodo modalIsOpen={modalIsOpen} closeModal={closeModal} />
    </div>
  );
}
