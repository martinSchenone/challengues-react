import { useEffect, useRef } from "react";
import trashcan from "../assets/trash-bin.png";
import { useState } from "react";

export const TodoCard = ({ todo, deleteTodo }) => {
  const [checked, setChecked] = useState(false);
  
  return (
    <div
      className={`flex justify-between border-b-2 gap-5 p-2 rounded-md shadow-xl cursor-pointer ${
        checked ? "bg-green-300" : ""
      }`}
      onClick={() => setChecked((prev) => !prev)}
    >
      <div className="flex items-center gap-2">
       
        {checked && (
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-1.25 17.292l-4.5-4.364 1.857-1.858 2.643 2.506 5.643-5.784 1.857 1.857-7.5 7.643z"/></svg>
        )}
      </div>
      <div className="flex flex-col items-center flex-1">
        <span className="">
          {todo.task.length > 15
            ? `${todo.task.substring(0, 15)}...`
            : todo.task}
        </span>
      </div>
      <div
        className={`flex flex-col items-center flex-1 ${
          todo.isDone && "bg-green-500"
        }`}
      >
        <div>
          {todo.description == 0 ? (
            <span className="opacity-40">no description</span>
          ) : todo.description.length > 20 ? (
            `${todo.description.substring(0, 20)}...`
          ) : (
            todo.description
          )}
        </div>
      </div>

      <button onClick={() => deleteTodo(todo)} className="">
        <img src={trashcan} className="w-[25px]" />
      </button>
    </div>
  );
};
