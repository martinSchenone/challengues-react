import { useEffect } from "react";
import { useState } from "react";
import { useRef } from "react";

// ejemplo de manejo de elementos del dom

const AutoFocus = () => {
  const inputRef = useRef();
  const onFocus = () => {
    inputRef.current.focus();
    inputRef.current.style.border = "5px solid blue";
    inputRef.current.value = "me estan manejando con referencias";
  };
  return (
    <div>
      <input type="text" ref={inputRef} />
      <button onClick={onFocus}>Focus!!!</button>
    </div>
  );
};

// ejemplo de contador con ref
const Contador = () => {
  const contadorRef = useRef(0);
  const [contador, setContador] = useState(0);
  useEffect(() => {
    contadorRef.current = setInterval(() => {
      setContador((cont) => cont + 1);
    }, 1000);
  }, []);
  const handleTimmer = () => {
    clearInterval(contadorRef.current);
    contadorRef.current = 0;
  };
  return (
    <div>
      <p>contador: {contador}</p>
      <button onClick={handleTimmer}>Parar</button>
    </div>
  );
};
// ejemplo de guardar mensaje previo con useRef
import React from "react";

export const PreviousMSG = () => {
  const [mensaje, setMensaje] = useState("");
  const prevMensajeRef = useRef("");
  const actualizarMensaje = (e) => {
    setMensaje(e.target.value);
  };
  useEffect(() => {
    prevMensajeRef.current = mensaje
  }, [mensaje]);

  return (
    <div>
      <input onChange={actualizarMensaje} />
      <h1>Mensaje: {mensaje}</h1>
      <h2>Mensaje previo: {prevMensajeRef.current}</h2>
    </div>
  );
};

export const UseRef = () => {
  // podemos guardar datos sin tener que volver a renderizar el componente, esto puede ser beneficioso llegado a casos especificos, pero hay que saber usarlo.
  const contador = useRef(0);

  //   const [cont, setCont] = useState(0);
  const handleClick = (incremente) => {
    if (incremente) {
      //   setCont(cont + 1);
      contador.current++;
    } else {
      //   setCont(cont - 1);
      contador.current--;
    }
    // ahora el render no se vuelve a ejecutar cada vez q hacemos un click en el boton incrementar o resta
    console.log(`contador ${contador.current}`);
  };
  // este caso especifico, es para cuando NO queremos renderizar de nuevo el estado del contador, para este caso NO nos sirve useState

  console.log("render");
  return (
    <div className="flex flex-col items-center min-h-screen gap-10">
      <button onClick={() => handleClick(true)}>Incremente</button>
      <button onClick={() => handleClick(false)}>Resta</button>
      {/* <Contador /> */}
      {/* <AutoFocus /> */}
      <PreviousMSG/>
    </div>
  );
};
