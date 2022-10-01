import Gasto from "./Gasto";
const ListadoGastos = ({gastos, setGastoEditar}) => {
  return (
    <div className="listado-gastos contenedor">
      <h2>{gastos.length ? 'Gastos' : 'Aún No Hay Gastos'}</h2>

      {gastos.map(gasto => (<Gasto key={gasto.id} gasto={gasto} setGastoEditar={setGastoEditar}/>))}
    </div>
  );
};

export default ListadoGastos;
