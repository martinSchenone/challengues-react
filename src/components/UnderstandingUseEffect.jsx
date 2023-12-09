import { useEffect, useMemo, useState } from "react";

export const UnderstandingUseEffect = () => {
    const [number, setNumber] = useState(0);
  //   console.log("re render component" + number);
  //   useEffect(() => {
  //     console.log("useEffect runs!");
  //     document.title = `u clicked ${number} times`;
  //   }, [number]);


  // evitar que un componente se monte de nuevo si tiene exactamente los mismos valores q antes
  const [name, setName] = useState("");
  const [state, setState] = useState({
    name: "",
    selected: false,
  });
  // useMemo guarda la informacion recibida por el state y la mantiene en memoria, y especifica que solo va a cambiar su valor si el estado principal cambia
  const user = useMemo(
    () => ({
      name: state.name,
      selected: state.selected,
    }),
    [state.name, state.selected]
  );

  useEffect(() => {
    console.log("state has changed!!");
    // pasamos el useMemo como dependencia
    // tambien podemos pasarle solamente state.name y state.selected, pero es mejor practica usar memo
  }, [user]);
  const handleAdd = () => {
    setState((prev) => ({ ...prev, name }));
  };
  const handleSelected = () => {
    setState((prev) => ({ ...prev, selected: true }));
  };

  // updateando un estado con useEffect incorrectamente
  useEffect(()=>{
    const interval = setInterval(() => {
        setNumber(prev => prev + 1)
    }, 1000);
    // clean up function
    return () => {
        clearInterval(interval)
    }
  },[])
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "10rem",
        gap: "1rem",
      }}
    >
      <input onChange={(e) => setName(e.target.value)}></input>
      <button onClick={handleAdd}>Add name</button>
      <button onClick={handleSelected}>Select</button>

      {`{
            name:${state.name},
            selected:${state.selected}
        }`}
        {number}
      {/* <span>U CLICKED {number} TIMES</span> */}
      {/* <button onClick={() => setNumber((prev) => prev + 1)}>Increase</button> */}
    </div>
  );
};
