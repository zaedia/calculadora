import React from "react";
import '../estilos/BotonClear.css'

const BotonClear = (props) => (
  <button className="boton-clear" onClick={props.manejarClear}>
    BORRAR TODO
  </button>
);

export default BotonClear;
