import trashcan from "../assets/trash-bin.png";

export const TodoCard = ({ todo, deleteTodo, todoIsDone }) => {
  return (
    <div className={`flex justify-between border-b-2 gap-5 ${todo.isDone ? "bg-green-500" :""}`}>
      <div className="flex items-center gap-2">
        <input
          value={todo.isDone}
          type="checkbox"
          onChange={()=>todoIsDone(todo)}
        />
      </div>
      <div className="flex flex-col items-center flex-1">
        <span className="">
          {todo.task.length > 15
            ? `${todo.task.substring(0, 15)}...`
            : todo.task}
        </span>
      </div>
      <div className={`flex flex-col items-center flex-1 ${todo.isDone && "bg-green-500"}`}>
        <div>
          {todo.description == 0
            ? <span className="opacity-40">no description</span>
            : todo.description.length > 20
            ? `${todo.description.substring(0, 20)}...`
            : todo.description}
        </div>
      </div>

      <button onClick={() => deleteTodo(todo)} className="">
        <img src={trashcan} className="w-[25px]" />
      </button>
    </div>
  );
};
