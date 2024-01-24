"use client";
import React, { useEffect, useState } from "react";
import { FaPlus } from "react-icons/fa";
import { v4 as uuidv4 } from "uuid";

import CreateTodo from "./createTodo";
import TodoListItem from "./todoListItem";

export default function TodaysTask() {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [todos, setTodos] = useState<TodosArray>([]);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  useEffect(() => {
    const todosString = localStorage.getItem("todo");
    if (todosString) {
      const todos = JSON.parse(todosString);
      setTodos(todos);
    }
  }, []);

  return (
    <div>
      <div
        onClick={openModal}
        className="border flex flex-row p-3 align-middle w-full cursor-pointer"
      >
        <div className="pr-4 text-slate-500">
          <FaPlus />
        </div>
        <div className="text-slate-500">Add New Task</div>
      </div>
      <CreateTodo modalIsOpen={modalIsOpen} closeModal={closeModal} />
      {todos.map((todo) => (
        <TodoListItem key={todo.id} todo={todo.todo} date={todo.date} />
      ))}
    </div>
  );
}
