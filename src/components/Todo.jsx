import React, { useState } from "react";
import todo_icon from "../assets/todo_icon.png";
import Todoitems from "./Todoitems";
import { useRef } from "react";

const Todo = () => {
  const [todoList, setTodoList] = useState([]);

  const inputRef = useRef();

  const add = () => {
    const inputText = inputRef.current.value.trim();

    if (inputText === "") {
      return null;
    }

    const newTodo = {
      id: Date.now(),
      text: inputText,
      isComplete: false,
    };
    setTodoList((prev) => [...prev, newTodo]);
    inputRef.current.value = "";
  };

  return (
    <div className="bg-white place-self-center w-11/12 max-w-md flex flex-col p-7 min-h-[550px] rounded-xl">
      {/* TITLE */}

      <div className="flex items-center mt-7 gap-2">
        <img className="w-8" src={todo_icon} alt="ToDo icon" />
        <h1 className="text-3xl font-semibold">To-Do List</h1>
      </div>

      {/* INPUT BOX */}

      <div className="flex items-center my-7 bg-gray-200 rounded-full">
        <input
          ref={inputRef}
          className="bg-transparent border-0 outline-none flex-1 h-14 pl-6 pr-2 placeholder:text-slate-600"
          type="text"
          placeholder="Add your task"
        />
        <button
          className="border-none rounded-full bg-gray-800 w-32 h-14 text-white text-lg font-medium cursor-pointer"
          onClick={add}>
          ADD+
        </button>
      </div>

      {/* todo List */}
      <div>
        {todoList.map((item, index) => {
          return <Todoitems key={index} text={item.text} />;
        })}
      </div>
    </div>
  );
};

export default Todo;
