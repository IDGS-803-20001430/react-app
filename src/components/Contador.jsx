import { useState } from "react";

const Contador = ({inicial, incremento}) => {
    //Definiendo un nuevo estado para el componente.
    const [contador, setContador] =  useState(inicial);

    //Función para disminuir el contador
    const disminuir = () =>{
        setContador(contador - incremento);
    }

    //Función para aumentar el contador
    const aumentar = () =>{
        setContador(contador + incremento);
    }

    const reset = () =>{
        setContador(inicial);
    }

  return (
    <p>
        
        <button onClick={disminuir} >-</button>
        <h1>{contador}</h1>
        <button onClick={aumentar}>+</button>
        <br />
        <button class="resert" onClick={reset}>Resert</button>
    </p>
    
  )
}

export default Contador
