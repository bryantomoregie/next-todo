"use client";

import React, { useEffect, useState } from "react";
import Modal from "react-modal";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { v4 as uuidv4 } from "uuid";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

export default function CreateTodo({
  modalIsOpen,
  closeModal,
}: {
  modalIsOpen: boolean;
  closeModal: VoidFunction;
}) {
  const [value, onChange] = useState<Value>(new Date());
  const [todo, setTodo] = useState<string>();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const id = uuidv4();
    if (todo) {
      const todoListString = localStorage.getItem("todo");
      if (todoListString) {
        const todoList = JSON.parse(todoListString);
        localStorage.setItem(
          "todo",
          JSON.stringify([...todoList, { todo, date: value, id }])
        );
      } else
        localStorage.setItem(
          "todo",
          JSON.stringify([{ todo, date: value, id }])
        );
      closeModal();
    }
    setTodo(undefined);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTodo(e.target.value);
  };

  return (
    <Modal
      isOpen={modalIsOpen}
      style={customStyles}
      contentLabel="Example Modal"
      shouldCloseOnOverlayClick={true}
      onRequestClose={closeModal}
    >
      <form onSubmit={handleSubmit} className="pb-4">
        <input
          placeholder="Enter Task"
          value={todo}
          onChange={handleChange}
        ></input>
        <button disabled={!todo}>Submit</button>
      </form>
      <Calendar onChange={onChange} value={value} />
    </Modal>
  );
}
