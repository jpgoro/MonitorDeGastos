import { useState } from "react";
import Mensaje from "./Mensaje";


const NuevoPresupuesto = ({ presupuesto, setPresupuesto }) => {
  const[mensaje, setMensaje] = useState('')

  const handlePresupuesto = (e) => { 
    e.preventDefault();
    if(Number(presupuesto) || Number(presupuesto) < 0){
      setMensaje('No es un presupuesto válido');
    }
  }


  return (
    <div className="contenedor-presupuesto contenedor sombra">
      <form onSubmit={handlePresupuesto} className="formulario">
        <div className="campo">
          <label>Definir Presupuesto</label>
          <input
            type="text"
            value={presupuesto}
            className="nuevo-presupuesto"
            placeholder="Monto Presupuesto"
            onChange={(e) => setPresupuesto(e.target.value)}
          />
        </div>
          <input type="submit" value="Agregar" />
          {mensaje && <Mensaje tipo="error">{mensaje}</Mensaje>}
      </form>
    </div>
  );
};

export default NuevoPresupuesto;
