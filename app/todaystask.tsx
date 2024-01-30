"use client";
import React, { useEffect, useState } from "react";
import { FaPlus } from "react-icons/fa";
import { v4 as uuidv4 } from "uuid";

import CreateTodo from "./createTodo";
import TodoListItem from "./todoListItem";

export default function TodaysTask() {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [todos, setTodos] = useState<TodosArray>([]);
  const [todo, setTodo] = useState<string>();

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  useEffect(() => {
    const todosString = localStorage.getItem("todo");
    if (todosString) {
      const todosParsed = JSON.parse(todosString);
      setTodos(todosParsed);
    }
  }, [todo]);

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
      <CreateTodo
        modalIsOpen={modalIsOpen}
        closeModal={closeModal}
        todo={todo}
        setTodo={setTodo}
      />
      {todos.map((todo) => (
        <TodoListItem
          key={todo.id}
          id={todo.id}
          todo={todo.todo}
          date={todo.date}
          setTodos={setTodos}
        />
      ))}
    </div>
  );
}
