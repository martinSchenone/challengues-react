import trashcan from "../assets/trash-bin.png";

export const TodoCard = ({ todo, deleteTodo }) => {
  return (
    <div key={todo.id} className="flex justify-between border-b-2 gap-5">
      <div className="flex items-center gap-2">
        <input value={todo.isDone} type="checkbox" />
      </div>
      <div className="flex flex-col items-center flex-1">
        <span className="">
          {todo.task.length > 15
            ? `${todo.task.substring(0, 15)}...`
            : todo.task}
        </span>
      </div>
      <div className="flex flex-col items-center flex-1">
        <span className=" ">
          {todo.description == 0
            ? "no description"
            : todo.description.length > 20
            ? `${todo.description.substring(0,20)}...`
            : todo.description}
        </span>
      </div>

      <button onClick={() => deleteTodo(todo)} className="">
        <img src={trashcan} className="w-[25px]" />
      </button>
    </div>
  );
};
