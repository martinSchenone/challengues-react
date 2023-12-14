import { useReducer, useRef } from "react";
// useReducer es una alternativa a useState pero mas complejo y con mas funciones.

export const UseReducer = () => {
  // aprovechamos useRef para crear una referencia que almacene el valor del input
  const inputRef = useRef();

  // como useState reducer nos brinda dos acciones, el primero que seria parecido al estado, y la funcion dispatch, la cual va a ser como la funcion set**** de useState

  const [tasks, dispatch] = useReducer((state = [], action) => {
    // la funcion reducer, siempre debe devolver un nuevo objeto
    // al momento de hacer submit en el form, vemos que el objeto action devuelve el type, y el title que nosotros le agregamos
    // console.log(action);
    // para este caso, la manaera mas simple es usar un statment switch, ya que podemos ir chequeando el codigo dentro del action.type y dependiendo lo que nos venga hacemos la funcion
    switch (action.type) {
      case "add_task": {
        // como dijimos, los reducer siempre deben devolver un nuevo objeto, asique le pasamos una copia del state inicial, y creamos un nuevo objeto dentro con un id, y con el valor de title el cual nos llega por el action.
        return [...state, { id: state.length, title: action.title }];
      }
      case "delete_task": {
        return state.filter((t) => t.id != action.deletedTask.id);
      }
      default: {
        return state;
      }
    }
    // return state;
  });

  //   console.log(tasks);

  const handleForm = (e) => {
    e.preventDefault();
    dispatch({
      // la funcion dispatch necesita siempre de un type, el cual va a definir lo que va a hacer la funcion, y lo que vamos a tomar de un form, o de lo que sea, en este caso vamos a tomar el title de una task haciendo use del useRef con el input.current.value
      type: "add_task",
      title: inputRef.current.value,
    });
  };

  const deleteTask = (task) => {
    console.log(task.id);
    dispatch({
      type: "delete_task",
      deletedTask: task,
    });
  };
  return (
    <div className="min-h-screen flex items-center justify-center flex-col gap-10">
      <div className="bg-indigo-300 p-5 rounded-xl min-h-[20rem] flex flex-col justify-evenly text-center text-xl gap-5">
        <h1 className="">Lista de tareas</h1>
        <form className="" onSubmit={handleForm}>
          <label className="flex flex-col items-center justify-center gap-5">
            tarea
            <input
              placeholder="tarea"
              name="title"
              type="text"
              className="p-2 rounded-sm"
              ref={inputRef}
            />
            <input
              type="submit"
              value="enviar"
              className="p-2 cursor-pointer border px-5 rounded-sm"
            />
          </label>
        </form>
        {tasks &&
          tasks.map((task) => (
            <div key={task.id} className="flex justify-center items-center">
              <h1 className="flex-[5]">{task.title}</h1>
              <button
                onClick={() => deleteTask(task)}
                className="bg-white p-2 rounded flex-1"
              >
                Delete
              </button>
            </div>
          ))}
      </div>
    </div>
  );
};
