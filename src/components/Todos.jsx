import { useState } from "react";
import trashcan from "../assets/trash-bin.png";
export const Todos = () => {
  const [todoInfo, setTodoInfo] = useState("");
  const [todoDescription, setTodoDescription] = useState("");
  const [todos, setTodos] = useState([]);

  const addTask = (e) => {
    if (todoInfo) {
      const newTodo = {
        id: Math.random(),
        task: todoInfo,
        description: todoDescription,
        isDone: false,
      };
      setTodos([...todos, newTodo]);
      localStorage.setItem("todos", JSON.stringify([...todos, newTodo]));
      setTodoInfo("");
      setTodoDescription("");
    }
  };
  const deleteTodo = (todo) => {
    const deletedTodo = todos.filter((t) => t.id !== todo.id);
    setTodos(deletedTodo);
    localStorage.setItem("todos", JSON.stringify(deletedTodo));
  };
  const localTodosSession = localStorage.getItem("todos");
  const localTodosList = JSON.parse(localTodosSession);

  return (
    <div className="flex flex-col md:flex-row p-1 gap-10 max-w-7xl mx-auto ">
      <form
        className="flex flex-col flex-1  min-h-screen gap-5 backdrop-blur-sm bg-[rgba(255,255,255,0.15)] shadow-md  border-gray-300 border rounded-xl p-2"
        onSubmit={(e) => e.preventDefault()}
      >
        <h1 className="text-2xl font-semibold  text-center">Create new todo</h1>
        <label className="flex flex-col gap-2">
          <span className="text-xl font-bold ">Task</span>
          <input
            required
            value={todoInfo}
            placeholder="to do..."
            className="p-2 rounded"
            name="task"
            onChange={(e) => setTodoInfo(e.target.value)}
          />
        </label>
        <label className="flex flex-col gap-2">
          <span className="text-xl font-bold ">Description</span>
          <textarea
            value={todoDescription}
            placeholder="to do description..."
            className="p-2 resize-none rounded"
            name="description"
            onChange={(e) => setTodoDescription(e.target.value)}
          />
        </label>

        <button
          className="backdrop-blur-sm bg-[rgba(255,255,255,0.15)] shadow-md p-2 text-lg font-semibold"
          onClick={addTask}
        >
          ENVIAR
        </button>
      </form>
      {/* <div>
        {localTodosList.length <= 0 ? (
          <h1>No todos</h1>
        ) : (
          <h1>You have {localTodosList.length} thing to do</h1>
        )}
      </div> */}
      <div className="flex-1 flex flex-col  min-h-screen gap-5 backdrop-blur-sm bg-[rgba(255,255,255,0.15)] shadow-md  border-gray-300 border rounded-xl p-2">
        <div className=" flex items-center justify-center border-b-2">
          <h1 className="text-3xl font-bold uppercase">to do list</h1>
        </div>

        <div className="flex gap-8  py-4 flex-col ">
          <div className="flex  border-b-2  ">
            <div className="flex  justify-between w-1/3 ">
              <h1 className="text-xl font-bold   ">Done</h1>
              <h1 className="text-xl font-bold ">Task</h1>
            </div>
            <div className="w-3/4  ">
              <h1 className="text-xl font-bold text-center">Description:</h1>
            </div>
          </div>
          {localTodosList &&
            localTodosList.map((todo) => (
              <div
                key={todo.id}
                className="flex justify-between border-b-2 gap-5"
              >
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
                    {todo.description.length > 20
                      ? `${todo.description.substring(0, 25)}...`
                      : todo.description.length == 0
                      ? "No description"
                      : ""}
                  </span>
                </div>

                <button onClick={() => deleteTodo(todo)} className="">
                  <img src={trashcan} className="w-[25px]" />
                </button>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};
